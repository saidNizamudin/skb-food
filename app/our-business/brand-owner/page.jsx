"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";

export default function BrandOwner() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-segoe font-bold text-primary text-center mb-2">
          {getTranslation("common_ourBusiness")}
        </span>
        <span className="text-lg font-segoe font-semibold text-grey text-justify md:text-center">
          {getTranslation("business_desc")}
        </span>
      </div>
      <div className="flex flex-col items-center mt-20 gap-20">
        <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
          <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
            <Image
              src="/images/business/content1.png"
              layout="fill"
              objectFit="cover"
              objectPosition="right top"
              alt="First Content"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
            <Image
              src="/images/logo/eskabeh.png"
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
              Eskabeh Seafood
            </span>
            <span className="text-xl font-montserrat font-bold text-black text-justify">
              {getTranslation("business_content1_desc1")}
            </span>
            <span className="text-base font-segoe font-semibold text-grey text-justify">
              {getTranslation("business_content1_desc2")}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
          <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
            <Image
              src="/images/logo/skb_catering.png"
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
              SKB Catering
            </span>
            <span className="text-xl font-montserrat font-bold text-black text-justify">
              {getTranslation("business_content2_desc1")}
            </span>
            <span className="text-base font-segoe font-semibold text-grey text-justify">
              {getTranslation("business_content2_desc2")}
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
            <Image
              src="/images/business/content2.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Second Content"
            />
          </div>
        </div>
      </div>
    </div>
  );
}