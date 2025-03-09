"use client";

import { Button } from "@/components/button";
import { FiDownload } from "react-icons/fi";
import { useTranslate } from "@/app/TranslationProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostProps } from "@/app/media/type";
import { FolderSearch, Loader } from "lucide-react";

const BASE_URL = "https://dev.skbfood.id/wp-json/wp/v2/";
const CURRENT_YEAR = 2025;

export default function Page() {
  const { getTranslation } = useTranslate();
  const [document, setDocument] = useState<{ [key: string]: PostProps[] }>({});
  const [loading, setLoading] = useState(true);

  function downloadFile(url: string) {
    window.open(url, "_blank");
  }

  function categorizeAndSortDocuments(docs: PostProps[]): {
    [key: string]: PostProps[];
  } {
    const result: { [key: string]: PostProps[] } = {};

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
        const quarterA = a.title?.rendered?.trim()?.match(/Q\d/)?.[0];
        const quarterB = b.title?.rendered?.trim()?.match(/Q\d/)?.[0];
        return (quarterA || "").localeCompare(quarterB || "");
      });
    });

    const sortedResult = Object.keys(result)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .reduce<{ [key: string]: PostProps[] }>((acc, year) => {
        acc[year] = result[year];
        return acc;
      }, {});

    return sortedResult;
  }

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${BASE_URL}posts?categories=36&tags=37&_embed&per_page=50`
        );
        setDocument(categorizeAndSortDocuments(data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col px-10 py-20 xl:px-xCustom justify-center items-center w-full">
        <Loader size={48} className="text-primary animate-spin" />
        <span className="text-xl font-montserrat font-bold text-primary mt-5">
          {getTranslation("common_loading")}
        </span>
        <span className="text-base font-montserrat font-medium text-black">
          {getTranslation("common_loadingDesc")}
        </span>
      </div>
    );
  }

  if (Object.keys(document).length === 0) {
    return (
      <div className="flex flex-col px-10 py-20 xl:px-xCustom justify-center items-center w-full">
        <FolderSearch size={48} className="text-primary" />
        <span className="text-xl font-montserrat font-bold text-primary mt-5">
          {getTranslation("common_noData")}
        </span>
        <span className="text-base font-montserrat font-medium text-black">
          {getTranslation("common_noDataDesc")}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-10 py-20 xl:px-xCustom">
      <div className="flex flex-col gap-20">
        {Array.from({ length: CURRENT_YEAR + 1 })
          .map((_, i) => CURRENT_YEAR - i)
          .filter((year) => document[year])
          .map((year, index) => (
            <div key={index} className="flex flex-col gap-5">
              <div className="text-2xl font-montserrat font-bold text-primary flex items-center gap-5">
                {year}
                <div className="w-10/12 h-1 bg-gray-300" />
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,_300px)] gap-x-10 gap-y-20">
                {document[year].map((item, itemIndex) => {
                  const url = item.content?.rendered.replace(/<[^>]*>?/gm, "");
                  return (
                    <div className="flex flex-col gap-2.5" key={itemIndex}>
                      <div className="relative rounded-xl w-max min-w-[300px] max-w-[400px] min-h-[290px] overflow-hidden shadow-2xl border-2">
                        <img
                          src={
                            item._embedded?.["wp:featuredmedia"]?.[0]
                              ?.source_url || "/default_post.webp"
                          }
                          alt={item.title?.rendered}
                          width={1000}
                          height={1000}
                          style={{
                            height: "auto",
                            width: "300px",
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
          ))}
      </div>
    </div>
  );
}
