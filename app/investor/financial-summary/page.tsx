"use client";

import { useTranslate } from "@/app/TranslationProvider";

export default function Page() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-5 py-10 xl:py-20 xl:px-xCustom">
      <span className="text-4xl font-montserrat font-bold text-black text-center mb-10">
        {getTranslation("investor_financial_summary_title")}
      </span>
      <div className="overflow-x-auto max-w-full slim-scrollbar">
        <table className="w-full border-collapse border-2 border-white text-sm text-nowrap">
          {/* Table Header */}
          <thead>
            <tr>
              <th
                rowSpan={2}
                className="bg-[#E9E9E9] min-w-[150px] text-[15px] font-segoe border-2 border-white"
              >
                <span className="font-bold block">Keterangan</span>
                <span className="italic font-normal block">Information</span>
              </th>
              <th
                colSpan={3}
                className="bg-secondary text-[15px] font-segoe py-2 border-2 border-white"
              >
                <span className="font-medium">Tahun/Years</span>
              </th>
            </tr>
            <tr>
              {["2022", "2023", "2024"].map((year, index) => (
                <th
                  colSpan={1}
                  key={index}
                  className="bg-secondary text-[15px] font-medium font-segoe py-2 border-y-2 border-white"
                >
                  {year}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="[&>tr>td]:max-w-[300px] [&>tr>td]:min-w-[200px] [&>tr>td>span]:text-balance [&>tr>td]:py-3">
            <tr className="bg-primary text-white font-bold">
              <td
                colSpan={4}
                className="p-2 border-2 border-white text-[15px] text-center font-segoe"
              >
                <span className="font-bold block">
                  Laporan Laba Rugi dan Penghasilan Komprehensif Lain
                </span>
                <span className="italic font-normal block">
                  statement of profit or loss and other comprehensive income
                </span>
              </td>
            </tr>
            {[
              {
                titleId: "Pendapatan",
                titleEn: "Revenue",
                value1: "407.488.545.288",
                value2: "375.886.948.579",
                value3: "117.113.203.239",
              },
              {
                titleId: "Laba Bruto",
                titleEn: "Gross Profit",
                value1: "91.792.949.020",
                value2: "52.152.081.816",
                value3: "27.211.617.032",
              },
              {
                titleId: "Laba Usaha",
                titleEn: "Operating Profit",
                value1: "45.993.769.383",
                value2: "23.330.364.551",
                value3: "19.508.264.396",
              },
              {
                titleId: "Laba Sebelum Manfaat (Beban) Pajak – Penghasilan",
                titleEn: "Profit Before Income (Expense) Tax Benefit",
                value1: "134.975.714.760",
                value2: "14.262.121.247",
                value3: "18.178.188.589",
              },
              {
                titleId: "Laba Bersih Tahun Berjalan",
                titleEn: "Net Profit For The Year",
                value1: "125.257.722.600",
                value2: "10.427.101.196",
                value3: "14.168.799.850",
              },
            ].map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`text-center border-b-2 border-[#E9E9E9] ${
                  rowIndex === 4 ? "bg-[#E9E9E9]" : ""
                }`}
              >
                <td className={`p-2 text-[15px] text-center font-segoe`}>
                  <span
                    className={`${
                      rowIndex === 4 ? "font-bold" : "font-normal"
                    } block`}
                  >
                    {row.titleId}
                  </span>
                  <span className="italic font-normal block">
                    {row.titleEn}
                  </span>
                </td>
                <td>{row.value1}</td>
                <td>{row.value2}</td>
                <td>{row.value3}</td>
              </tr>
            ))}
            <tr className="bg-primary text-white font-bold">
              <td
                colSpan={4}
                className="p-2 border-2 border-white text-[15px] text-center font-segoe"
              >
                <span className="font-bold block">
                  Penghasilan Komprehensif Lain
                </span>
                <span className="italic font-normal block">
                  Other Comprehensive Income
                </span>
              </td>
            </tr>
            {[
              {
                titleId:
                  "Pos Yang Tidak Akan Direklasifikasi - Ke Laba Rugi: Keuntungan (Kerugian) Atas - Liabilitas Imbalan Pasca Kerja – Bersih",
                titleEn:
                  "Item That Will Not Be Reclassified - To Profit Or Loss: Actual Gain (Loss) Of Post-Employment Benefit Liabilities - Net",
                value1: "57.809.831",
                value2: "(155.779.245)",
                value3: "48.462.485",
              },
              {
                titleId: "Laba Komprehensif Tahun Berjalan",
                titleEn: "Comprehensive Income For The Year",
                value1: "125.315.532.431",
                value2: "10.271.321.951",
                value3: "14.217.262.335",
              },
            ].map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`text-center border-b-2 border-[#E9E9E9] ${
                  rowIndex === 1 ? "bg-[#E9E9E9]" : ""
                }`}
              >
                <td className={`p-2 text-[15px] text-center font-segoe`}>
                  <span className={`font-medium block`}>{row.titleId}</span>
                  <span className="italic font-normal block">
                    {row.titleEn}
                  </span>
                </td>
                <td>{row.value1}</td>
                <td>{row.value2}</td>
                <td>{row.value3}</td>
              </tr>
            ))}
            <tr className="bg-white text-white font-bold">
              <td
                colSpan={4}
                className="p-2 border-b-2 border-[#E9E9E9] text-[15px] text-center font-segoe text-black"
              >
                <span className="font-bold block">
                  Laba Tahun Berjalan Yang Diatribusikan Kepada:
                </span>
                <span className="italic font-normal block">
                  Profit For The Year Attributable To:
                </span>
              </td>
            </tr>
            {[
              {
                titleId: "Pemilik Entitas Induk",
                titleEn: "Entity Owner Partner",
                value1: "127.469.201.017",
                value2: "12.428.821.922",
                value3: "14.168.799.850",
              },
              {
                titleId: "Kepentingan Non - Pengendali",
                titleEn: "Non Controlling Interest",
                value1: "(2.211.478.417)",
                value2: "71.631.279",
                value3: "-",
              },
              {
                titleId: "Laba Per Saham (Rp)",
                titleEn: "Earnings Per Share (Rp)",
                value1: "40,75*",
                value2: "4,81",
                value3: "14,41",
              },
            ].map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`text-center border-b-2 border-[#E9E9E9] ${
                  rowIndex === 2 ? "bg-[#E9E9E9]" : ""
                }`}
              >
                <td className={`p-2 text-[15px] text-center font-segoe`}>
                  <span className={`font-medium block`}>{row.titleId}</span>
                  <span className="italic font-normal block">
                    {row.titleEn}
                  </span>
                </td>
                <td>{row.value1}</td>
                <td>{row.value2}</td>
                <td>{row.value3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-10 flex gap-5">
          <span className="text-[15px] font-segoe font-bold text-black text-nowrap">
            Keterangan:
          </span>
          <span className="text-[15px] font-segoe text-black font-normal text-nowrap">
            * : Laba per saham di luar Revaluasi Aset sebesar Rp11,52 (nilai
            penuh).
            <br />
            ** : Di luar Revaluasi Aset senilai Rp89,21 miliar.
          </span>
        </div>
        <div className="mt-5 flex gap-5">
          <span className="text-[15px] font-segoe font-bold text-black italic text-nowrap">
            Description:
          </span>
          <span className="text-[15px] font-segoe text-black font-normal italic text-nowrap">
            * : Earnings per share outside the Asset Revaluation of IDR11.52
            (full value).
            <br />
            ** : Outside the Asset Revaluation of IDR89.21 billion.
          </span>
        </div>
      </div>
    </div>
  );
}
