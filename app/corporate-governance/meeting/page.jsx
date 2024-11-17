"use client";

import Image from "next/image";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";
import { useTranslate } from "@/hooks";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/Skeleton";
import axios from "axios";

const BASE_URL = "https://dev.skbfood.id/wp-json/wp/v2/";

export default function AnnualReport() {
  const { getTranslation } = useTranslate();
  const [activeTab, setActiveTab] = useState("2023");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const [loading, setLoading] = useState(false);

  function downloadFile(url) {
    window.open(url, "_blank");
  }

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const data = await axios.get(
          `${BASE_URL}posts?categories=36&_embed&per_page=50`
        );
        const data1 = data.data.filter((item) => item.tags.includes(44));
        const data2 = data.data.filter((item) => item.tags.includes(43));

        setData1(data1);
        setData2(data2);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <Tabs
        defaultValue="2023"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="flex-wrap !justify-start">
          {[
            {
              value: "2023",
              label: "2023",
            },
            {
              value: "2024",
              label: "2024",
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

      <div className="flex flex-col gap-5">
        {loading ? (
          <>
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
          </>
        ) : (
          (() => {
            const document =
              activeTab === "2023" ? data1 : activeTab === "2024" ? data2 : [];

            if (document.length === 0) {
              return (
                <div className="flex flex-col justify-center gap-2.5 col-span-full">
                  <span className="text-base font-montserrat font-bold text-primary">
                    {getTranslation("common_noData")}
                  </span>
                  <span className="text-base font-montserrat font-bold text-black">
                    {getTranslation("common_noDataDesc")}
                  </span>
                </div>
              );
            }

            return document.map((item, index) => {
              const url = item.content?.rendered.replace(/<[^>]*>?/gm, "");
              return (
                <div
                  className="w-full flex items-center py-3 px-6 bg-white rounded-xl shadow-md border border-slate-200"
                  key={index}
                >
                  <img
                    src="/icons/charter.svg"
                    alt="charter"
                    width={40}
                    height={40}
                  />
                  <span className="text-base font-montserrat font-bold ml-2">
                    {item.title?.rendered}
                  </span>
                  <Button
                    className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold ml-auto"
                    onClick={() => window.open(url, "_blank")}
                  >
                    {getTranslation("common_download")}
                    <FiDownload className="font-bold ml-5" />
                  </Button>
                </div>
              );
            });
          })()
        )}
      </div>
    </div>
  );
}
