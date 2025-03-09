"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function OurGroup() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-10 py-20 xl:px-xCustom">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-segoe font-bold text-primary text-center mb-2">
          {getTranslation("common_ourGroup")}
        </span>
        <span className="text-lg font-segoe font-semibold text-grey text-justify md:text-center">
          {getTranslation("group_desc")}
        </span>
      </div>
      <div className="flex flex-col items-center mt-20 gap-20">
        <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
          <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
            <img
              src="/images/group/content1.webp"
              alt="First Content"
              className="absolute inset-0 w-full h-full object-cover object-right-top"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
            <img
              src="/images/group/lazizza.svg"
              alt="Lazizza"
              width={1000}
              height={500}
              style={{
                width: "fit-content",
                height: 90,
                marginBottom: 12,
              }}
            />
            <span className="text-xl font-montserrat font-bold text-primary">
              Lazizaa Rahmat Semesta
            </span>
            <span className="text-xl font-montserrat font-bold text-black text-justify">
              {getTranslation("group_content1_desc1")}
            </span>
            <span className="text-base font-segoe font-semibold text-grey text-justify">
              {getTranslation("group_content1_desc2")}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
          <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
            <img
              src="/images/group/sas.svg"
              alt="SAS"
              width={1000}
              height={500}
              style={{
                width: "fit-content",
                height: 90,
                marginBottom: 12,
              }}
            />
            <span className="text-xl font-montserrat font-bold text-primary">
              PT. Sumber Asri Sejahtera
            </span>
            <span className="text-xl font-montserrat font-bold text-black text-justify">
              {getTranslation("group_content2_desc1")}
            </span>
            <span className="text-base font-segoe font-semibold text-grey text-justify">
              {getTranslation("group_content2_desc2")}
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
            <img
              src="/images/group/content2.webp"
              alt="Second Content"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
