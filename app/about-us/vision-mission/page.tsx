"use client";

import { FaCheck } from "react-icons/fa6";
import { useTranslate } from "@/app/TranslationProvider";

export default function VisionMission() {
  const { getTranslation } = useTranslate();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-2">
        <div className="flex flex-col items-start justify-center lg:h-[600px] gap-2.5 p-10 px-10 lg:px-20 bg-primary">
          <span className="text-[32px] font-montserrat font-bold text-white leading-10">
            {getTranslation("common_vision")}
          </span>
          <span className="text-lg font-segoe font-medium text-white">
            {getTranslation("about_vision_desc")}
          </span>
        </div>
        <div className="relative h-[600px] max-lg:hidden">
          <img
            src="/images/about-us/vision.webp"
            alt="Vision"
            className="absolute inset-0 z-[-1] w-full h-full object-cover"
          />
        </div>
        <div className="relative max-lg:hidden h-[600px]">
          <img
            src="/images/about-us/mission.webp"
            alt="Mission"
            className="absolute inset-0 z-[-1] w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center lg:h-[600px] gap-2.5 p-10 px-10 lg:px-20 bg-primary">
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
      <div className="flex flex-col items-start p-10 gap-x-32 gap-y-5">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-montserrat font-bold text-black">
            {getTranslation("about_value_title")}
          </span>
          <span className="text-base font-segoe font-medium text-grey">
            {getTranslation("about_value_desc")}
          </span>
        </div>
        <div className="w-full justify-center gap-5 mt-10 grid grid-cols-1 min-[500px]:grid-cols-2 min-[1000px]:grid-cols-4">
          <div className="flex flex-col items-start gap-2 w-full p-5 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg with-transition">
            <img
              src="/icons/integrity.svg"
              alt="Integrity"
              width={100}
              height={100}
            />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc1")}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full p-5 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg with-transition">
            <img src="/icons/happy.svg" alt="Happy" width={100} height={100} />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc2")}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full p-5 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg with-transition">
            <img
              src="/icons/trustworth.svg"
              alt="Trustworthy"
              width={100}
              height={100}
            />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc3")}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full p-5 border rounded-xl shadow-lg hover:scale-105 hover:shadow-lg with-transition">
            <img src="/icons/focus.svg" alt="Focus" width={100} height={100} />
            <span className="text-lg font-montserrat font-bold text-black text-center">
              {getTranslation("about_value_desc4")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-10 gap-x-32 gap-y-10">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-montserrat font-bold text-black">
            {getTranslation("about_attitude_title")}
          </span>
          <span className="text-base font-segoe font-medium text-grey">
            {getTranslation("about_attitude_desc")}
          </span>
        </div>
        <div className="grid gap-5 w-full grid-cols-1 md:grid-cols-2">
          {[
            "achievement",
            "innovation",
            "customer",
            "ownership",
            "teamwork",
            "neatness",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 w-full p-5 rounded-xl bg-primaryLight"
            >
              <div className="flex items-center justify-center w-[50px] h-[50px] aspect-square rounded-full bg-primary text-white">
                <img
                  src={`/icons/${item}.svg`}
                  alt={item}
                  width={31}
                  height={31}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-montserrat font-bold text-black">
                  {getTranslation(`about_attitude_title${index + 1}`)}
                </span>
                <span className="text-sm font-montserrat font-normal text-black">
                  {getTranslation(`about_attitude_desc${index + 1}`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
