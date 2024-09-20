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

export default function Structure() {
  const { getTranslation } = useTranslate();
  return (
    <div className="flex flex-col py-20 gap-y-20 px-5 md:px-10">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("navbar_menu1_child3")}
        </span>
        <span className="text-[40px] font-montserrat font-bold text-black">
          {getTranslation("navbar_menu1_child4")}
        </span>
      </div>
      <div className="overflow-x-auto">
        <Image
          src="/images/about-us/structure.png"
          alt="Structure"
          width={1500}
          height={1000}
          style={{
            width: "100%",
            height: "auto",
            margin: "0 auto",
            maxWidth: "1500px",
            minWidth: "1000px",
          }}
        />
      </div>
    </div>
  );
}
