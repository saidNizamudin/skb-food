"use client";

import { CiCalendar, CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { decode } from "html-entities";
import { PostProps } from "../type";

const BASE_URL = "https://dev.skbfood.id/wp-json/wp/v2/";

export default function Press() {
  const [press, setPress] = useState<PostProps[]>([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const data = await axios.get(
          `${BASE_URL}posts?categories=31&_embed&per_page=9&page=1`
        );

        const total = data.headers["x-wp-total"];
        setPress(data.data);
        setCount(Math.ceil(total / 9));
      } catch (error) {
        console.error(error);
        setPress([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${BASE_URL}posts?categories=31&_embed&per_page=9&page=${page + 1}`
        );
        setPress(data);
      } catch (error) {
        console.error(error);
        setPress([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < count - 1) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-80 flex flex-col gap-2 items-center justify-center">
        <span className="text-2xl text-black font-semibold font-montserrat animate-bounce">
          Loading...
        </span>
      </div>
    );
  }

  if (!loading && press.length === 0) {
    return (
      <div className="w-full h-80 flex flex-col gap-2 items-center justify-center">
        <span className="text-xl text-primary font-semibold font-montserrat">
          No Press Release Found
        </span>
        <span className="text-lg text-black font-semibold font-montserrat">
          Please check back later
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-10 py-20 min-[1500px]:px-xCustom">
      <div className="grid gap-x-5 gap-y-10 xl:grid-cols-3 min-[800px]:grid-cols-2 max-[800px]:grid-cols-1">
        {press?.map((item, index) => {
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
              href={`press/slug?slug=${item?.slug}`}
            >
              <div className="relative min-w-[300px] min-h-[250px] bg-slate-200 overflow-hidden">
                <img
                  src={
                    item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/default_post.webp"
                  }
                  alt={item?.title?.rendered}
                  width={900}
                  height={600}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="group-hover:scale-105 cursor-pointer with-transition"
                />
                <span className="absolute right-5 top-5 text-base font-montserrat font-bold text-black bg-secondary px-5 py-1 rounded-full">
                  Press Release
                </span>
              </div>
              <div className="flex items-center text-grey gap-1 text-sm">
                <CiCalendar size={16} />
                <span className="underline">
                  {new Date(item?.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }) ||
                    new Date().toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                </span>
                <span>/</span>
                <CiUser size={16} />
                <span className="underline">
                  by
                  {item?._embedded.author[0].name || "Admin"}
                </span>
                <span>/</span>
              </div>
              <span
                className="text-base font-montserrat font-bold text-black group-hover:underline"
                dangerouslySetInnerHTML={{
                  __html: item.title.rendered || "Untitled",
                }}
              />
              <span className="text-base font-segoe font-medium text-grey group-hover:underline">
                {truncatedBody || "No content"}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 w-full flex justify-center items-center gap-3">
        <div
          onClick={handlePrevPage}
          className={`py-2 px-[14px] flex items-center justify-center rounded h-12 w-12
            ${
              page === 0
                ? "cursor-not-allowed text-primary/30 bg-primaryLight"
                : "cursor-pointer text-primary bg-primaryLight hover:bg-primary/30 with-transition"
            }
            `}
        >
          <FaChevronLeft size={24} />
        </div>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`py-2 px-[14px] flex items-center justify-center rounded h-12 w-12 cursor-pointer ${
              index === page
                ? "bg-primary"
                : "bg-primaryLight hover:bg-primary/30 with-transition"
            }`}
            onClick={() => setPage(index)}
          >
            <span
              className={`text-lg font-montserrat font-bold ${
                index === page ? "text-white" : "text-primary"
              }`}
            >
              {index + 1}
            </span>
          </div>
        ))}
        <div
          onClick={handleNextPage}
          className={`py-2 px-[14px] flex items-center justify-center rounded h-12 w-12
            ${
              page === count - 1
                ? "cursor-not-allowed text-primary/30 bg-primaryLight"
                : "cursor-pointer text-primary bg-primaryLight hover:bg-primary/30 with-transition"
            }
            `}
        >
          <FaChevronRight size={24} />
        </div>
      </div>
    </div>
  );
}
