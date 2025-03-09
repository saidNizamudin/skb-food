"use client";

import { Button } from "@/components/button";
import Link from "next/link";
import { useTranslate } from "@/app/TranslationProvider";

import "aos/dist/aos.css";

export default function OurBusiness() {
  const { getTranslation } = useTranslate();
  return (
    <div className="flex flex-col gap-x-32 gap-y-10 items-start md:items-center p-10 pb-32 lg:flex-row xl:px-xCustom">
      <div className="flex flex-col gap-2.5 flex-shrink-0">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("common_ourBusiness")}
        </span>
        <span className="text-[32px] font-montserrat font-bold text-black leading-10">
          {getTranslation("home_business_title")}
        </span>
        <Link href="/our-business/food-supply">
          <Button size="lg">{getTranslation("common_readMore")}</Button>
        </Link>
      </div>
      <div className="w-full md:flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[870px]:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-6">
          {[
            {
              name: getTranslation("common_fish"),
              image: "/images/home/fish.webp",
            },
            {
              name: getTranslation("common_rice"),
              image: "/images/home/rice.webp",
            },
            {
              name: getTranslation("common_meat"),
              image: "/images/home/meat.webp",
            },
          ].map((item, index) => (
            <div
              className="relative flex-grow max-w-[400px] min-w-[250px] basis-[calc(33%-1.5rem)] aspect-[5/4] bg-slate-300 rounded-lg overflow-hidden"
              key={index}
            >
              <img
                src={item.image}
                alt={item.name}
                width={900}
                height={600}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="hover:scale-105 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 flex justify-between items-center px-7 py-5 w-full">
                <span className="text-4xl font-montserrat font-bold text-secondary">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
