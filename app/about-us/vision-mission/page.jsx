"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useTranslate } from "@/hooks";

export default function VisionMission() {
  const { getTranslation } = useTranslate();
  return (
    <>
      <div className="grid grid-cols-1 min-[1120px]:grid-cols-2">
        <div className="flex flex-col items-start justify-center h-[600px] gap-2.5 p-10 px-10 md:px-20 bg-primary">
          <span className="text-[32px] font-montserrat font-bold text-white leading-10">
            {getTranslation("common_vision")}
          </span>
          <span className="text-lg font-segoe font-medium text-white">
            {getTranslation("about_vision_desc")}
          </span>
        </div>
        <div className="relative h-[600px]">
          <Image
            src="/images/about-us/vision.png"
            alt="Vision"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative order-4 min-[1120px]:order-3 h-[600px]">
          <Image
            src="/images/about-us/mission.png"
            alt="Mission"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="flex flex-col items-start justify-center h-[600px] gap-2.5 p-10 px-10 md:px-20 bg-primary order-3 min-[1120px]:order-4">
          <span className="text-[32px] font-montserrat font-bold text-white leading-10">
            {getTranslation("common_mission")}
          </span>
          <div className="flex flex-col gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="p-1 flex items-center justify-center rounded-full bg-white">
                  <FaCheck size={14} className="text-primary" />
                </div>
                <span className="text-base font-segoe font-medium text-white">
                  {getTranslation(`about_mission_desc${i}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-10 py-20 gap-x-32 gap-y-10">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-montserrat font-bold text-black text-center">
            {getTranslation("about_value_title")}
          </span>
          <span className="text-base font-segoe font-medium text-grey text-center">
            {getTranslation("about_value_desc")}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <div className="flex flex-col items-start gap-10 w-[250px] p-10 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg">
            <Image
              src="/icons/integrity.svg"
              alt="Integrity"
              width={100}
              height={100}
            />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc1")}
            </span>
          </div>

          <div className="flex flex-col items-start gap-10 w-[250px] p-10 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg">
            <Image
              src="/icons/happy.svg"
              alt="Happy"
              width={100}
              height={100}
            />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc2")}
            </span>
          </div>

          <div className="flex flex-col items-start gap-10 w-[250px] p-10 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg">
            <Image
              src="/icons/trustworth.svg"
              alt="Trustworthy"
              width={100}
              height={100}
            />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc3")}
            </span>
          </div>

          <div className="flex flex-col items-start gap-10 w-[250px] p-10 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg">
            <Image
              src="/icons/focus.svg"
              alt="Focus"
              width={100}
              height={100}
            />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc4")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
