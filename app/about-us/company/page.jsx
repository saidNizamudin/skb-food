"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FaBagShopping,
  FaBasketShopping,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCircleCheck,
  FaFish,
  FaHotel,
  FaUser,
} from "react-icons/fa6";
import { CiCalendar, CiUser } from "react-icons/ci";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslate } from "@/hooks";
import { IoRestaurant } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { AiFillShop } from "react-icons/ai";
import { Button, Stock } from "@/components";

export default function Company() {
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
    <>
      <div className="relative">
        <Image
          src="/images/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 z-[-1]"
        />
        <div className="flex flex-col items-center p-10 pt-32 gap-x-32 gap-y-10 md:px-xCustom min-[1240px]:flex-row">
          <Image
            src="/images/home/partner.svg"
            alt="Partner"
            width={600}
            height={400}
            style={{
              width: "100%",
              maxWidth: 550,
              height: "auto",
              maxHeight: 400,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col gap-2.5">
            <Image
              src="/images/logo/skb_food.png"
              alt="SKB Food"
              width={900}
              height={600}
              style={{
                width: "200px",
                height: "auto",
              }}
              className="mb-3"
            />
            <span className="text-xl font-segoe font-bold text-black">
              {getTranslation("about_description_desc1")}
            </span>
            <span className="text-base font-montserrat font-semibold text-grey">
              {getTranslation("about_description_desc2")}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center pb-32 lg:flex-row">
          <div className="flex flex-col gap-2.5 w-full lg:w-1/2 p-10 lg:pl-xCustom">
            <span className="text-xl font-segoe font-bold text-black">
              {getTranslation("about_map_desc1")}
            </span>
            <span className="text-base font-montserrat font-semibold text-grey mb-3">
              {getTranslation("about_map_desc2")}
            </span>
            <div className="grid grid-cols-2 gap-5">
              {content.map((item, index) => {
                return (
                  <div className="flex items-center gap-5" key={index}>
                    <div className="w-12 h-12 rounded-full bg-primaryLight text-primary flex justify-center items-center">
                      {item.icon()}
                    </div>
                    <span className="text-base font-montserrat font-semibold text-black">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <Image
            src="/images/about-us/map.svg"
            alt="Indonesia Map"
            width={1024}
            height={768}
            style={{
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="w-full lg:w-1/2 p-10 pr-0"
          />
        </div>
      </div>
      <div className="bg-primaryLight flex flex-col items-center px-10 py-14 md:px-xCustom">
        <span className="text-4xl font-montserrat font-bold text-black mb-5">
          {getTranslation("common_ourGroup")}
        </span>
        <span className="text-base font-segoe font-semibold text-grey text-center mb-10">
          {getTranslation("about_ourGroup_desc")}
        </span>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={i}
              src={`/images/about-us/logo${i}.svg`}
              alt={`Logo ${i}`}
              width={1000}
              height={500}
              style={{
                width: "auto",
                height: 150,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
