"use client";

import { useTranslate } from "@/app/TranslationProvider";
import { Button } from "@/components/button";
import { FiDownload } from "react-icons/fi";

export default function Page() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-10 py-20 xl:px-xCustom">
      <div className="flex w-full items-center gap-10">
        <div className="relative overflow-hidden rounded-xl h-[500px] w-1/2 max-lg:hidden">
          <img
            src="/images/governance/articles.webp"
            alt="First Content"
            className="absolute inset-0 w-full h-full object-cover object-right-top"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <img
            src="/images/logo/skb_food.webp"
            alt="SKB"
            width={800}
            height={500}
            style={{
              maxWidth: "300px",
              height: "auto",
              marginBottom: 20,
            }}
          />
          <span className="text-xl font-montserrat font-semibold text-black lg:text-justify mb-5">
            {getTranslation("gov_article_desc")}
          </span>
          <Button
            className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1soiY0bTLC7hVDSvdXlys6ERb3AmJjvU0/view",
                "_blank"
              )
            }
          >
            {getTranslation("common_download")}
            <FiDownload className="font-bold ml-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
