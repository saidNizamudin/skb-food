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
        principles: "navbar_menu4_child1",
        audit: "navbar_menu4_child2",
        risk: "navbar_menu4_child3",
        relationship: "navbar_menu4_child4",
        "nomination-remuneration": "navbar_menu4_child5",
        guidelines: "navbar_menu4_child6",
        articles: "navbar_menu4_child7",
        secretary: "navbar_menu4_child8",
        other: "navbar_menu4_child9",
        ethics: "navbar_menu4_child10",
        "internal-audit": "navbar_menu4_child11",
        commissioner: "navbar_menu4_child6_1",
        director: "navbar_menu4_child6_2",
        "audit-committee": "navbar_menu4_child6_3",
        "nomination-remuneration-committee": "navbar_menu4_child6_4",
        "internal-audit-charter": "navbar_menu4_child6_5",
        "commisioner-director": "navbar_menu4_child9_1",
        affiliated: "navbar_menu4_child9_2",
        whistleblower: "navbar_menu4_child9_3",
      }[path] || path
    );
  };

  return (
    <>
      <div className="relative h-[425px] bg-black/50 flex flex-col justify-center items-center">
        <img
          src="/images/governance/banner.webp"
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
            {getTranslation("navbar_menu4")}
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
