"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function BrandOwner() {
  const { getTranslation, lang } = useTranslate();

  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <div className="flex flex-col items-center">
        <span className="text-5xl font-montserrat font-bold text-black text-center mb-2">
          {getTranslation("about_milestones_title")}
        </span>
        <span className="text-base font-segoe font-semibold text-grey text-justify md:text-center">
          {getTranslation("about_milestones_desc")}
        </span>
      </div>
      <div className="mt-20 overflow-auto">
        <img
          src={`/images/about-us/milestone-${lang}.webp`}
          alt="First Content"
          className="min-w-[800px] w-full"
        />
      </div>
    </div>
  );
}
