"use client";

import { useTranslate } from "@/app/TranslationProvider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";
import { useState } from "react";
import { NOMINATION_REMUNERATION_CONTENT } from "./constant";
import { FaArrowRight } from "react-icons/fa6";

export default function Page() {
  const [openDialog, setOpenDialog] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpenDialog = (index: number) => {
    setIndex(index);
    setOpenDialog(true);
  };

  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col py-20 gap-10">
      <div className="flex flex-col p-5 xl:py-20 gap-y-5 xl:px-xCustom">
        <span className="text-3xl font-montserrat font-bold">
          {getTranslation("gov_nom_title")}
        </span>
        <div className="flex flex-col gap-5">
          <span className="text-base font-segoe font-medium">
            {getTranslation("gov_nom_desc1")}
          </span>
          <div className="px-5 py-6 bg-secondaryLight border border-secondary rounded-lg flex gap-5 items-start">
            <div className="bg-white rounded-md p-1 max-sm:hidden">
              <img
                src="/icons/law.svg"
                alt="Law"
                width={18}
                height={18}
                className="min-w-[18px] min-h-[18px]"
              />
            </div>
            <ul className="">
              <li className="text-base text-black font-medium font-segoe">
                {getTranslation("gov_nom_desc2")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2.5 p-5 border border-primary rounded-lg md:min-w-[300px] h-max">
          <span className="text-base font-montserrat font-semibold">
            {getTranslation("gov_nom_point_title")}
          </span>
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((item) => (
              <div className="flex items-center gap-2.5" key={item}>
                <div className="flex items-center font-montserrat font-bold text-[15px] justify-center w-7 h-7 aspect-square bg-gradient text-white rounded-full">
                  {item}
                </div>
                <span className="text-base font-segoe font-medium text-black">
                  {getTranslation(`gov_nom_point_${item}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex flex-col gap-2 h-full">
            <div className="bg-primary text-[15px] font-semibold text-white p-3 text-center font-segoe">
              {getTranslation("gov_nom_table_head1")}
            </div>
            <div className="flex flex-col gap-2 h-full">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center bg-primaryLight text-[15px] font-semibold p-3 text-center font-segoe flex-1"
                >
                  {getTranslation(`gov_nom_table_head1_${item}`)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 h-full">
            <div className="bg-secondary text-[15px] font-semibold p-3 text-center font-segoe">
              {getTranslation("gov_nom_table_head2")}
            </div>
            <div className="flex flex-col gap-2 h-full">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center bg-secondaryLight text-[15px] font-semibold p-3 text-center font-segoe flex-1"
                >
                  {getTranslation(`gov_nom_table_head2_${item}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-20 p-5 justify-center xl:px-xCustom">
        <div
          className="flex flex-col gap-2 cursor-pointer max-w-[300px] group"
          onClick={() => handleOpenDialog(0)}
        >
          <img
            src="/images/governance/nomination1.webp"
            alt="Comisioner"
            width={600}
            height={750}
            style={{
              width: 300,
              height: 450,
            }}
            className="group-hover:translate-y-[-10px] group-hover:scale-[1.05] with-transition"
          />
          <div className="flex flex-col pl-[11px] font-segoe font-semibold">
            <span className="text-xl text-black">R. Iskandar Hidayat</span>
            <span className="text-base text-grey">
              {getTranslation("common_lead")}
            </span>
            <span className="text-base text-primary flex items-center mt-2">
              {getTranslation("common_viewProfile")}
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 with-transition" />
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-2 cursor-pointer max-w-[300px] group"
          onClick={() => handleOpenDialog(1)}
        >
          <img
            src="/images/governance/nomination2.webp"
            alt="Comisioner"
            width={600}
            height={750}
            style={{
              width: 300,
              height: 450,
            }}
            className="group-hover:translate-y-[-10px] group-hover:scale-[1.05] with-transition"
          />
          <div className="flex flex-col pl-[11px] font-segoe font-semibold">
            <span className="text-xl text-black">Eko Mujianto</span>
            <span className="text-base text-grey">
              {getTranslation("common_member")}
            </span>
            <span className="text-base text-primary flex items-center mt-2">
              {getTranslation("common_viewProfile")}
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 with-transition" />
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-2 cursor-pointer max-w-[300px] group"
          onClick={() => handleOpenDialog(2)}
        >
          <img
            src="/images/governance/nomination3.webp"
            alt="Comisioner"
            width={600}
            height={750}
            style={{
              width: 300,
              height: 450,
            }}
            className="group-hover:translate-y-[-10px] group-hover:scale-[1.05] with-transition"
          />
          <div className="flex flex-col pl-[11px] font-segoe font-semibold">
            <span className="text-xl text-black">R. Dimas Praditya</span>
            <span className="text-base text-grey">
              {getTranslation("common_member")}
            </span>
            <span className="text-base text-primary flex items-center mt-2">
              {getTranslation("common_viewProfile")}
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 with-transition" />
            </span>
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="!w-10/12 !max-w-[1000px] max-h-[500px] rounded-xl flex gap-0 !p-0 overflow-hidden border-none">
          <div className="min-w-[250px] h-[500px] bg-primary relative hidden lg:block">
            <img
              src={`/images/governance/nomination${index + 1}.webp`}
              alt={`Audit ${index + 1}`}
              className="absolute inset-0 w-full h-full object-center object-cover"
            />
          </div>
          <DialogHeader className="flex flex-col gap-5 items-start p-10 lg:p-5">
            <DialogTitle>
              <div className="flex flex-col gap-2">
                <span className="text-[28px] font-bold font-montserrat text-primary text-start">
                  {index === 0
                    ? "R. Iskandar Hidayat"
                    : index === 1
                    ? "Eko Mujianto"
                    : "R. Dimas Praditya"}
                </span>
                <span className="text-[18px] font-semibold font-segoe text-black text-start">
                  {index === 0
                    ? getTranslation("common_lead")
                    : getTranslation("common_member")}
                </span>
              </div>
            </DialogTitle>
            <div className="w-20 h-2 bg-primary" />
            <DialogDescription
              className="max-h-[400px] overflow-y-auto text-base text-start text-black font-normal font-segoe slim-scrollbar pr-5"
              dangerouslySetInnerHTML={{
                __html: NOMINATION_REMUNERATION_CONTENT[index],
              }}
            ></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
