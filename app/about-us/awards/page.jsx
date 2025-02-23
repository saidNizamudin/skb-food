"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import { FaChevronDown } from "react-icons/fa6";

export default function OurGroup() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col p-10 py-20 gap-y-20 lg:px-xCustom">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("navbar_menu1")}
        </span>
        <span className="text-[40px] font-montserrat font-bold text-black">
          {getTranslation("navbar_menu1_child6")}
        </span>
      </div>
      <Accordion type="single" collapsible className="flex flex-col gap-2.5">
        <AccordionItem
          value="item-1"
          className="bg-white shadow-lg border border-[#E9E9E9] rounded-lg"
        >
          <AccordionTrigger
            className="flex-row-reverse justify-between py-2.5 px-5"
            triggerIcon={
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                <FaChevronDown className="transition-transform duration-200" />
              </div>
            }
          >
            <div className="flex items-center gap-3">
              <img src="/icons/award.svg" alt="Check" width={40} />
              <span className="text-base font-montserrat font-bold ">
                {getTranslation("about_award_year")} 2024
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            noPaddingChild
            className="p-5 pb-10 gap-3 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex flex-col items-center gap-2.5" key={index}>
                <img
                  src="/images/catering.webp"
                  alt="awards"
                  width={1000}
                  height={500}
                  className="w-full max-w-[350px] h-auto rounded-md"
                />
                <span className="text-sm text-center w-full max-w-[350px] font-montserrat font-semibold text-black">
                  Indonesia Best Public Company Awards 2024: The Fastest Growing
                  New Public Company 2024 in Tourism & Recreation Industry for
                  Formidable Listing Performance
                </span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
