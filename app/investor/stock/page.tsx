"use client";

import { useTranslate } from "@/app/TranslationProvider";
import React from "react";

export default function Page() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-5 py-10 xl:py-20 xl:px-xCustom">
      <span className="text-4xl font-montserrat font-bold text-black text-center mb-10">
        {getTranslation("investor_stock_title")}
      </span>
      <div className="overflow-x-auto max-w-full slim-scrollbar">
        <table className="w-full border-collapse border-2 border-white text-sm text-nowrap">
          {/* Table Header */}
          <thead>
            <tr>
              {[
                {
                  id: "Bulan",
                },
                {
                  id: "Harga Pembuka",
                  en: "Opening Price (Rp)",
                },
                {
                  id: "Harga Tertinggi",
                  en: "Highest Price (Rp)",
                },
                {
                  id: "Harga Terendah",
                  en: "Lowest Price (Rp)",
                },

                {
                  id: "Harga Penutup",
                  en: "Closing Price (Rp)",
                },
                {
                  id: "Volume Transaksi",
                  en: "Transaction Volume (Shares)",
                },
                {
                  id: "Jumlah Saham Beredar",
                  en: "Number of Shares Outstanding (Shares)",
                },
                {
                  id: "Kapitalisasi Pasar",
                  en: "Capitalization Market (Rp)",
                },
              ].map((row, index) => (
                <td
                  className={`p-2 text-[15px] text-center font-segoe bg-primary text-white border-b-2 border-white h-[100px] min-w-[160px]`}
                  key={index}
                >
                  <span className="font-bold block text-wrap">{row.id}</span>
                  <span className="italic font-normal block text-wrap">
                    {row.en}
                  </span>
                </td>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="[&>tr>td]:w-[160px] [&>tr>td>span]:text-balance [&>tr>td]:py-3">
            {[
              {
                title: "2022",
                children: [
                  {
                    id: "Agustus",
                    en: "August",
                    value: [
                      "202",
                      "298",
                      "148",
                      "220",
                      "5.007.356.800",
                      "3.128.090.000",
                      "688.179.800.000",
                    ],
                  },
                  {
                    id: "September",
                    en: "September",
                    value: [
                      "220",
                      "290",
                      "200",
                      "234",
                      "3.759.695.400",
                      "3.128.090.000",
                      "731.973.060.000",
                    ],
                  },
                  {
                    id: "Oktober",
                    en: "October",
                    value: [
                      "234",
                      "240",
                      "143",
                      "154",
                      "3.774.115.500",
                      "3.128.090.000",
                      "481.725.860.000",
                    ],
                  },
                  {
                    id: "November",
                    en: "November",
                    value: [
                      "155",
                      "195",
                      "134",
                      "185",
                      "3.464.650.400",
                      "3.128.090.000",
                      "578.696.650.000",
                    ],
                  },
                  {
                    id: "Desember",
                    en: "December",
                    value: [
                      "185",
                      "192",
                      "140",
                      "143",
                      "2.333.558.200",
                      "3.128.090.000",
                      "447.316.870.000",
                    ],
                  },
                ],
              },
              {
                title: "2023",
                children: [
                  {
                    id: "Kuartal 1",
                    en: "Quarter I",
                    value: [
                      "140",
                      "151",
                      "66",
                      "70",
                      "3.681.369.200",
                      "3.128.140.475",
                      "218.969.833.250",
                    ],
                  },
                  {
                    id: "Kuartal II",
                    en: "Quarter II",
                    value: [
                      "70",
                      "151",
                      "50",
                      "50",
                      "5.461.235.000",
                      "3.128.140.475",
                      "156.407.023.750",
                    ],
                  },
                  {
                    id: "Kuartal III",
                    en: "Quarter III",
                    value: [
                      "50",
                      "85",
                      "50",
                      "55",
                      "2.676.821.400",
                      "3.128.140.475",
                      "172.047.726.125",
                    ],
                  },
                  {
                    id: "Kuartal IV",
                    en: "Quarter IV",
                    value: [
                      "55",
                      "57",
                      "50",
                      "50",
                      "782.598.900",
                      "3.128.140.475",
                      "156.407.023.750",
                    ],
                  },
                ],
              },
            ].map((row, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    colSpan={8}
                    className="p-2 border-2 border-white text-[15px] text-center font-segoe bg-secondary"
                  >
                    <span className="font-bold block">
                      {getTranslation("common_year")} {row.title}
                    </span>
                  </td>
                </tr>
                {row.children.map((child, childIndex) => (
                  <tr key={childIndex}>
                    <td className="p-2 border-b border-[#E9E9E9] text-[15px] text-center font-segoe">
                      <span className="font-medium block">{child.id}</span>
                      <span className="italic font-normal block">
                        {child.en}
                      </span>
                    </td>
                    {child.value.map((value, valueIndex) => (
                      <td
                        key={valueIndex}
                        className="p-2 border-b border-[#E9E9E9] text-[15px] text-center font-segoe"
                      >
                        <span className="font-normal block">{value}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
