"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Profession() {
  const { getTranslation } = useTranslate();

  return (
    <div className="gap-10 grid px-5 py-10 xl:px-xCustom xl:py-20 grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
      <div className="w-full flex flex-col gap-5">
        <img
          src="/images/investor/accountant2.webp"
          alt="accountant2"
          className="h-[130px] w-max"
        />
        <div className="flex flex-col gap-2">
          <span className="text-sm font-montserrat font-bold w-max rounded-full text-white px-6 py-1 bg-primary">
            {getTranslation("common_publicAccountant")}
          </span>
          <span className="text-base font-montserrat font-semibold">
            KAP Heliantono & Rekan
          </span>
          <span className="text-base text-grey font-segoe font-medium">
            Aminta Plaza Lt. 7 Suite 704, Jalan TB. Simatupang Kav. 10, Jakarta
            Selatan 12310
            <br />
            Phone : 021-7661348
            <br />
            Fax : 021-7661351
            <br />
            Email : info@heliantonorekan.com
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <img
          src="/images/investor/accountant1.webp"
          alt="accountant1"
          className="h-[130px] w-max"
        />
        <div className="flex flex-col gap-2">
          <span className="text-sm font-montserrat font-bold w-max rounded-full text-white px-6 py-1 bg-primary">
            {getTranslation("common_publicAccountant")}
          </span>
          <span className="text-base font-montserrat font-semibold">
            PT Adimitra Jasa Korpora
          </span>
          <span className="text-base text-grey font-segoe font-medium">
            Kirana Boutique Office - Jl Kirana Avenue III Blok F3 No. 5 Kelapa
            Gading - Jakarta Utara 14240
            <br />
            Phone : 021-2974 5222
            <br />
            Fax : 021-2928-9961
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <img
          src="/images/investor/custody.webp"
          alt="custody"
          className="h-[130px] w-max"
        />
        <div className="flex flex-col gap-2">
          <span className="text-sm font-montserrat font-bold w-max rounded-full text-white px-6 py-1 bg-primary">
            {getTranslation("common_custody")}
          </span>
          <span className="text-base font-montserrat font-semibold">
            PT Kustodian Sentral Efek Indonesia (KSEI)
          </span>
          <span className="text-base text-grey font-segoe font-medium">
            Indonesia Stock Exchange Building 1st Tower, 5th Floor Jl. Jend.
            Sudirman Kav. 52-53 Jakarta 12190, Indonesia
            <br />
            Phone : +62 21 52991099
            <br />
            Fax : +62 21 52991199
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <img
          src="/images/investor/notary.webp"
          alt="notary"
          className="h-[130px] w-max"
        />
        <div className="flex flex-col gap-2">
          <span className="text-sm font-montserrat font-bold w-max rounded-full text-white px-6 py-1 bg-primary">
            {getTranslation("common_notary")}
          </span>
          <span className="text-base font-montserrat font-semibold">
            Dr. Sugih Haryati, SH.,M.kn
          </span>
          <span className="text-base text-grey font-segoe font-medium">
            Jl. RC. Veteran Bintaro Raya No. 11A Jakarta Selatan Indonesia
            <br />
            Phone : 021 7349 0201
            <br />
            Email : notaris.sh@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}
