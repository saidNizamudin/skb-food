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
import { AUDIT_CONTENT } from "./constant";
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
    <div className="flex flex-col py-20 gap-y-40">
      <div className="flex flex-col items-center gap-20 p-5 max-[1783px]:justify-center xl:px-xCustom">
        <div className="flex justify-center flex-wrap gap-x-20 gap-y-10">
          <div
            className="flex flex-col gap-2 cursor-pointer max-w-[300px] group"
            onClick={() => handleOpenDialog(0)}
          >
            <img
              src="/images/governance/audit1.webp"
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
                {getTranslation("gov_audit_lead")}
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
              src="/images/governance/audit2.webp"
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
              <span className="text-xl text-black">Sri Agustina</span>
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
              src="/images/governance/audit3.webp"
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
              <span className="text-xl text-black">Muh. Ihda Ainun Najib</span>
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
        <div className="flex flex-col items-center gap-5 w-full">
          <span className="text-2xl font-montserrat font-bold text-black text-center md:text-4xl">
            {getTranslation("gov_audit_title")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify md:text-center">
            {getTranslation("gov_audit_desc")}
          </span>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="!w-10/12 !max-w-[1000px] max-h-[500px] rounded-xl flex gap-0 !p-0 overflow-hidden border-none">
          <div className="min-w-[250px] h-[500px] bg-primary relative hidden lg:block">
            <img
              src={`/images/governance/audit${index + 1}.webp`}
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
                    ? "Sri Agustina"
                    : "Muh. Ihda Ainun Najib"}
                </span>
                <span className="text-[18px] font-semibold font-segoe text-black text-start">
                  {index === 0
                    ? getTranslation("gov_audit_lead")
                    : getTranslation("common_member")}
                </span>
              </div>
            </DialogTitle>
            <div className="w-20 h-2 bg-primary" />
            <DialogDescription
              className="max-h-[400px] overflow-y-auto text-base text-start text-black font-normal font-segoe slim-scrollbar pr-5"
              dangerouslySetInnerHTML={{
                __html: AUDIT_CONTENT[index],
              }}
            ></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
