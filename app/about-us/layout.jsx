"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { useTranslate } from "@/hooks";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const { getTranslation } = useTranslate();

  const path = pathname.split("/").pop();

  const getTranslationKey = (path) => {
    return (
      {
        company: "navbar_menu1_child1",
        "vision-mission": "navbar_menu1_child2",
        management: "navbar_menu1_child3",
        structure: "navbar_menu1_child4",
      }[path] || path
    );
  };

  return (
    <>
      <div className="relative h-[425px] bg-black/50 flex flex-col justify-center items-center">
        <img
          src="/images/breadcrumb.webp"
          alt="BreadCrumb"
          className="absolute inset-0 z-[-1] w-full h-full object-cover"
        />

        {/* Breadcrumb */}
        <span className="text-white text-center font-montserrat font-bold mb-1 px-5 text-4xl md:mb-3 md:text-6xl">
          {getTranslation(getTranslationKey(path))}
        </span>
        <div className="flex items-center text-white text-xl font-segoe font-bold">
          <Link href="/">
            <span>{getTranslation("common_home")}</span>
          </Link>
          <FaChevronRight size={16} className="mx-2 mt-1" />
          <span className="text-secondary">
            {getTranslation("navbar_menu1")}
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
