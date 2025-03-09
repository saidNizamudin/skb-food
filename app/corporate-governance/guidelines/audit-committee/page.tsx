"use client";

import { useTranslate } from "@/app/TranslationProvider";
import { Button } from "@/components/button";
import { FiDownload } from "react-icons/fi";

export default function Page() {
  const { getTranslation } = useTranslate();

  function downloadFile(url: string | undefined) {
    if (!url) return;
    window.open(url, "_blank");
  }

  return (
    <div className="flex flex-col p-5 xl:py-20 gap-y-5 xl:px-xCustom">
      <span className="text-3xl font-montserrat font-bold">
        {getTranslation("gov_guide_audit_title")}
      </span>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-base font-segoe font-medium">
            {getTranslation("gov_guide_audit_desc1")}
          </span>
          <span className="text-base font-segoe font-medium">
            {getTranslation("gov_guide_audit_desc2")}
          </span>
          <span className="text-base font-segoe font-medium">
            {getTranslation("gov_guide_audit_desc3")}
          </span>
        </div>
        <div className="px-5 py-6 bg-secondaryLight border border-secondary rounded-lg flex gap-5 items-start">
          <div className="bg-white rounded-md p-1 max-sm:hidden">
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
              {getTranslation("gov_guide_audit_desc4")}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-3 shadow-lg border border-[#E9E9E9] rounded-lg py-3 px-6">
        <img
          src="/icons/award.svg"
          alt="Review"
          width={40}
          className="max-sm:hidden"
        />
        <span className="text-base font-montserrat font-bold ">
          {getTranslation("gov_guide_audit_link")}
        </span>
        <Button
          className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold ml-auto"
          onClick={() => downloadFile("")}
        >
          {getTranslation("common_download")}
          <FiDownload className="font-bold ml-5" />
        </Button>
      </div>
    </div>
  );
}
