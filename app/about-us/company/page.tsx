"use client";

import { FaBasketShopping, FaFish, FaHotel } from "react-icons/fa6";
import { useTranslate } from "@/app/TranslationProvider";
import { IoRestaurant } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { AiFillShop } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative">
        <img
          src="/images/background.webp"
          alt="Background"
          className="absolute inset-0 z-[-1] object-cover object-center"
        />
        <div className="flex flex-col items-center p-10 pt-32 gap-x-32 gap-y-10 xl:px-xCustom xl:flex-row">
          <div className="relative min-w-[520px] w-full max-w-[550px] h-[450px] overflow-hidden">
            <img
              src="/images/home/partner_1.webp"
              alt="Partner"
              width={290}
              height={290}
              data-aos="fade-right"
              className="aspect-square absolute top-0 left-0"
            />
            <img
              src="/images/home/partner_2.webp"
              alt="Partner"
              width={210}
              height={210}
              data-aos="fade-left"
              className="aspect-square absolute top-[150px] right-0"
            />
            <div
              className="absolute bottom-10 left-[180px] bg-secondary aspect-square w-48 h-48 rounded-xl flex flex-col items-center justify-center gap-2"
              data-aos="fade-up"
            >
              <span className="text-lg font-montserrat font-bold text-black w-3/5 text-center text-wrap">
                {getTranslation("common_partner")}
              </span>
              <span className="text-5xl text-center font-montserrat font-bold text-primary">
                950+
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <img
              src="/images/logo/skb_food.webp"
              alt="SKB Food"
              width={900}
              height={600}
              style={{
                width: "200px",
                height: "auto",
              }}
              className="mb-3"
            />
            <span className="text-xl font-montserrat font-bold text-black">
              {getTranslation("about_description_desc1")}
            </span>
            <span className="text-base font-segoe font-semibold text-grey">
              {getTranslation("about_description_desc2")}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center pb-32 xl:flex-row">
          <div className="flex flex-col gap-2.5 w-full xl:w-1/2 p-10 xl:pl-xCustom">
            <span className="text-xl font-montserrat font-bold text-black">
              {getTranslation("about_map_desc1")}
            </span>
            <span className="text-base font-segoe font-semibold text-grey mb-3">
              {getTranslation("about_map_desc2")}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          <div className="relative w-full xl:w-1/2 overflow-hidden">
            <div className="md:absolute top-0 right-5 p-3 bg-white/80 shadow-md rounded-2xl border flex items-center gap-3 max-w-[350px] z-10 mx-auto md:mx-0">
              <img
                src="/icons/flag.svg"
                alt="Indonesia Map"
                width={37}
                height={37}
                className="max-[450px]:hidden"
              />
              <span className="text-base font-montserrat font-bold text-black text-balance max-[450px]:text-center">
                {getTranslation("about_map_desc3")}
              </span>
            </div>
            <div className="relative overflow-auto p-5 lg:p-10 lg:pr-0">
              <img
                src="/images/about-us/map.svg"
                alt="Indonesia Map"
                width={1600}
                height={768}
                style={{
                  minWidth: "700px",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
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
            <img
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
