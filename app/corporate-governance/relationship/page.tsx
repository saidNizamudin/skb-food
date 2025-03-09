"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Page() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col p-10 py-20 gap-y-5 xl:px-xCustom">
      <span className="text-3xl font-montserrat font-bold">
        {getTranslation("gov_relation_title")}
      </span>
      <div className="px-5 py-6 bg-secondaryLight border border-secondary rounded-lg flex gap-5 items-start">
        <div className="bg-white rounded-md p-1">
          <img
            src="/icons/law.svg"
            alt="Law"
            width={18}
            height={18}
            className="min-w-[18px] min-h-[18px]"
          />
        </div>
        <ul className="">
          <li className="text-base text-black font-medium font-segoe">
            {getTranslation("gov_relation_desc1")}
          </li>
          <li className="text-base text-black font-medium font-segoe">
            {getTranslation("gov_relation_desc2")}
          </li>
        </ul>
      </div>
      <span className="text-base font-segoe font-medium text-grey">
        {getTranslation("gov_relation_desc3")}
      </span>
      <span className="text-base font-segoe font-medium text-grey">
        {getTranslation("gov_relation_desc4")}
      </span>
    </div>
  );
}
