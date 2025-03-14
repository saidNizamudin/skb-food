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
import { SECRETARY_CONTENT } from "./constant";
import { FaArrowRight } from "react-icons/fa6";

export default function Page() {
  const [openDialog, setOpenDialog] = useState(false);

  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col py-20 gap-y-40">
      <div className="flex flex-col lg:flex-row items-center gap-20 px-10 max-[1783px]:justify-center xl:px-xCustom">
        <div className="flex justify-center flex-wrap gap-x-20 gap-y-10">
          <div
            className="flex flex-col gap-2 cursor-pointer w-[300px] group"
            onClick={() => setOpenDialog(true)}
          >
            <img
              src="/images/governance/secretary.webp"
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
              <span className="text-xl text-black">Nurul Wahyuningsih</span>
              <span className="text-base text-grey">
                {getTranslation("common_secretary")}
              </span>
              <span className="text-base text-primary flex items-center mt-2">
                {getTranslation("common_viewProfile")}
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 with-transition" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5 w-full">
          <span className="text-4xl font-montserrat font-bold text-black text-center lg:text-left">
            {getTranslation("gov_secretary_title")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify">
            {getTranslation("gov_secretary_desc1")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify">
            {getTranslation("gov_secretary_desc2")}
          </span>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="!w-10/12 !max-w-[1000px] max-h-[500px] rounded-xl flex gap-0 !p-0 overflow-hidden border-none">
          <div className="min-w-[250px] h-[500px] bg-primary relative hidden lg:block">
            <img
              src={`/images/governance/secretary.webp`}
              alt={"Secretary"}
              className="absolute inset-0 w-full h-full object-center object-cover"
            />
          </div>
          <DialogHeader className="flex flex-col gap-5 items-start p-10 lg:p-5">
            <DialogTitle>
              <div className="flex flex-col gap-2">
                <span className="text-[28px] font-bold font-montserrat text-primary text-start">
                  Nurul Wahyuningsih
                </span>
                <span className="text-[18px] font-semibold font-segoe text-black text-start">
                  {getTranslation("common_secretary")}
                </span>
              </div>
            </DialogTitle>
            <div className="w-20 h-2 bg-primary" />
            <DialogDescription
              className="max-h-[400px] overflow-y-auto text-base text-start text-black font-normal font-segoe slim-scrollbar pr-5"
              dangerouslySetInnerHTML={{
                __html: SECRETARY_CONTENT[0],
              }}
            ></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
