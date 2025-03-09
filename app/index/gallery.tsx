"use client";

import { useTranslate } from "@/app/TranslationProvider";

import "aos/dist/aos.css";
export default function Gallery() {
  const { getTranslation } = useTranslate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center p-10 bg-primary">
        <div className="flex flex-col items-start justify-center gap-2.5 w-full lg:w-4/5">
          <img
            src="/images/logo/skb_catering_white.webp"
            alt="Catering"
            width={900}
            height={600}
            style={{
              width: "auto",
              maxHeight: 80,
              marginBottom: 20,
            }}
          />
          <span className="text-xl font-segoe font-bold text-white">
            {getTranslation("common_ourBusiness")}
          </span>
          <span className="text-[32px] font-montserrat font-bold text-white leading-10">
            {getTranslation("home_skb_title")}
          </span>
          <span className="text-base font-segoe font-medium text-white">
            {getTranslation("home_skb_desc")}
          </span>
        </div>
      </div>
      <img
        src="/images/home/catering.webp"
        alt="Catering"
        width={900}
        height={600}
        style={{
          width: "100%",
          maxHeight: "470px",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <img
        src="/images/home/eskabeh.webp"
        alt="Catering"
        width={900}
        height={600}
        className="order-4 md:order-3"
        style={{
          width: "100%",
          maxHeight: "470px",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="flex justify-center p-10 bg-primary order-3 md:order-4">
        <div className="flex flex-col items-start justify-center gap-2.5 w-full lg:w-4/5">
          <img
            src="/images/logo/eskabeh_white.webp"
            alt="Eskabeh Seafood"
            width={900}
            height={600}
            style={{
              width: "auto",
              maxHeight: 80,
              marginBottom: 20,
            }}
          />
          <span className="text-xl font-segoe font-bold text-white">
            {getTranslation("common_ourBusiness")}
          </span>
          <span className="text-[32px] font-montserrat font-bold text-white leading-10">
            {getTranslation("home_eskabeh_title")}
          </span>
          <span className="text-base font-segoe font-medium text-white">
            {getTranslation("home_eskabeh_desc")}
          </span>
        </div>
      </div>
    </div>
  );
}
