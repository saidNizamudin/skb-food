"use client";

import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/button";
import { useTranslate } from "@/app/TranslationProvider";

import "aos/dist/aos.css";

export default function Subscribe() {
  const { getTranslation } = useTranslate();
  return (
    <div className="relative flex items-center justify-center bg-primary/90 p-10 min-[1500px]:px-xCustom">
      <div className="flex flex-col items-center gap-5 justify-between md:flex-row max-w-[1690px]">
        <img
          src="/images/catering.webp"
          alt="Catering"
          className="absolute inset-0 z-[-1] object-cover object-center w-full h-full"
        />
        <span className="text-white text-center text-[clamp(24px,3vw,36px)] font-bold font-montserrat w-full md:text-start md:w-3/5">
          {getTranslation("footer_email_title")}
        </span>
        <div className="relative w-3/4 md:w-2/5">
          <input
            type="text"
            className="w-full h-12 px-5 pr-12 text-black font-montserrat rounded-full outline-none"
            placeholder={getTranslation("footer_email_placeholder")}
          />

          <Button
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 !w-8 !h-8"
          >
            <FaArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
