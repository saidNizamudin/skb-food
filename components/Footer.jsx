"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
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
import { Button } from "@/components";

const Footer = () => {
  const { getTranslation } = useTranslate();
  const { lang } = useStore((state) => ({ lang: state.lang }));
  const { setLang } = useStore();

  return (
    <footer
      className="flex flex-col p-5 gap-5 md:gap-10 md:p-10 bg-white mt-auto"
      style={{
        boxShadow: "0px -4px 40px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
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
          <span className="text-grey font-semibold">Fax : (021) 7463 7390</span>
          <span className="text-grey font-semibold">
            Email : corporatesecretary@skbfood.id
          </span>
        </div>
        <div className="col-span-3 flex flex-col font-montserrat text-sm md:col-span-1">
          <span className="text-base text-black font-bold">
            {getTranslation("navbar_menu1")}
          </span>
          <div className="flex flex-col gap-2 mt-3 md:w-8/12">
            <Link href="/about-us/company" className="text-grey font-semibold">
              {getTranslation("navbar_menu1_child1")}
            </Link>
            <Link
              href="/about-us/vision-mission"
              className="text-grey font-semibold"
            >
              {getTranslation("navbar_menu1_child2")}
            </Link>
            <Link
              href="/about-us/management"
              className="text-grey font-semibold"
            >
              {getTranslation("navbar_menu1_child3")}
            </Link>
            <Link
              href="/about-us/structure"
              className="text-grey font-semibold"
            >
              {getTranslation("navbar_menu1_child4")}
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col font-montserrat text-sm md:col-span-1">
          <span className="text-base text-black font-bold">
            {getTranslation("navbar_menu2")}
          </span>
          <div className="flex flex-col gap-2 mt-3 md:w-8/12">
            <Link
              href="/our-business/food-supply"
              className="text-grey font-semibold"
            >
              {getTranslation("navbar_menu2_child1")}
            </Link>
            <Link
              href="/our-business/brand-owner"
              className="text-grey font-semibold"
            >
              {getTranslation("navbar_menu2_child2")}
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col font-montserrat text-sm md:col-span-1">
          <span className="text-base text-black font-bold">
            {getTranslation("navbar_menu5")}
          </span>
          <div className="flex flex-col gap-2 mt-3 md:w-8/12">
            <Link href="/media/press" className="text-grey font-semibold">
              {getTranslation("navbar_menu5_child1")}
            </Link>
            <Link href="/media/blog" className="text-grey font-semibold">
              {getTranslation("navbar_menu5_child2")}
            </Link>
            <Link href="/media/csr" className="text-grey font-semibold">
              {getTranslation("navbar_menu5_child3")}
            </Link>
          </div>
        </div>
      </div>
      <hr className="border border-[#CFCFCF]" />
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 items-center min-[915px]:justify-between">
        <span className="text-grey font-medium text-base text-center md:text-start">
          © Copyright 2024 PT Sari Kreasi Boga. All Rights Reserved.
        </span>
        <div className="flex items-center gap-2">
          <span className="text-grey font-medium mr-5 text-base text-center md:text-start">
            {getTranslation("footer_follow")}
          </span>
          <Link href="#" target="_blank" rel="nonreferrer">
            <FaFacebook
              size={20}
              className="text-white bg-primary p-2 rounded-full h-10 w-10 cursor-pointer hover:bg-primary/80"
            />
          </Link>
          <Link
            href="https://www.instagram.com/skbfood.id/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram
              size={20}
              className="text-white bg-primary p-2 rounded-full h-10 w-10 cursor-pointer hover:bg-primary/80"
            />
          </Link>
          <Link href="#" target="_blank" rel="nonreferrer">
            <FaXTwitter
              size={20}
              className="text-white bg-primary p-2 rounded-full h-10 w-10 cursor-pointer hover:bg-primary/80"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/skb-food/?originalSubdomain=id"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={20}
              className="text-white bg-primary p-2 rounded-full h-10 w-10 cursor-pointer hover:bg-primary/80"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
