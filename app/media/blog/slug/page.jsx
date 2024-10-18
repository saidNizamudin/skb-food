"use client";

import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CiCalendar, CiUser } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useTranslate } from "@/hooks";
import { useSearchParams } from "next/navigation";

const MediaContent = () => {
  const POST_QUERY = (slug) =>
    `*[_type == "blog" && slug.current == "${slug}"][0]`;

  const PRESS_COUNT = `count(*[_type == "press" && defined(slug.current)])`;
  const BLOG_COUNT = `count(*[_type == "blog" && defined(slug.current)])`;
  const CSR_COUNT = `count(*[_type == "csr" && defined(slug.current)])`;

  const LATEST_5_POST_QUERY = `*[_type in ["press", "blog", "csr"] && defined(slug.current)]|order(publishedAt desc)[0...5]{_id, title, slug, image, publishedAt, _type}`;

  const { projectId, dataset } = client.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const options = { next: { revalidate: 30 } };
  const { getTranslation } = useTranslate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postImageUrl, setPostImageUrl] = useState(null);
  const [pressCount, setPressCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [csrCount, setCsrCount] = useState(0);
  const [latestPosts, setLatestPosts] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {const data = await client.fetch(
        POST_QUERY(searchParams.get("slug")),
        {},
        options
      );
      if (!data) {
        return;
      }
        if (!data) {
          return;
        }

        setPost(data);

        const postImageUrl = data.image
          ? urlFor(data.image)?.width(550).height(310).url()
          : null;
        setPostImageUrl(postImageUrl);

        const pressCount = await client.fetch(PRESS_COUNT);
        setPressCount(pressCount);

        const blogCount = await client.fetch(BLOG_COUNT);
        setBlogCount(blogCount);

        const csrCount = await client.fetch(CSR_COUNT);
        setCsrCount(csrCount);

        const latestPosts = await client.fetch(LATEST_5_POST_QUERY);
        setLatestPosts(latestPosts);
      } catch (error) {
        console.error(error);
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
    <div className="flex gap-10 mx-auto max-w-[1500px] px-10 py-20 max-[1000px]:flex-col">
      <div className="flex flex-col min-[1000px]:w-9/12">
        {postImageUrl && (
          <Image
            src={postImageUrl}
            alt={post.title}
            className="w-full max-h-[450px] object-cover object-center mb-5"
            width={550}
            height={310}
          />
        )}
        <span className="text-4xl font-bold font-montserrat text-[#1F1F1F] mb-2">
          {post.title}
        </span>
        <div className="flex items-center text-grey gap-1 text-base font-semibold mb-5">
          <CiCalendar size={20} />
          <span className="underline">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>/</span>
          <CiUser size={20} />
          <span className="underline">by {post.author}</span>
        </div>
        <span className="text-base font-normal font-segoe text-[#1F1F1F]">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </span>
      </div>
      <div className="flex flex-col min-[1000px]:w-3/12">
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
          {latestPosts.map((item, index) => {
            const postImageUrl = item.image
              ? urlFor(item.image)?.width(550).height(310).url()
              : null;

            return (
              <Link
                className="flex items-center gap-5 hover:underline"
                key={index}
                href={`/media/${item._type}/slug?slug=${item.slug.current}`}
              >
                <div className="relative min-w-[100px] min-h-[100px] rounded-md bg-slate-200 overflow-hidden">
                  {postImageUrl && (
                    <Image
                      src={postImageUrl}
                      alt={item.title}
                      width={900}
                      height={600}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="group-hover:scale-105 cursor-pointer"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold font-montserrat text-black">
                    {item.title}
                  </span>
                  <span className="text-sm font-semibold font-segoe text-grey">
                    {new Date(item.publishedAt).toLocaleDateString("en-US", {
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
