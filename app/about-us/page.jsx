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

export default function AboutUs() {
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
        <Description />
        <Map />
      </div>
      <VisionMision />
      <Gallery />
      <OurGroup />
      {/* <Stock /> */}
    </>
  );
}

const Description = () => {
  const { getTranslation } = useTranslate();
  return (
    <div className="flex flex-col items-center p-10 gap-10 lg:px-xCustom lg:flex-row">
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
  );
};

const Map = () => {
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
    <div className="flex flex-col items-center lg:flex-row">
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
  );
};

const VisionMision = () => {
  const { getTranslation } = useTranslate();
  return (
    <div className="grid grid-cols-1 min-[1008px]:grid-cols-2">
      <div className="flex flex-col items-start justify-center gap-2.5 p-10 bg-primaryLight min-h-[500px] max-[1008px]:min-h-[300px]">
        <span className="text-[32px] font-montserrat font-bold text-black leading-10">
          {getTranslation("common_vision")}
        </span>
        <span className="text-xl font-segoe font-medium text-grey">
          {getTranslation("about_vision_desc")}
        </span>
      </div>
      <div className="relative min-h-[500px] max-[1008px]:min-h-[300px]">
        <Image
          src="/images/about-us/vision.png"
          alt="Vision"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="relative order-4 min-[1008px]:order-3 min-h-[500px] max-[1008px]:min-h-[300px]">
        <Image
          src="/images/about-us/mission.png"
          alt="Mission"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2.5 p-10 bg-primaryLight order-3 min-[1008px]:order-4 min-h-[500px] max-[1008px]:min-h-[300px]">
        <span className="text-[32px] font-montserrat font-bold text-black leading-10">
          {getTranslation("common_mission")}
        </span>
        <div className="flex flex-col gap-2.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="p-1 flex items-center justify-center rounded-full bg-primary">
                <FaCheck size={14} className="text-white" />
              </div>
              <span className="text-lg font-segoe font-medium text-grey">
                {getTranslation(`about_mission_desc${i}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex gap-5 items-center">
      <div className="flex flex-col gap-2">
        <Image
          src="/images/about-us/commissioner1.png"
          alt="Comisioner"
          width={600}
          height={750}
          style={{
            width: 300,
            height: 450,
          }}
        />
        <div className="flex flex-col pl-[11px] font-segoe font-semibold">
          <span className="text-xl text-black">Eko Mujianto</span>
          <span className="text-base text-grey">
            {getTranslation("common_mainCommissioner")}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          src="/images/about-us/commissioner2.png"
          alt="Comisioner"
          width={600}
          height={750}
          style={{
            width: 300,
            height: 450,
          }}
        />
        <div className="flex flex-col pl-[11px] font-segoe font-semibold">
          <span className="text-xl text-black">R. Iskandar Hidayat</span>
          <span className="text-base text-grey">
            {getTranslation("common_independentCommissioner")}
          </span>
        </div>
      </div>
    </div>
  );
};

const OurGroup = () => {
  const { getTranslation } = useTranslate();
  return (
    <div className="bg-primaryLight p-10 gap-10 flex flex-wrap items-center justify-center md:justify-between">
      <span className="text-4xl font-montserrat font-bold text-black">
        {getTranslation("common_ourGroup")}
      </span>
      <div className="flex flex-wrap justify-center gap-10 md:gap-5">
        <Image
          src="/images/logo/sas.png"
          alt="SAS"
          width={1000}
          height={500}
          style={{
            width: "auto",
            height: 80,
          }}
        />
        <Image
          src="/images/logo/lazizza.png"
          alt="Lazizza"
          width={1000}
          height={500}
          style={{
            width: "auto",
            height: 80,
          }}
        />
      </div>
    </div>
  );
};
