"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";

export default function Charter() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col gap-5 px-10 py-20 min-[1450px]:px-xCustom">
      <div className="w-full flex items-center py-3 px-6 bg-white rounded-xl shadow-md border border-slate-200">
        <img src="/icons/charter.svg" alt="charter" width={40} height={40} />
        <span className="text-base font-montserrat font-bold ml-2">
          {getTranslation("charter_internal_audit")}
        </span>
        <Button
          className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold ml-auto"
          onClick={() => window.open("", "_blank")}
        >
          {getTranslation("common_download")}
          <FiDownload className="font-bold ml-5" />
        </Button>
      </div>
      <div className="w-full flex items-center py-3 px-6 bg-white rounded-xl shadow-md border border-slate-200">
        <img src="/icons/charter.svg" alt="charter" width={40} height={40} />
        <span className="text-base font-montserrat font-bold ml-2">
          {getTranslation("charter_audit_committee")}
        </span>
        <Button
          className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold ml-auto"
          onClick={() => window.open("", "_blank")}
        >
          {getTranslation("common_download")}
          <FiDownload className="font-bold ml-5" />
        </Button>
      </div>
      <div className="w-full flex items-center py-3 px-6 bg-white rounded-xl shadow-md border border-slate-200">
        <img src="/icons/charter.svg" alt="charter" width={40} height={40} />
        <span className="text-base font-montserrat font-bold ml-2">
          {getTranslation("charter_audit_committee")}
        </span>
        <Button
          className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold ml-auto"
          onClick={() => window.open("", "_blank")}
        >
          {getTranslation("common_download")}
          <FiDownload className="font-bold ml-5" />
        </Button>
      </div>
    </div>
  );
}
