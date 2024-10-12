"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog";
import { useState } from "react";
import { MANAGEMENT_CONTENT } from "./constant";

export default function Management() {
  const [openDialog, setOpenDialog] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpenDialog = (index) => {
    setIndex(index);
    setOpenDialog(true);
  };

  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col py-20 gap-y-20">
      <div className="flex items-center px-xCustom max-[1783px]:flex-col-reverse max-[1783px]:justify-center max-[1381px]:px-10">
        <div className="flex justify-center flex-wrap gap-x-20 gap-y-10">
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(0)}
          >
            <Image
              src="/images/about-us/commissioner1.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
              className="group-hover:translate-y-[-10px] group-hover:scale-[1.05]"
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Eko Mujianto</span>
              <span className="text-base text-grey">
                {getTranslation("common_mainCommissioner")}
              </span>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(1)}
          >
            <Image
              src="/images/about-us/commissioner2.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
              className="group-hover:translate-y-[-10px] group-hover:scale-[1.05]"
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">R. Iskandar Hidayat</span>
              <span className="text-base text-grey">
                {getTranslation("common_independentCommissioner")}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 ml-20 min-[1783px]:ml-40 max-[1783px]:text-center max-[1783px]:ml-0 max-[1783px]:mb-5">
          <span className="text-xl font-segoe font-bold text-primary">
            {getTranslation("navbar_menu1_child3")}
          </span>
          <span className="text-[40px] font-montserrat font-bold text-black">
            {getTranslation("common_commissioner")}
          </span>
        </div>
      </div>
      <div className="flex items-center px-xCustom max-[1783px]:flex-col max-[1783px]:justify-center max-[1783px]:px-10">
        <div className="flex flex-col gap-1 mr-40 max-[1783px]:text-center max-[1783px]:mr-0">
          <span className="text-xl font-segoe font-bold text-primary">
            {getTranslation("navbar_menu1_child3")}
          </span>
          <span className="text-[40px] font-montserrat font-bold text-black">
            {getTranslation("common_director")}
          </span>
        </div>
        <div className="flex justify-center flex-wrap gap-x-20 gap-y-10">
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(2)}
          >
            <Image
              src="/images/about-us/director1.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
              className="group-hover:translate-y-[-10px] group-hover:scale-[1.05]"
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Eko Pujianto</span>
              <span className="text-base text-grey">
                {getTranslation("common_mainDirector")}
              </span>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(3)}
          >
            <Image
              src="/images/about-us/director2.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
              className="group-hover:translate-y-[-10px] group-hover:scale-[1.05]"
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Rizki Rahmat R.</span>
              <span className="text-base text-grey">
                {getTranslation("common_managementDirector")}
              </span>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(4)}
          >
            <Image
              src="/images/about-us/director3.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
              className="group-hover:translate-y-[-10px] group-hover:scale-[1.05]"
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Aditya Permono</span>
              <span className="text-base text-grey">
                {getTranslation("common_financeDirector")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="!w-10/12 !max-w-[1000px] max-h-[500px] rounded-xl flex gap-0 !p-0 overflow-hidden">
          <div className="min-w-[250px] h-[500px] bg-primary relative hidden lg:block">
            <Image
              src={`/images/about-us/${index === 0 ? "commissioner1" : index === 1 ? "commissioner2" : index === 2 ? "director1" : index === 3 ? "director2" : "director3"}.png`}
              alt={
                index === 0
                  ? "Comisioner"
                  : index === 1
                    ? "Comisioner"
                    : index === 2
                      ? "Director"
                      : index === 3
                        ? "Director"
                        : "Director"
              }
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <DialogHeader className="flex flex-col gap-5 items-start p-10 lg:p-5">
            <DialogTitle>
              <div className="flex flex-col gap-2">
                <span className="text-[28px] font-bold font-montserrat text-primary text-start">
                  {index === 0
                    ? "Eko Mujianto"
                    : index === 1
                      ? "R. Iskandar Hidayat"
                      : index === 2
                        ? "Eko Pujianto"
                        : index === 3
                          ? "Rizki Rahmat R."
                          : "Aditya Permono"}
                </span>
                <span className="text-[18px] font-semibold font-segoe text-black text-start">
                  {index === 0
                    ? getTranslation("common_mainCommissioner")
                    : index === 1
                      ? getTranslation("common_independentCommissioner")
                      : index === 2
                        ? getTranslation("common_mainDirector")
                        : index === 3
                          ? getTranslation("common_managementDirector")
                          : getTranslation("common_financeDirector")}
                </span>
              </div>
            </DialogTitle>
            <div className="w-20 h-2 bg-primary" />
            <DialogDescription
              className="max-h-[400px] overflow-y-auto text-base text-start font-normal font-segoe slim-scrollbar pr-5"
              dangerouslySetInnerHTML={{ __html: MANAGEMENT_CONTENT[index] }}
            ></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
