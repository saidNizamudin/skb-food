"use client";

import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { useTranslate } from "@/app/TranslationProvider";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { getTranslation } = useTranslate();

  const path = pathname.split("/").pop() || "";

  const getTranslationKey = (path: string) => {
    return (
      {
        company: "navbar_menu1_child1",
        "vision-mission": "navbar_menu1_child2",
        milestones: "navbar_menu1_child3",
        commisioner: "navbar_menu1_child4_1",
        director: "navbar_menu1_child4_2",
        structure: "navbar_menu1_child5",
        awards: "navbar_menu1_child6",
      }[path] || path
    );
  };

  return (
    <>
      <div className="relative h-[425px] bg-black/50 flex flex-col justify-center items-center">
        <img
          src="/images/about-us/banner.webp"
          alt="BreadCrumb"
          className="absolute inset-0 z-[-1] w-full h-full object-cover"
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
            {getTranslation("navbar_menu1")}
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
