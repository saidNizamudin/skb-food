"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Structure() {
  const { getTranslation } = useTranslate();
  return (
    <div className="flex flex-col py-20 gap-y-20 px-5 md:px-10">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("navbar_menu1")}
        </span>
        <span className="text-[40px] font-montserrat font-bold text-black">
          {getTranslation("navbar_menu1_child5")}
        </span>
      </div>
      <div className="overflow-x-auto">
        <img
          src="/images/about-us/structure.webp"
          alt="Structure"
          width={1500}
          height={1000}
          style={{
            width: "100%",
            height: "auto",
            margin: "0 auto",
            maxWidth: "1500px",
            minWidth: "1000px",
          }}
        />
      </div>
    </div>
  );
}
