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
import { MANAGEMENT_CONTENT } from "../constant";
import { FaArrowRight } from "react-icons/fa6";

export default function ManagementDirector() {
  const [openDialog, setOpenDialog] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpenDialog = (index: number) => {
    setIndex(index);
    setOpenDialog(true);
  };

  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col py-20 gap-y-40">
      <div className="flex flex-col items-center gap-20 px-10 max-[1783px]:justify-center xl:px-xCustom">
        <div className="flex justify-center flex-wrap gap-x-20 gap-y-10">
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(2)}
          >
            <img
              src="/images/about-us/director1.webp"
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
              <span className="text-xl text-black">Eko Pujianto</span>
              <span className="text-base text-grey">
                {getTranslation("common_mainDirector")}
              </span>
              <span className="text-base text-primary flex items-center mt-2">
                {getTranslation("common_viewProfile")}
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 with-transition" />
              </span>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(3)}
          >
            <img
              src="/images/about-us/director2.webp"
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
              <span className="text-xl text-black">Rizki Rahmat R.</span>
              <span className="text-base text-grey">
                {getTranslation("common_managementDirector")}
              </span>
              <span className="text-base text-primary flex items-center mt-2">
                {getTranslation("common_viewProfile")}
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 with-transition" />
              </span>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => handleOpenDialog(4)}
          >
            <img
              src="/images/about-us/director3.webp"
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
              <span className="text-xl text-black">Aditya Permono</span>
              <span className="text-base text-grey">
                {getTranslation("common_financeDirector")}
              </span>
              <span className="text-base text-primary flex items-center mt-2">
                {getTranslation("common_viewProfile")}
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 with-transition" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <span className="text-2xl font-montserrat font-bold text-black text-center md:text-4xl">
            {getTranslation("about_management_table_title2")}
          </span>
          <div className="overflow-x-auto max-w-full slim-scrollbar">
            <table className="w-full border-collapse border-2 border-white text-sm text-nowrap">
              {/* Table Header */}
              <thead>
                <tr>
                  <th
                    rowSpan={4}
                    className="bg-[#E9E9E9] min-w-[150px] text-[15px] font-bold font-segoe border-2 border-white"
                  >
                    {getTranslation("common_name")}
                  </th>
                  <th
                    rowSpan={4}
                    className="bg-[#E9E9E9] min-w-[150px] text-[15px] font-bold font-segoe border-2 border-white"
                  >
                    {getTranslation("common_position")}
                  </th>
                  <th
                    colSpan={12}
                    className="bg-secondary text-[15px] font-medium font-segoe py-2 border-2 border-white"
                  >
                    {getTranslation("about_management_table_header1")}
                  </th>
                </tr>
                <tr>
                  {[
                    "about_management_table_header2_1",
                    "about_management_table_header2_2",
                  ].map((header, index) => (
                    <th
                      colSpan={6}
                      key={index}
                      className="bg-secondary text-[15px] font-medium font-segoe py-2 border-2 border-white"
                    >
                      {getTranslation(header)}
                    </th>
                  ))}
                </tr>
                <tr>
                  {[
                    "about_management_table_header3_1",
                    "about_management_table_header3_2",
                    "about_management_table_header3_3",
                    "about_management_table_header3_1",
                    "about_management_table_header3_2",
                    "about_management_table_header3_3",
                  ].map((header, index) => (
                    <th
                      colSpan={2}
                      key={index}
                      className="bg-secondary text-[15px] font-medium font-segoe py-2 border-2 border-white"
                    >
                      {getTranslation(header)}
                    </th>
                  ))}
                </tr>
                <tr>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <th
                      key={index}
                      colSpan={1}
                      className="bg-secondary text-[15px] font-medium font-segoe py-2 min-w-[100px]  border-2 border-white"
                    >
                      {getTranslation(
                        index % 2 === 0 ? "common_yes" : "common_no"
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                <tr className="bg-primary text-white font-bold">
                  <td
                    colSpan={14}
                    className="p-2 border-2 border-white text-base font-segoe font-bold"
                  >
                    {getTranslation("common_director")}
                  </td>
                </tr>
                {[
                  { name: "Eko Pujianto", position: "common_mainDirector" },
                  { name: "Aditya Permono", position: "common_director" },
                  {
                    name: "Rizki Rahmat R.",
                    position: "common_director",
                  },
                ].map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="text-center border-b-2 border-[#E9E9E9]"
                  >
                    <td className="py-2">{row.name}</td>
                    <td className="py-2">{getTranslation(row.position)}</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index} className="py-3">
                        {index % 2 !== 0 ? (
                          <img
                            src="/icons/check.svg"
                            alt="Check"
                            width={18}
                            className="mx-auto"
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="!w-10/12 !max-w-[1000px] max-h-[500px] rounded-xl flex gap-0 !p-0 overflow-hidden border-none">
          <div className="min-w-[250px] h-[500px] bg-primary relative hidden lg:block">
            <img
              src={`/images/about-us/${
                index === 0
                  ? "commissioner1"
                  : index === 1
                  ? "commissioner2"
                  : index === 2
                  ? "director1"
                  : index === 3
                  ? "director2"
                  : "director3"
              }.webp`}
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
              className="absolute inset-0 w-full h-full object-center object-cover"
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
              dangerouslySetInnerHTML={{
                __html: MANAGEMENT_CONTENT[index],
              }}
            ></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
