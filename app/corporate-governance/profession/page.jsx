"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";

export default function Profession() {
  const { getTranslation } = useTranslate();

  return (
    <div className="grid gap-10 px-10 py-20 min-[1450px]:px-xCustom grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <div className="w-full flex flex-col">
        <img
          src="/images/governance/notary.png"
          alt="notary"
          className="w-full rounded-xl mb-4"
        />
        <span
          className="text-base font-montserrat font-bold w-max rounded-full text-white px-7 py-[2px]"
          style={{
            background:
              "linear-gradient(96.86deg, #F1592A 2.35%, #FBC54E 98.13%)",
          }}
        >
          {getTranslation("common_notary")}
        </span>
        <span className="text-base font-montserrat font-semibold mt-4">
          Dr. Sugih Haryati, SH.,M.kn
        </span>
        <span className="text-base text-grey font-segoe font-medium">
          Jl. RC. Veteran Bintaro Raya No. 11A Jakarta Selatan Indonesia
        </span>
      </div>
      <div className="w-full flex flex-col">
        <img
          src="/images/governance/bureau1.png"
          alt="bureau1"
          className="!h-[144px] !w-[144px] mb-4"
        />
        <span
          className="text-base font-montserrat font-bold w-max rounded-full text-white px-7 py-[2px]"
          style={{
            background:
              "linear-gradient(96.86deg, #F1592A 2.35%, #FBC54E 98.13%)",
          }}
        >
          {getTranslation("common_bureau")}
        </span>
        <span className="text-base font-montserrat font-semibold mt-4">
          PT Adimitra Jasa Korpora
        </span>
        <span className="text-base text-grey font-segoe font-medium">
          Kirana Boutique Office - Jl Kirana Avenue III Blok F3 No. 5 Kelapa
          Gading - Jakarta Utara
        </span>
      </div>{" "}
      <div className="w-full flex flex-col">
        <img
          src="/images/governance/bureau2.png"
          alt="bureau2"
          className="!w-full mb-4"
        />
        <span
          className="text-base font-montserrat font-bold w-max rounded-full text-white px-7 py-[2px]"
          style={{
            background:
              "linear-gradient(96.86deg, #F1592A 2.35%, #FBC54E 98.13%)",
          }}
        >
          {getTranslation("common_bureau")}
        </span>
        <span className="text-base font-montserrat font-semibold mt-4">
          PT Adimitra Jasa Korpora
        </span>
        <span className="text-base text-grey font-segoe font-medium">
          L’Avenue Office Tower Lantai 15 E - Jl. K.H. Guru Amin Kav 16  Jakarta
          Selatan
        </span>
      </div>
    </div>
  );
}
