"use client";

import { useTranslate } from "@/app/TranslationProvider";
import axios from "axios";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzLnft4SBUbtSXkoV2Zd0UGIRRCeuxKt0BEgRZqxdtD-9qF6kN3D7jcpwi1NUq-gzyb1cZkXJT78LZ/pub?gid=1087687901&single=true&output=csv";

export default function Page() {
  const [header, setHeader] = useState<string[]>([]);
  const [data, setData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);

  const { getTranslation } = useTranslate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(URL).then((res) => {
          const data = res.data.split("\n");
          const header = data[0].split(",");
          const result = data.slice(1).map((row: string) => row.split(","));

          setHeader(header);
          setData(result);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  if (loading) {
    return (
      <div className="flex flex-col px-10 py-20 xl:px-xCustom justify-center items-center w-full">
        <Loader size={48} className="text-primary animate-spin" />
        <span className="text-xl font-montserrat font-bold text-primary mt-5">
          {getTranslation("common_loading")}
        </span>
        <span className="text-base font-montserrat font-medium text-black">
          {getTranslation("common_loadingDesc")}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-10 py-20 gap-y-10 xl:px-xCustom">
      <div className="flex flex-col gap-2">
        <img
          src="/images/logo/skb_food.webp"
          alt="SKB Food"
          width={900}
          height={600}
          style={{
            width: "280px",
            height: "auto",
          }}
          className="mb-2"
        />
        <span className="text-lg font-montserrat font-semibold">
          {getTranslation("investor_dividend_desc1")}
        </span>
        <span className="text-base font-segoe font-medium text-grey">
          {getTranslation("investor_dividend_desc1")}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-montserrat font-semibold">
          {getTranslation("investor_dividend_desc3")}
        </span>
        <div className="overflow-x-auto max-w-full slim-scrollbar">
          <table className="flex-1 w-full border-collapse border-2 border-white text-sm text-nowrap">
            <thead>
              <tr>
                {header.map((title, index) => (
                  <th
                    className="bg-secondary text-[15px] w-[150px] text-black font-segoe border-2 border-white h-10"
                    key={index}
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&>tr>td]:w-[160px] [&>tr>td>span]:text-balance [&>tr>td]:py-3">
              {data.map((item, index) => (
                <tr key={index}>
                  {item.map((i, itemIndex) => (
                    <td
                      className="border-b border-[#E9E9E9] text-[15px] text-black font-medium text-center font-segoe p-2"
                      key={itemIndex}
                    >
                      {i}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
