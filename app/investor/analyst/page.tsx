"use client";

import { useTranslate } from "@/app/TranslationProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { FaChevronDown } from "react-icons/fa6";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  DocumentForProcessingProps,
  PostByYearProps,
  PostPerYearProps,
} from "@/app/media/type";
import { FolderSearch, Loader } from "lucide-react";
import { Button } from "@/components/button";
import { FiDownload } from "react-icons/fi";

const BASE_URL = "https://dev.skbfood.id/wp-json/wp/v2/";

export default function Page() {
  const { getTranslation } = useTranslate();

  const [documents, setDocuments] = useState<PostPerYearProps>({});
  const [loading, setLoading] = useState(true);

  function downloadFile(url: string | undefined) {
    if (!url) return;
    window.open(url, "_blank");
  }

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${BASE_URL}posts?categories=47&_embed`
        );

        const tags = new Set();
        data.forEach((item: { tags: string[] }) => {
          item.tags.forEach((tag) => tags.add(tag));
        });

        const tagsData = await axios
          .get(`${BASE_URL}tags?include=${Array.from(tags).join(",")}`)
          .then((res) => {
            return res.data.map((item: { id: string; name: string }) => ({
              id: item.id,
              year: item.name.split("-").pop(),
            }));
          });

        const documentsData = data.map((item: DocumentForProcessingProps) => {
          const year = tagsData.find((tag: { id: string; year: string }) =>
            item.tags.includes(tag.id)
          ).year;
          return {
            id: item.id,
            year,
            title: item.title.rendered,
            image:
              item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/default_post.webp",
            url: item.content?.rendered.replace(/<[^>]*>?/gm, ""),
          };
        });

        // make documentsData a dict key by year desc sort
        const documentsDict: PostPerYearProps = {};
        documentsData.forEach((item: PostByYearProps) => {
          if (!documentsDict[item.year]) {
            documentsDict[item.year] = [];
          }
          documentsDict[item.year].push(item);
        });

        setDocuments(documentsDict);
      } catch (error) {
        console.error(error);
        setDocuments({});
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

  if (Object.keys(documents).length === 0) {
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
    <div className="flex flex-col p-10 py-20 gap-y-10 xl:px-xCustom">
      {
        <Accordion type="single" collapsible className="gap-2.5 grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))]">
          {Object.keys(documents).map((year) => (
            <AccordionItem
              value="item-1"
              className="bg-white shadow-lg border border-[#E9E9E9] rounded-lg"
              key={year}
            >
              <AccordionTrigger
                className="flex-row-reverse justify-between py-2.5 px-5"
                triggerIcon={
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                    <FaChevronDown className="transition-transform duration-200" />
                  </div>
                }
              >
                <div className="flex items-center gap-3">
                  <img src="/icons/review.svg" alt="Review" width={40} />
                  <span className="text-base font-montserrat font-bold ">
                    {year}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                noPaddingChild
                className="p-5 pb-10 flex flex-col gap-7"
              >
                {documents[year].map((award: PostByYearProps) => {
                  return (
                    <div
                      className="flex flex-col items-start gap-2.5"
                      key={award.id}
                    >
                      <span
                        className="text-base w-full font-montserrat font-bold text-black"
                        dangerouslySetInnerHTML={{ __html: award.title }}
                      />
                      <Button
                        className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold"
                        onClick={() => downloadFile(award.url)}
                      >
                        {getTranslation("common_download")}
                        <FiDownload className="font-bold ml-5" />
                      </Button>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      }
    </div>
  );
}
