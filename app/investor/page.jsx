"use client";

import Image from "next/image";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";
import { useTranslate } from "@/hooks";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/Skeleton";
import axios from "axios";

const BASE_URL = "https://skbfood.id/wp-json/wp/v2/";

export default function AnnualReport() {
  const { getTranslation } = useTranslate();
  const [activeTab, setActiveTab] = useState("financial");
  const [allData, setAllData] = useState([]);
  const [document, setDocument] = useState([]);
  const [financial, setFinancial] = useState([]);
  const [loading, setLoading] = useState(true);

  const CURRENT_YEAR = 2024;

  function downloadFile(url) {
    window.open(url, "_blank");
  }

  async function categorizeAndSortDocuments(docs) {
    const result = {};

    docs.forEach((item) => {
      const yearMatch = item.title?.rendered?.trim()?.match(/\d{4}$/);
      if (yearMatch) {
        const year = yearMatch[0];
        if (!result[year]) result[year] = [];
        result[year].push(item);
      }
    });

    Object.keys(result).forEach((year) => {
      result[year].sort((a, b) => {
        const quarterA = a.title?.rendered?.trim()?.match(/Q\d/)[0];
        const quarterB = b.title?.rendered?.trim()?.match(/Q\d/)[0];
        return quarterA.localeCompare(quarterB);
      });
    });

    const sortedResult = Object.keys(result)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .reduce((acc, year) => {
        acc[year] = result[year];
        return acc;
      }, {});

    return sortedResult;
  }

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const data = await axios.get(
          `${BASE_URL}posts?categories=36&_embed&per_page=50`
        );
        setAllData(data.data);
        const financialData = await categorizeAndSortDocuments(
          data.data.filter((item) => item.tags.includes(37))
        );
        console.log(financialData);
        setFinancial(financialData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const tag = (() => {
      switch (activeTab) {
        case "annual":
          return 40;
        case "sustainability":
          return 38;
        case "prospectus":
          return 39;
        case "presentation":
          return 41;
        default:
          return 37;
      }
    })();
    setDocument(allData.filter((item) => item.tags.includes(tag)));
  }, [activeTab, allData]);

  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <Tabs
        defaultValue="financial"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="flex-wrap !justify-start">
          {[
            {
              value: "financial",
              label: getTranslation("navbar_menu4_child1"),
            },
            { value: "annual", label: getTranslation("navbar_menu4_child2") },
            {
              value: "sustainability",
              label: getTranslation("navbar_menu4_child3"),
            },
            {
              value: "prospectus",
              label: getTranslation("navbar_menu4_child4"),
            },
            {
              value: "presentation",
              label: getTranslation("navbar_menu4_child5"),
            },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="max-[800px]:w-full"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div
        className={`gap-x-10 gap-y-20 ${
          activeTab === "financial"
            ? "flex flex-col gap-20"
            : "grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]"
        }`}
      >
        {loading ? (
          <>
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
          </>
        ) : document.length === 0 ? (
          <div className="flex flex-col justify-center gap-2.5 col-span-full">
            <span className="text-base font-montserrat font-bold text-primary">
              {getTranslation("common_noData")}
            </span>
            <span className="text-base font-montserrat font-bold text-black">
              {getTranslation("common_noDataDesc")}
            </span>
          </div>
        ) : activeTab === "financial" ? (
          Array.from({ length: CURRENT_YEAR + 1 })
            .map((_, i) => CURRENT_YEAR - i)
            .filter((year) => financial[year])
            .map((year, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="text-2xl font-montserrat font-bold text-primary flex items-center gap-5">
                  {year}
                  <div className="w-10/12 h-1 bg-gray-300" />
                </div>
                <div className="grid gap-x-10 gap-y-20 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
                  {financial[year].map((item, itemIndex) => {
                    const url = item.content?.rendered.replace(
                      /<[^>]*>?/gm,
                      ""
                    );
                    return (
                      <div className="flex flex-col gap-2.5" key={itemIndex}>
                        <div className="relative rounded-xl w-max min-w-[300px] max-w-[400px] min-h-[290px] overflow-hidden shadow-2xl border-2">
                          <Image
                            src={
                              item._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url || "/default_post.png"
                            }
                            alt={item.title?.rendered}
                            width={1000}
                            height={1000}
                            style={{
                              height: "390px",
                              width: "auto",
                              minWidth: "300px",
                              objectFit: "cover",
                            }}
                            className="hover:scale-105 cursor-pointer"
                          />
                        </div>
                        <span className="text-base font-montserrat font-bold text-black max-w-[250px]">
                          {item.title?.rendered}
                        </span>
                        <Button
                          className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold"
                          onClick={() => downloadFile(url)}
                        >
                          {getTranslation("common_download")}
                          <FiDownload className="font-bold ml-5" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
        ) : (
          document.map((item, index) => {
            const url = item.content?.rendered.replace(/<[^>]*>?/gm, "");

            return (
              <div className="flex flex-col gap-2.5" key={index}>
                <div className="relative rounded-xl w-max min-w-[300] max-w-[400px] min-h-[290px] overflow-hidden shadow-2xl border-2">
                  <Image
                    src={
                      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "/default_post.png"
                    }
                    alt={item.title?.rendered}
                    width={1000}
                    height={1000}
                    style={{
                      height: "390px",
                      width: "auto",
                      minWidth: "300px",
                      objectFit: "cover",
                    }}
                    className="hover:scale-105 cursor-pointer"
                  />
                </div>
                <span className="text-base font-montserrat font-bold text-black max-w-[250px]">
                  {item.title?.rendered}
                </span>
                <Button
                  className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold"
                  onClick={() => {
                    downloadFile(url);
                  }}
                >
                  {getTranslation("common_download")}
                  <FiDownload className="font-bold ml-5" />
                </Button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
