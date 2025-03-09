"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Secretary() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-10 py-20 xl:px-xCustom">
      <span className="text-2xl font-segoe font-bold text-primary text-center mb-2">
        {getTranslation("common_ourGroup")}
      </span>
    </div>
  );
}
