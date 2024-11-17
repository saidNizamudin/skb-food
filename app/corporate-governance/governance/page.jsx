"use client";

import Image from "next/image";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";
import { useTranslate } from "@/hooks";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/Skeleton";
import { FaArrowRight } from "react-icons/fa6";

const DUMMY_PHOTO = "/images/about-us/director3.webp";

export default function Governance() {
  const { getTranslation } = useTranslate();
  const [activeTab, setActiveTab] = useState("audit");

  const Audit = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-montserrat font-bold text-black text-center">
            {getTranslation("governance_menu1_title")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-center text-balance">
            {getTranslation("governance_menu1_desc")}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">R. Iskandar Hidayat</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu1_lead")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Sri Agustina</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu1_member")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Muh. Ihda Ainun Najib</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu1_member")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Nomination = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-montserrat font-bold text-black text-center">
            {getTranslation("governance_menu2_title")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-center text-balance">
            {getTranslation("governance_menu2_desc")}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">R. Iskandar Hidayat</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu2_lead")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Eko Mujianto</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu2_member")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">R Dimas Praditya</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu2_member")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Secretary = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-montserrat font-bold text-black text-center">
            {getTranslation("governance_menu3_title")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-center text-balance">
            {getTranslation("governance_menu3_desc")}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Nurul Wahyuningsih</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu3_lead")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Internal = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-montserrat font-bold text-black text-center">
            {getTranslation("governance_menu4_title")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-center text-balance">
            {getTranslation("governance_menu4_desc")}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-2">
            <img
              src={DUMMY_PHOTO}
              alt="Dummy Photo"
              width={600}
              height={750}
              style={{
                minWidth: 300,
                maxWidth: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Ali Masykur</span>
              <span className="text-base text-grey max-w-[300px] text-wrap">
                {getTranslation("governance_menu4_lead")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <Tabs
        defaultValue="audit"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="flex-wrap !justify-start">
          {[
            {
              value: "audit",
              label: getTranslation("governance_menu1"),
            },
            {
              value: "nomination",
              label: getTranslation("governance_menu2"),
            },
            {
              value: "secretary",
              label: getTranslation("governance_menu3"),
            },
            {
              value: "internal",
              label: getTranslation("governance_menu4"),
            },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="max-[800px]:w-full"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div>
        {activeTab === "audit" ? (
          <Audit />
        ) : activeTab === "nomination" ? (
          <Nomination />
        ) : activeTab === "secretary" ? (
          <Secretary />
        ) : (
          <Internal />
        )}
      </div>
    </div>
  );
}
