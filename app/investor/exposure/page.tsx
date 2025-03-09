"use client";

import { useTranslate } from "@/app/TranslationProvider";
import axios from "axios";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { FiDownload } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { FaChevronDown } from "react-icons/fa6";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzLnft4SBUbtSXkoV2Zd0UGIRRCeuxKt0BEgRZqxdtD-9qF6kN3D7jcpwi1NUq-gzyb1cZkXJT78LZ/pub?gid=0&single=true&output=csv";

type PublicExposeData = {
  date: string;
  title: string;
  link: string;
};

type GroupedData = {
  year: number;
  data: PublicExposeData[];
};

export default function Page() {
  const [data, setData] = useState<GroupedData[]>([]);
  const [loading, setLoading] = useState(true);

  const { getTranslation } = useTranslate();

  function downloadFile(url: string | undefined) {
    if (!url) return;
    window.open(url, "_blank");
  }

  function parseCSVToJSON(csvArray: string[]): GroupedData[] {
    const rawData = csvArray.slice(1).map((row) => row.split(","));

    const groupedData: Record<number, PublicExposeData[]> = {};

    rawData.forEach(([year, date, title, link]) => {
      const yearNum = parseInt(year, 10);
      if (!groupedData[yearNum]) {
        groupedData[yearNum] = [];
      }
      groupedData[yearNum].push({ date, title, link });
    });

    return Object.entries(groupedData)
      .map(([year, data]) => ({
        year: parseInt(year, 10),
        data,
      }))
      .sort((a, b) => b.year - a.year);
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
      {
        <Accordion type="multiple" className="gap-2.5 flex flex-col">
          {data.map((item) => (
            <AccordionItem
              value={item.year.toString()}
              className="bg-white shadow-lg border border-[#E9E9E9] rounded-lg"
              key={item.year}
            >
              <AccordionTrigger
                className="flex-row-reverse justify-between py-2.5 px-5"
                triggerIcon={
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                    <FaChevronDown className="transition-transform duration-200" />
                  </div>
                }
              >
                <div className="flex items-center gap-3">
                  <img src="/icons/review.svg" alt="Review" width={40} />
                  <span className="text-base font-montserrat font-bold ">
                    {item.year}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                noPaddingChild
                className="p-5 pb-10 flex flex-col gap-7 overflow-hidden"
              >
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
                      {item.data.map((data, index) => (
                        <tr key={index}>
                          <td className="border-b border-[#E9E9E9] text-[15px] text-black font-normal text-center font-segoe p-2">
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
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      }
    </div>
  );
}
