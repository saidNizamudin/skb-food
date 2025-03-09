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
        {getTranslation("gov_guide_commisioner_title")}
      </span>
      <div className="flex gap-5 flex-col lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-5">
          <span className="text-base font-segoe font-medium">
            {getTranslation("gov_guide_commisioner_desc1")}
          </span>
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
                {getTranslation("gov_guide_commisioner_desc2")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2.5 p-5 border border-primary rounded-lg md:min-w-[300px] h-max">
          <span className="text-base font-montserrat font-semibold">
            {getTranslation("gov_guide_commisioner_point_title")}
          </span>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div className="flex items-center gap-2.5" key={item}>
                <div className="flex items-center font-montserrat font-bold text-[15px] justify-center w-7 h-7 aspect-square bg-gradient text-white rounded-full">
                  {item}
                </div>
                <span className="text-base font-segoe font-medium text-black">
                  {getTranslation(`gov_guide_commisioner_point_${item}`)}
                </span>
              </div>
            ))}
          </div>
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
          {getTranslation("gov_guide_commisioner_link")}
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
