"use client";

import { useEffect } from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import AOS from "aos";
import { useTranslate } from "@/app/TranslationProvider";

import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col items-center p-10 pt-32 gap-x-32 gap-y-10 xl:px-xCustom xl:flex-row">
      <div className="relative min-w-[520px] w-full max-w-[550px] h-[450px] overflow-hidden">
        <img
          src="/images/home/partner_1.webp"
          alt="Partner"
          width={290}
          height={290}
          data-aos="fade-right"
          className="aspect-square absolute top-0 left-0"
        />
        <img
          src="/images/home/partner_2.webp"
          alt="Partner"
          width={210}
          height={210}
          data-aos="fade-left"
          className="aspect-square absolute top-[150px] right-0"
        />
        <div
          className="absolute bottom-10 left-[180px] left-0 bg-secondary aspect-square w-48 h-48 rounded-xl flex flex-col items-center justify-center gap-2"
          data-aos="fade-up"
        >
          <span className="text-lg font-montserrat font-bold text-black w-3/5 text-center text-wrap">
            {getTranslation("common_partner")}
          </span>
          <span className="text-5xl text-center font-montserrat font-bold text-primary">
            950+
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("common_aboutUs")}
        </span>
        <span className="text-[32px] font-montserrat font-bold text-black leading-10">
          {getTranslation("home_about_title")}
        </span>
        <span className="text-base font-medium font-segoe text-grey">
          {getTranslation("home_about_desc")}
        </span>
        <Link href="/about-us/company">
          <Button size="lg">{getTranslation("common_readMore")}</Button>
        </Link>
      </div>
    </div>
  );
}
