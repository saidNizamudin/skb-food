"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Page() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-5 py-10 xl:py-20 xl:px-xCustom gap-12 items-center">
      <span className="text-4xl font-montserrat font-bold text-black text-center">
        {getTranslation("investor_shareholder_info_title1")}
      </span>
      <div className="overflow-auto w-full">
        <img
          src="/images/investor/shareholder-info-1.webp"
          alt="First Content"
          className="min-w-[800px] w-full max-w-[1000px] mx-auto"
        />
      </div>
      <span className="text-4xl font-montserrat font-bold text-black text-center">
        {getTranslation("investor_shareholder_info_title2")}
      </span>
      <div className="overflow-auto w-full">
        <img
          src="/images/investor/shareholder-info-2.webp"
          alt="First Content"
          className="min-w-[800px] w-full max-w-[1000px] mx-auto"
        />
      </div>
    </div>
  );
}
