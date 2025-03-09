"use client";

import { Button } from "@/components/button";
import { FiDownload } from "react-icons/fi";
import { useTranslate } from "@/app/TranslationProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostProps } from "@/app/media/type";
import { FolderSearch, Loader } from "lucide-react";

const BASE_URL = "https://dev.skbfood.id/wp-json/wp/v2/";

export default function Page() {
  const { getTranslation } = useTranslate();
  const [document, setDocument] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  function downloadFile(url: string) {
    window.open(url, "_blank");
  }

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${BASE_URL}posts?categories=36&tags=38&_embed&per_page=50`
        );
        setDocument(data);
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

  if (document.length === 0) {
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
      <div className="grid grid-cols-[repeat(auto-fill,_300px)] gap-x-10 gap-y-20">
        {document.map((item, index) => {
          const url = item.content?.rendered.replace(/<[^>]*>?/gm, "");
          return (
            <div className="flex flex-col gap-2.5" key={index}>
              <div className="relative rounded-xl w-max min-w-[300px] max-w-[400px] min-h-[290px] overflow-hidden shadow-2xl border-2">
                <img
                  src={
                    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/default_post.webp"
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
                  className="hover:scale-105 cursor-pointer with-transition"
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
        })}
      </div>
    </div>
  );
}
