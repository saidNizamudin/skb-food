"use client";

import { client } from "@/sanity/client";
import Image from "next/image";
import { CiCalendar, CiUser } from "react-icons/ci";
import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { Button } from "@/components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const BLOG_QUERY = (page) =>
  `*[ _type == "blog" && defined(slug.current)]|order(publishedAt desc)[${page * 9}...${
    page * 9 + 9
  }]{_id, title, slug, image, body, author, publishedAt}`;
const BLOG_COUNT = `count(*[_type == "blog" && defined(slug.current)])`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default function Press() {
  const [blog, setPress] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const data = await client.fetch(BLOG_QUERY(0), {}, options);
        const total = await client.fetch(BLOG_COUNT);
        setPress(data);
        setCount(Math.ceil(total / 9));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(BLOG_QUERY(page), {}, options);
        setPress(data);
      } catch (error) {
        console.error(error);
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

  if (!loading && blog.length === 0) {
    return (
      <div className="w-full h-80 flex flex-col gap-2 items-center justify-center">
        <span className="text-xl text-primary font-semibold font-montserrat">
          No Blog Found
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
        {blog.map((item, index) => {
          const postImageUrl = item.image
            ? urlFor(item.image)?.width(550).height(310).url()
            : null;

          return (
            <div className="flex flex-col gap-2.5" key={index}>
              <div className="relative min-w-[300px] min-h-[250px] bg-slate-200 overflow-hidden">
                {postImageUrl && (
                  <Image
                    src={postImageUrl}
                    alt={item.title}
                    width={900}
                    height={600}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="hover:scale-105 cursor-pointer"
                  />
                )}
                <span className="absolute right-5 top-5 text-base font-montserrat font-bold text-black bg-secondary px-5 py-1 rounded-full">
                  Blog & Artikel
                </span>
              </div>
              <div className="flex items-center text-grey gap-1 text-sm">
                <CiCalendar size={16} />
                <span className="underline">
                  {item.publishedAt.split("T")[0]}
                </span>
                <span>/</span>
                <CiUser size={16} />
                <span className="underline">by {item.author}</span>
                <span>/</span>
              </div>
              <span className="text-base font-montserrat font-bold text-black">
                {item.title}
              </span>
              <span className="text-base font-segoe font-medium text-grey mt-auto">
                {Array.isArray(item.body) && <PortableText value={item.body} />}
              </span>
            </div>
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
                : "cursor-pointer text-primary bg-primaryLight hover:bg-primary/30"
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
                : "bg-primaryLight } hover:bg-primary/30"
            }`}
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
                : "cursor-pointer text-primary bg-primaryLight hover:bg-primary/30"
            }
            `}
        >
          <FaChevronRight size={24} />
        </div>
      </div>
    </div>
  );
}
