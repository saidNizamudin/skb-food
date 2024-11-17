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
        articles: "navbar_menu6_child1",
        governance: "navbar_menu6_child2",
        ethics: "navbar_menu6_child3",
        risk: "navbar_menu6_child4",
        guidelines: "navbar_menu6_child5",
        charter: "navbar_menu6_child6",
        profession: "navbar_menu6_child7",
        meeting: "navbar_menu6_child8",
      }[path] || path
    );
  };

  return (
    <>
      <div className="relative h-[425px] bg-black/50 flex flex-col justify-center items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/49c2/5bf3/ed481086f97723098136fc3dfaa47c83?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aozPMWPNc-c6e4MnQVRccU3emNgo~DxiRS3o23GMX7s2XXkjae9rAvNtwXIarzSzzbTBMdV2ODBNRWTVwWJdkFQu5wbKdq2r5U7R0QaT14eoL0DchBTPO8OfO0DxihZdEtY3~ka65Toz9vwuyJ-82i~M-cxVAB-ojmM9tni9HHy4x3gmxDdKcPbwcpid69zmPlRkeszZtnvBZwd35n4snsCja~OXdXRnrWySdZ2oCLNOskJk0dYg~W2yMaFKGjgAScwJoHW5DEco74FkY~PN6L7432lS0PsFqdwt2u-syFV8doMM2B5W0n3wgwXY7xlRd6IhgAxULZwhx2LyfDxEFA__"
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
            {getTranslation("navbar_menu6")}
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
