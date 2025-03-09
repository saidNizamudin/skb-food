"use client";

import { useEffect, useState } from "react";
import { CiCalendar, CiUser } from "react-icons/ci";
import Link from "next/link";
import axios from "axios";
import { decode } from "html-entities";
import { useTranslate } from "@/app/TranslationProvider";

import "aos/dist/aos.css";
export default function MediaRoom() {
  const [latestPosts, setLatestPosts] = useState<
    Array<{
      id: number;
      title: { rendered: string };
      content: { rendered: string };
      date: string;
      slug: string;
      categories: number[];
      _embedded: {
        "wp:featuredmedia": {
          source_url: string;
        }[];
        author: {
          name: string;
        }[];
      };
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const { getTranslation } = useTranslate();

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const latestPosts = await axios.get(
          "https://dev.skbfood.id/wp-json/wp/v2/posts?_embed&per_page=3&categories_exclude=36,45"
        );
        setLatestPosts(latestPosts.data);
      } catch (error) {
        console.error(error);
        setLatestPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-80 flex flex-col gap-2 items-center justify-center px-10 min-[1500px]:px-xCustom">
        <span className="text-2xl text-black font-semibold font-montserrat animate-bounce">
          Loading...
        </span>
        <hr className="w-full h-[1px] bg-[#E9E9E9] border border-[#E9E9E9] mt-5" />
      </div>
    );
  }

  if (!loading && latestPosts.length === 0) {
    return (
      <div className="w-full h-80 flex flex-col gap-2 items-center justify-center px-10 min-[1500px]:px-xCustom">
        <span className="text-xl text-primary font-semibold font-montserrat">
          No Press Release Found
        </span>
        <span className="text-lg text-black font-semibold font-montserrat">
          Please check back later
        </span>
        <hr className="w-full h-[1px] bg-[#E9E9E9] border border-[#E9E9E9] mt-5" />
      </div>
    );
  }

  return (
    <div className="flex flex-col px-10 py-20 items-center gap-10 min-[1500px]:px-xCustom">
      <div className="flex flex-col items-center gap-2.5">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("common_mediaRoom")}
        </span>
        <span className="text-[32px] font-montserrat font-bold text-black">
          {getTranslation("home_media_title")}
        </span>
      </div>
      <div className="grid gap-x-5 gap-y-10 xl:grid-cols-3 min-[800px]:grid-cols-2 max-[800px]:grid-cols-1">
        {latestPosts?.map((item, index) => {
          const body = item?.content?.rendered || "";
          const strippedBody = body.replace(/(<([^>]+)>)/gi, ""); // Remove HTML tags
          const decodedBody = decode(strippedBody);
          const truncatedBody =
            decodedBody.length > 200
              ? `${decodedBody.slice(0, 200).trim()}...`
              : decodedBody;
          return (
            <Link
              className="group flex flex-col gap-2.5"
              key={index}
              href={`/media/${
                item.categories?.[0] === 31
                  ? "press"
                  : item.categories?.[0] === 35
                  ? "csr"
                  : "blog"
              }/slug?slug=${item.slug}`}
            >
              <div className="relative min-w-[300px] min-h-[250px] bg-slate-200 overflow-hidden">
                <img
                  src={
                    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/default_post.webp"
                  }
                  alt={item.title?.rendered}
                  width={900}
                  height={600}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="group-hover:scale-105 cursor-pointer border border-border"
                />
                <span className="absolute right-5 top-5 text-base font-montserrat font-bold text-black bg-secondary px-5 py-1 rounded-full">
                  {item.categories?.[0] === 31
                    ? "Press Release"
                    : item.categories?.[0] === 3
                    ? "Blog & Artikel"
                    : "CSR"}
                </span>
              </div>
              <div className="flex items-center text-grey gap-1 text-sm">
                <CiCalendar size={16} />
                <span className="underline">
                  {new Date(item.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) ||
                    new Date().toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </span>
                <span>/</span>
                <CiUser size={16} />
                <span className="underline">
                  by {item._embedded?.author?.[0]?.name}
                </span>
                <span>/</span>
              </div>
              <span
                className="text-base font-montserrat font-bold text-black group-hover:underline"
                dangerouslySetInnerHTML={{ __html: item.title.rendered }}
              />
              <span className="text-base font-segoe font-medium text-grey group-hover:underline">
                {truncatedBody || "No content"}
              </span>
            </Link>
          );
        })}
      </div>
      <hr className="w-full h-[1px] bg-[#E9E9E9] border border-[#E9E9E9]" />
    </div>
  );
}
