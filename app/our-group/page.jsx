"use client";

import Image from "next/image";
import { FaBasketShopping, FaFish, FaHotel } from "react-icons/fa6";
import { useTranslate } from "@/hooks";
import { IoRestaurant } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { AiFillShop } from "react-icons/ai";

export default function OurGroup() {
  const { getTranslation } = useTranslate();
  const content = [
    {
      icon: () => <FaHotel size={24} />,
      title: getTranslation("common_hotel"),
    },
    {
      icon: () => <IoRestaurant size={24} />,
      title: getTranslation("common_restaurant"),
    },
    {
      icon: () => <GiCoffeeCup size={24} />,
      title: getTranslation("common_cafe"),
    },
    {
      icon: () => <AiFillShop size={24} />,
      title: getTranslation("common_traditionalMarket"),
    },
    {
      icon: () => <FaFish size={24} />,
      title: getTranslation("common_salting"),
    },
    {
      icon: () => <FaBasketShopping size={24} />,
      title: getTranslation("common_groceryStore"),
    },
  ];
  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-segoe font-bold text-primary text-center mb-2">
          {getTranslation("common_ourGroup")}
        </span>
        <span className="text-lg font-segoe font-semibold text-grey text-justify md:text-center">
          {getTranslation("group_desc")}
        </span>
      </div>
      <div className="flex flex-col items-center mt-20 gap-20">
        <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
          <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
            <Image
              src="/images/group/content1.png"
              layout="fill"
              objectFit="cover"
              objectPosition="right top"
              alt="First Content"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
            <Image
              src="/images/logo/lazizza.png"
              alt="Lazizza"
              width={1000}
              height={500}
              style={{
                width: "fit-content",
                height: 90,
                marginBottom: 12,
              }}
            />
            <span className="text-xl font-segoe font-bold text-primary">
              Lazizaa Rahmat Semesta
            </span>
            <span className="text-xl font-segoe font-bold text-black text-justify">
              {getTranslation("group_content1_desc1")}
            </span>
            <span className="text-base font-montserrat font-semibold text-grey text-justify">
              {getTranslation("group_content1_desc2")}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
          <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
            <Image
              src="/images/logo/sas.png"
              alt="SAS"
              width={1000}
              height={500}
              style={{
                width: "fit-content",
                height: 90,
                marginBottom: 12,
              }}
            />
            <span className="text-xl font-segoe font-bold text-primary">
              PT. Sumber Asri Sejahtera
            </span>
            <span className="text-xl font-segoe font-bold text-black text-justify">
              {getTranslation("group_content2_desc1")}
            </span>
            <span className="text-base font-montserrat font-semibold text-grey text-justify">
              {getTranslation("group_content2_desc2")}
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
            <Image
              src="/images/group/content2.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Second Content"
            />
          </div>
        </div>
      </div>
    </div>
  );
}