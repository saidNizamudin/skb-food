"use client";

import { useTranslate } from "@/app/TranslationProvider";
import axios from "axios";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { FiDownload } from "react-icons/fi";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzLnft4SBUbtSXkoV2Zd0UGIRRCeuxKt0BEgRZqxdtD-9qF6kN3D7jcpwi1NUq-gzyb1cZkXJT78LZ/pub?gid=1639017855&single=true&output=csv";

type Data = {
  date: string;
  title: string;
  link: string;
};

export default function Page() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  const { getTranslation } = useTranslate();

  function downloadFile(url: string | undefined) {
    if (!url) return;
    window.open(url, "_blank");
  }

  function parseCSVToJSON(csvArray: string[]): Data[] {
    const rawData = csvArray.slice(1).map((row) => row.split(","));

    const result: Data[] = [];
    rawData.forEach(([date, title, link]) => {
      result.push({ date, title, link });
    });

    return result;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(URL).then((res) => {
          const data = res.data;
          const result = parseCSVToJSON(data.split("\n"));
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
      <div className="overflow-x-auto max-w-full slim-scrollbar">
        <table className="flex-1 w-full border-collapse border-2 border-white text-sm text-nowrap">
          <thead>
            <tr>
              <th className="bg-secondary text-[15px] text-black font-segoe border-2 border-white h-10">
                {getTranslation("common_date")}
              </th>
              <th className="bg-secondary text-[15px] text-black font-segoe border-2 border-white h-10">
                {getTranslation("common_information")}
              </th>
              <th className="bg-secondary text-[15px] text-black font-segoe border-2 border-white h-10">
                {getTranslation("common_download")}
              </th>
            </tr>
          </thead>
          <tbody className="[&>tr>td]:w-[160px] [&>tr>td>span]:text-balance [&>tr>td]:py-3">
            {data.map((data, index) => (
              <tr key={index}>
                <td className="border-b border-[#E9E9E9] text-[15px] text-black font-medium text-center font-segoe p-2">
                  {data.date}
                </td>
                <td className="border-b border-[#E9E9E9] text-[15px] text-black font-normal text-center font-segoe p-2">
                  {data.title}
                </td>
                <td className="border-b border-[#E9E9E9] text-[15px] text-black font-normal text-center font-segoe p-2">
                  <Button
                    onClick={() => downloadFile(data.link)}
                    className="flex items-center gap-2.5 mx-auto !py-0"
                  >
                    <FiDownload />
                    <span>{getTranslation("common_download")}</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
