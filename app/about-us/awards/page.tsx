"use client";

import { useTranslate } from "@/app/TranslationProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { FaChevronDown } from "react-icons/fa6";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Skeleton } from "@/components/skeleton";

const BASE_URL = "https://dev.skbfood.id/wp-json/wp/v2/";

export default function OurGroup() {
  const { getTranslation } = useTranslate();

  const [awards, setAwards] = useState<
    Record<string, { year: string; id: string; title: string; image: string }[]>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${BASE_URL}posts?categories=45&_embed`
        );

        const tags = new Set();
        data.forEach((item: { tags: string[] }) => {
          item.tags.forEach((tag) => tags.add(tag));
        });

        const tagsData = await axios
          .get(`${BASE_URL}tags?include=${Array.from(tags).join(",")}`)
          .then((res) => {
            return res.data.map((item: { id: string; name: string }) => ({
              id: item.id,
              year: item.name.replaceAll("award-", ""),
            }));
          });

        const awardsData = data.map(
          (item: {
            id: string;
            tags: string[];
            title: { rendered: string };
            _embedded: {
              "wp:featuredmedia": {
                [x: string]: { source_url: string };
              }[];
            };
          }) => {
            const year = tagsData.find((tag: { id: string; year: string }) =>
              item.tags.includes(tag.id)
            ).year;
            return {
              id: item.id,
              year,
              title: item.title.rendered,
              image:
                item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/default_post.webp",
            };
          }
        );

        // make awardsData a dict key by year desc sort
        const awardsDict: {
          [key: string]: {
            year: string;
            id: string;
            title: string;
            image: string;
          }[];
        } = {};
        awardsData.forEach(
          (item: {
            year: string;
            id: string;
            title: string;
            image: string;
          }) => {
            if (!awardsDict[item.year]) {
              awardsDict[item.year] = [];
            }
            awardsDict[item.year].push(item);
          }
        );

        setAwards(awardsDict);
      } catch (error) {
        console.error(error);
        setAwards({});
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col p-10 py-20 gap-y-10 lg:px-xCustom">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("navbar_menu1")}
        </span>
        <span className="text-[40px] font-montserrat font-bold text-black">
          {getTranslation("navbar_menu1_child6")}
        </span>
      </div>
      {loading ? (
        <div className="w-full flex flex-col gap-2.5">
          <Skeleton className={"w-full h-16"} />
          <Skeleton className={"w-full h-16"} />
          <Skeleton className={"w-full h-16"} />
        </div>
      ) : (
        <Accordion type="single" collapsible className="flex flex-col gap-2.5">
          {awards ? (
            Object.keys(awards).map((year) => (
              <AccordionItem
                value="item-1"
                className="bg-white shadow-lg border border-[#E9E9E9] rounded-lg"
                key={year}
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
                    <img src="/icons/award.svg" alt="Check" width={40} />
                    <span className="text-base font-montserrat font-bold ">
                      {getTranslation("about_award_year")} {year}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  noPaddingChild
                  className="p-5 pb-10 gap-3 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]"
                >
                  {awards[year].map(
                    (award: { id: string; title: string; image: string }) => (
                      <div
                        className="flex flex-col items-center gap-2.5"
                        key={award.id}
                      >
                        <img
                          src={award.image}
                          alt={award.title}
                          width={1000}
                          height={500}
                          className="w-full max-w-[350px] h-auto rounded-md"
                        />
                        <span className="text-sm text-center w-full max-w-[350px] font-montserrat font-semibold text-black">
                          {award.title}
                        </span>
                      </div>
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-2.5 col-span-full w-full">
              <span className="text-base font-montserrat font-bold text-primary">
                {getTranslation("common_noData")}
              </span>
              <span className="text-base font-montserrat font-bold text-black">
                {getTranslation("common_noDataDesc")}
              </span>
            </div>
          )}
        </Accordion>
      )}
    </div>
  );
}
