"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import { FaArrowRight, FaBowlRice, FaFish } from "react-icons/fa6";
import { Button } from "@/components";

export default function OurGroup() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
        <div className="flex flex-col items-center mt-20 gap-x-20 gap-y-32">
          <div className="grid grid-cols-1 justify-items-center gap-x-10 gap-y-10 lg:grid-cols-2 xl:gap-x-20">
            <Image
              src="/images/business/fish.png"
              alt="Fish"
              width={1000}
              height={500}
              className="w-full h-auto md:w-2/3 lg:w-full my-auto"
            />
            <div className="flex flex-col gap-2.5 w-full md:w-2/3 lg:w-full">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-primary text-white">
                  <FaFish size={40} />
                </div>
                <span className="text-[32px] font-montserrat font-bold text-primary">
                  {getTranslation("common_fish")}
                </span>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {getTranslation("business_fish_title1")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_fish_desc1")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    {getTranslation("business_fish_title2")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_fish_desc2")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    {getTranslation("business_fish_title3")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_fish_desc3")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-x-10 gap-y-10 lg:grid-cols-2 xl:gap-x-20">
            <div className="flex flex-col gap-2.5 w-full md:w-2/3 lg:w-full order-2 lg:order-1">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-primary text-white">
                  <FaBowlRice size={40} />
                </div>
                <span className="text-[32px] font-montserrat font-bold text-primary">
                  {getTranslation("common_rice")}
                </span>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {getTranslation("business_rice_title1")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_rice_desc1")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    {getTranslation("business_rice_title2")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_rice_desc2")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    {getTranslation("business_rice_title3")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_rice_desc3")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <Image
              src="/images/business/rice.png"
              alt="Fish"
              width={1000}
              height={500}
              className="w-full h-auto md:w-2/3 lg:w-full my-auto order-1 lg:order-2"
            />
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-x-10 gap-y-10 lg:grid-cols-2 xl:gap-x-20">
            <Image
              src="/images/business/meat.png"
              alt="Fish"
              width={1000}
              height={500}
              className="w-full h-auto md:w-2/3 lg:w-full my-auto"
            />
            <div className="flex flex-col gap-2.5 w-full md:w-2/3 lg:w-full">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-primary text-white">
                  <Image
                    src={"/icons/meat.svg"}
                    alt="Meat"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-[32px] font-montserrat font-bold text-primary">
                  {getTranslation("common_meat")}
                </span>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {getTranslation("business_meat_title1")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_meat_desc1")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    {getTranslation("business_meat_title2")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_meat_desc2")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    {getTranslation("business_meat_title3")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {getTranslation("business_meat_desc3")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-5 justify-between bg-primary/90 md:flex-row px-10 py-10 min-[1450px]:px-xCustom">
        <Image
          src="/images/catering.webp"
          alt="Catering"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 z-[-1]"
        />
        <span className="text-white text-center text-[clamp(24px,3vw,36px)] font-bold font-montserrat w-full md:text-start md:w-3/5">
          {getTranslation("footer_email_title")}
        </span>
        <div className="relative w-3/4 md:w-2/5">
          <input
            type="text"
            className="w-full h-12 px-5 pr-12 text-black font-montserrat rounded-full outline-none"
            placeholder={getTranslation("footer_email_placeholder")}
          />

          <Button
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 !w-8 !h-8"
          >
            <FaArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
