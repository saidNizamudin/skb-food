"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";

export default function Management() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col py-20 gap-y-20">
      <div className="flex items-center px-xCustom max-[1783px]:flex-col-reverse max-[1783px]:justify-center max-[1381px]:px-10">
        <div className="flex justify-center flex-wrap gap-x-20 gap-y-10">
          <div className="flex flex-col gap-2">
            <Image
              src="/images/about-us/commissioner1.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Eko Mujianto</span>
              <span className="text-base text-grey">
                {getTranslation("common_mainCommissioner")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/images/about-us/commissioner2.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
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
          <div className="flex flex-col gap-2">
            <Image
              src="/images/about-us/director1.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Eko Pujianto</span>
              <span className="text-base text-grey">
                {getTranslation("common_mainDirector")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/images/about-us/director2.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
            />
            <div className="flex flex-col pl-[11px] font-segoe font-semibold">
              <span className="text-xl text-black">Rizki Rahmat R.</span>
              <span className="text-base text-grey">
                {getTranslation("common_managementDirector")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/images/about-us/director3.png"
              alt="Comisioner"
              width={600}
              height={750}
              style={{
                width: 300,
                height: 450,
              }}
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
    </div>
  );
}
