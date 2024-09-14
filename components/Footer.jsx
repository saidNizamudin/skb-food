"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Fragment } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useTranslate } from "@/hooks";
import useStore from "@/app/store";

const Footer = () => {
  const { getTranslation } = useTranslate();
  const { lang } = useStore((state) => ({ lang: state.lang }));
  const { setLang } = useStore();

  return (
    <footer className="flex flex-col">
      <div className="flex flex-col items-center gap-10 justify-between bg-primary p-5 py-10 md:flex-row md:p-10 md:gap-5">
        <span className="text-white text-balance text-4xl text-center font-bold font-montserrat w-full md:text-start md:w-1/2">
          {getTranslation("footer_email_title")}
        </span>
        <div className="relative w-3/4 md:w-1/2">
          <input
            type="text"
            className="w-full h-14 px-5 pr-16 text-black font-montserrat rounded-full outline-none"
            placeholder={getTranslation("footer_email_placeholder")}
          />
          <FaArrowRight
            size={28}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 p-1 rounded-full text-white bg-primary"
          />
        </div>
      </div>
      <div className="flex flex-col p-5 gap-5 md:gap-10 md:p-10">
        <div className="w-full grid grid-cols-3 gap-5 md:grid-cols-5">
          <div className="col-span-3 flex flex-col font-montserrat text-sm md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/images/logo/skb_food.png"
                alt="SKB Food"
                width={900}
                height={600}
                style={{
                  width: "200px",
                  height: "auto",
                  marginBottom: 24,
                }}
              />
            </Link>
            <span className="text-black font-bold">Beltway Office Park</span>
            <span className="text-grey font-semibold w-10/12">
              Jl. Ampera Raya, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan,
              12540
            </span>
            <br />
            <span className="text-grey font-semibold">
              Telepon : (021) 7463 7390
            </span>
            <span className="text-grey font-semibold">
              Fax : (021) 7463 7390
            </span>
            <span className="text-grey font-semibold">
              Email : corporatesecretary@skbfood.id
            </span>
          </div>
          <div className="col-span-3 flex flex-col font-montserrat text-sm sm:col-span-1">
            <span className="text-base text-black font-bold">
              {getTranslation("common_information")}
            </span>
            <div className="flex flex-col gap-2 mt-3">
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_aboutUs")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_ourBusiness")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_investors")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_news")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_csr")}
              </Link>
            </div>
          </div>
          <div className="col-span-3 flex flex-col font-montserrat text-sm sm:col-span-1">
            <span className="text-base text-black font-bold">
              {getTranslation("common_information")}
            </span>
            <div className="flex flex-col gap-2 mt-3">
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_aboutUs")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_ourBusiness")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_investors")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_news")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_csr")}
              </Link>
            </div>
          </div>
          <div className="col-span-3 flex flex-col font-montserrat text-sm sm:col-span-1">
            <span className="text-base text-black font-bold">
              {getTranslation("common_information")}
            </span>
            <div className="flex flex-col gap-2 mt-3">
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_aboutUs")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_ourBusiness")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_investors")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_news")}
              </Link>
              <Link href="/" className="text-grey font-semibold">
                {getTranslation("common_csr")}
              </Link>
            </div>
          </div>
        </div>
        <hr className="border border-[#CFCFCF]" />
        <span className="text-grey font-medium text-sm text-center md:text-start">
          © Copyright 2024 PT Sari Kreasi Boga. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
