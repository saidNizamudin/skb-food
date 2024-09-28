"use client";

import Image from "next/image";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";
import { useTranslate } from "@/hooks";

export default function AnnualReport() {
  const { getTranslation } = useTranslate();

  return (
    <div className="grid gap-x-10 gap-y-20 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] px-10 py-20 min-[1500px]:px-xCustom">
      {[
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
      ].map((year) => (
        <div className="flex flex-col gap-2.5" key={year}>
          <div className="relative min-w-[220px] min-h-[290px] bg-slate-200 overflow-hidden">
            <Image
              src="/images/investor/financial_cover.png"
              alt="Annual Report"
              width={220}
              height={290}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="hover:scale-105 cursor-pointer"
            />
          </div>
          <span className="text-base font-montserrat font-bold text-black">
            {getTranslation("common_annualReport")} {year}
          </span>
          <Button className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold">
            {getTranslation("common_download")}
            <FiDownload className="font-bold ml-5" />
          </Button>
        </div>
      ))}
    </div>
  );
}
