"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Franchise() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col p-20 px-10 xl:px-xCustom gap-20">
      <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
        <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
          <img
            src="/images/business/logo-1.svg"
            alt="eskabeh-seafood"
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
            {getTranslation("business_franchise_content1_desc1")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify">
            {getTranslation("business_franchise_content1_desc2")}
          </span>
        </div>
        <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
          <img
            src="/images/business/franchise-1.webp"
            alt="First Content"
            className="absolute inset-0 object-cover object-right-top"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
        <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
          <img
            src="/images/business/franchise-2.webp"
            alt="Second Content"
            className="absolute inset-0 object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
          <img
            src="/images/business/logo-2.svg"
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
            Raffi Express
          </span>
          <span className="text-xl font-montserrat font-bold text-black text-justify">
            {getTranslation("business_franchise_content2_desc1")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify">
            {getTranslation("business_franchise_content2_desc2")}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
        <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
          <img
            src="/images/business/logo-3.svg"
            alt="eskabeh-seafood"
            width={1000}
            height={500}
            style={{
              width: "fit-content",
              height: 90,
              marginBottom: 12,
            }}
          />
          <span className="text-xl font-montserrat font-bold text-primary">
            Kebab Turki Baba Rafi
          </span>
          <span className="text-xl font-montserrat font-bold text-black text-justify">
            {getTranslation("business_franchise_content3_desc1")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify">
            {getTranslation("business_franchise_content3_desc2")}
          </span>
        </div>
        <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
          <img
            src="/images/business/franchise-3.webp"
            alt="First Content"
            className="absolute inset-0 object-cover object-right-top"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
        <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
          <img
            src="/images/business/franchise-4.webp"
            alt="Second Content"
            className="absolute inset-0 object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
          <img
            src="/images/business/logo-4.svg"
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
            Smokey Kebab
          </span>
          <span className="text-xl font-montserrat font-bold text-black text-justify">
            {getTranslation("business_franchise_content4_desc1")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify">
            {getTranslation("business_franchise_content4_desc2")}
          </span>
        </div>
      </div>
    </div>
  );
}
