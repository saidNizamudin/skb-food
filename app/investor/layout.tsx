"use client";

import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { useTranslate } from "@/app/TranslationProvider";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { getTranslation } = useTranslate();

  const path = pathname.split("/").pop() || "";

  const getTranslationKey = (path: string) => {
    return (
      {
        "shareholder-info": "navbar_menu5_child1",
        "sustainability-report": "navbar_menu5_child2",
        presentation: "navbar_menu5_child3",
        "financial-report": "navbar_menu5_child4",
        prospectus: "navbar_menu5_child5",
        analyst: "navbar_menu5_child6",
        "financial-summary": "navbar_menu5_child7",
        general: "navbar_menu5_child8_1",
        capital: "navbar_menu5_child8_2",
        dividend: "navbar_menu5_child8_3",
        calendar: "navbar_menu5_child9",
        stock: "navbar_menu5_child10",
        exposure: "navbar_menu5_child11",
        "annual-report": "navbar_menu5_child12",
        other: "navbar_menu5_child13",
      }[path] || path
    );
  };

  return (
    <>
      <div className="relative h-[425px] bg-black/50 flex flex-col justify-center items-center">
        <img
          src="/images/investor/banner.webp"
          alt="BreadCrumb"
          className="absolute inset-0 z-[-1] w-full h-full object-cover object-center"
        />

        {/* Breadcrumb */}
        <span className="text-white text-center font-montserrat font-bold mb-1 px-5 text-4xl md:mb-3 md:text-6xl">
          {getTranslation(getTranslationKey(path))}
        </span>
        <div className="flex items-center text-white text-base md:text-xl font-segoe font-bold">
          <Link href="/">
            <span>{getTranslation("common_home")}</span>
          </Link>
          <FaChevronRight className="mx-2 mt-1 h-3 w-3 md:h-4 md:w-4" />
          <span className="text-secondary text-base md:text-xl">
            {getTranslation("navbar_menu5")}
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
