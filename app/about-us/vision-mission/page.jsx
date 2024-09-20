"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useTranslate } from "@/hooks";

export default function VisionMission() {
  const { getTranslation } = useTranslate();
  return (
    <div className="grid grid-cols-1 min-[1120px]:grid-cols-2">
      <div className="flex flex-col items-start justify-center h-[450px] gap-2.5 p-10 px-10 md:px-20 bg-primary">
        <span className="text-[32px] font-montserrat font-bold text-white leading-10">
          {getTranslation("common_vision")}
        </span>
        <span className="text-lg font-segoe font-medium text-white">
          {getTranslation("about_vision_desc")}
        </span>
      </div>
      <div className="relative h-[450px]">
        <Image
          src="/images/about-us/vision.png"
          alt="Vision"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="relative order-4 min-[1120px]:order-3 h-[450px]">
        <Image
          src="/images/about-us/mission.png"
          alt="Mission"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col items-start justify-center h-[450px] gap-2.5 p-10 px-10 md:px-20 bg-primary order-3 min-[1120px]:order-4">
        <span className="text-[32px] font-montserrat font-bold text-white leading-10">
          {getTranslation("common_mission")}
        </span>
        <div className="flex flex-col gap-5">
          {[1, 2, 3, 4, 5].map((i) => (
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
  );
}
