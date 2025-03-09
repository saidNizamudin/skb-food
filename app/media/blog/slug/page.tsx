"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCalendar, CiUser } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useTranslate } from "@/app/TranslationProvider";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { LatestPostProps, PostProps } from "../../type";

const MediaContent = () => {
  const { getTranslation } = useTranslate();

  const [post, setPost] = useState<PostProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [postImageUrl, setPostImageUrl] = useState(null);
  const [pressCount, setPressCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [csrCount, setCsrCount] = useState(0);
  const [latestPosts, setLatestPosts] = useState<LatestPostProps[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const [data, pressCount, blogCount, csrCount, latestPosts] =
          await Promise.all([
            axios.get(
              `https://dev.skbfood.id/wp-json/wp/v2/posts?_embed&slug=${searchParams.get(
                "slug"
              )}`
            ),
            axios.get(
              "https://dev.skbfood.id/wp-json/wp/v2/posts?categories=31"
            ),
            axios.get(
              "https://dev.skbfood.id/wp-json/wp/v2/posts?categories=3"
            ),
            axios.get(
              "https://dev.skbfood.id/wp-json/wp/v2/posts?categories=35"
            ),
            axios.get(
              "https://dev.skbfood.id/wp-json/wp/v2/posts?_embed&per_page=5&categories_exclude=36"
            ),
          ]);

        if (!data.data.length) {
          return;
        }

        setPost(data.data[0]);
        setPressCount(pressCount.headers["x-wp-total"]);
        setBlogCount(blogCount.headers["x-wp-total"]);
        setCsrCount(csrCount.headers["x-wp-total"]);
        setLatestPosts(latestPosts.data);

        const postImageUrl =
          data.data[0]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/default_post.webp";
        setPostImageUrl(postImageUrl);
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
      <div className="w-full h-80 flex flex-col gap-2 items-center justify-center">
        <span className="text-2xl text-black font-semibold font-montserrat animate-bounce">
          Loading...
        </span>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full h-80 flex flex-col gap-2 items-center justify-center">
        <Link
          href="/media/blog"
          className="flex items-center gap-5 mb-5 text-primary"
        >
          <FaChevronLeft />
          <span className="text-lg font-semibold font-montserrat">
            {getTranslation("common_postNotFound")}.{" "}
            {getTranslation("common_backTo")} Blog & Artikel
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-10 mx-auto px-10 py-20 max-xl:flex-col xl:px-xCustom">
      <div className="flex flex-col w-3/4 max-xl:w-full">
        <img
          src={postImageUrl || "/default_post.webp"}
          alt={post.title?.rendered}
          className="w-full max-h-[450px] object-cover object-center mb-5 border rounded-lg shadow-md"
          width={550}
          height={310}
        />
        <span
          className="text-4xl font-bold font-montserrat text-[#1F1F1F] mb-2"
          dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
        />
        <div className="flex items-center text-grey gap-1 text-base font-semibold mb-5">
          <CiCalendar size={20} />
          <span className="underline">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) ||
              new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </span>
          <span>/</span>
          <CiUser size={20} />
          <span className="underline">
            by {post._embedded?.author?.[0]?.name || "Admin"}
          </span>
        </div>
        <span
          className="mt-10 text-base font-normal font-segoe text-[#1F1F1F]"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
        />
      </div>
      <div className="flex flex-col min-[1200px]:w-3/12">
        <Link
          href="/media/blog"
          className="flex items-center gap-5 mb-5 text-primary"
        >
          <FaChevronLeft />
          <span className="text-lg font-semibold font-montserrat">
            {getTranslation("common_backTo")} Blog & Artikel
          </span>
        </Link>
        <div className="flex flex-col gap-5 mb-10">
          <span className="text-xl font-montserrat font-bold text-primary">
            {getTranslation("common_category")}
          </span>
          <hr className="w-full h-[1px] bg-[#E9E9E9] border border-[#E9E9E9]" />
          <Link className="flex items-center" href="/media/csr">
            <div className="flex items-center justify-center w-8 h-8 bg-primaryLight text-primary rounded-md mr-5">
              <FaChevronRight size={16} />
            </div>
            <span className="text-base font-segoe font-semibold text-[#1F1F1F] mr-1">
              CSR
            </span>
            <span className="text-base font-segoe font-semibold text-[#575757]">
              ({csrCount})
            </span>
          </Link>
          <Link className="flex items-center" href="/media/press">
            <div className="flex items-center justify-center w-8 h-8 bg-primaryLight text-primary rounded-md mr-5">
              <FaChevronRight size={16} />
            </div>
            <span className="text-base font-segoe font-semibold text-[#1F1F1F] mr-1">
              Press Release
            </span>
            <span className="text-base font-segoe font-semibold text-[#575757]">
              ({pressCount})
            </span>
          </Link>
          <Link className="flex items-center" href="/media/blog">
            <div className="flex items-center justify-center w-8 h-8 bg-primaryLight text-primary rounded-md mr-5">
              <FaChevronRight size={16} />
            </div>
            <span className="text-base font-segoe font-semibold text-[#1F1F1F] mr-1">
              Blog & Artikel
            </span>
            <span className="text-base font-segoe font-semibold text-[#575757]">
              ({blogCount})
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-xl font-montserrat font-bold text-primary">
            {getTranslation("common_recentPost")}
          </span>
          <hr className="w-full h-[1px] bg-[#E9E9E9] border border-[#E9E9E9]" />
          {latestPosts?.map((item, index) => {
            return (
              <Link
                className="flex items-center gap-5 hover:underline min-[1200px]:flex-col min-[1500px]:flex-row max-[500px]:flex-col"
                key={index}
                href={`/media/${
                  item.categories?.[0] === 31
                    ? "press"
                    : item.categories?.[0] === 35
                    ? "csr"
                    : "blog"
                }/slug?slug=${item.slug}`}
              >
                <div className="relative min-w-[120px] min-h-[130px] rounded-md bg-slate-200 overflow-hidden min-[1500px]:w-[120px] min-[1200px]:w-full max-[500px]:w-full">
                  <img
                    src={
                      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "/default_post.webp"
                    }
                    alt={item.title?.rendered}
                    width={900}
                    height={600}
                    style={{
                      height: "130px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="group-hover:scale-105 cursor-pointer min-[1500px]:w-[120px] min-[1200px]:w-full w-[120px] max-[500px]:w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-base font-bold font-montserrat text-black"
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                  <span className="text-sm font-semibold font-segoe text-grey">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) ||
                      new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MediaContent;
