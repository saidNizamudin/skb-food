"use client";

import { useTranslate } from "@/app/TranslationProvider";

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
            {getTranslation("gov_risk_desc1")}
          </span>
          <span className="text-base font-segoe font-medium text-grey lg:text-justify mb-2">
            {getTranslation("gov_risk_desc2")}
          </span>
          <span className="text-base font-segoe font-medium text-grey lg:text-justify mb-2">
            {getTranslation("gov_risk_desc3")}
          </span>
          <span className="text-base font-segoe font-medium text-grey lg:text-justify mb-2">
            {getTranslation("gov_risk_desc4")}
          </span>
        </div>
      </div>
    </div>
  );
}
