"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { CiCalendar, CiUser } from "react-icons/ci";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery, useTranslate } from "@/hooks";
import { Button, Stock, SymbolStock } from "@/components";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { decode } from "html-entities";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="relative">
        <img
          src="/images/background.webp"
          alt="Background"
          className="absolute inset-0 z-[-1] object-cover object-center"
        />
        <AboutUs />
        <OurBusiness />
      </div>
      <Gallery />
      <MediaRoom />
      <div className="flex items-center justify-between gap-10 p-3 pt-0 pb-20 min-[1500px]:px-xCustom max-[1000px]:flex-col max-[1000px]:items-start">
        <div className="relative w-full h-max">
          <div className="w-[calc(100%+2px)] h-[316px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-4 bg-transparent border-white rounded-lg overflow-hidden shadow-[inset_0_0_0_4px_white]" />
          <div className="w-[calc(100%)] h-[314px] relative z-10 shadow-lg">
            <Stock />
          </div>
        </div>

        <div className="relative w-[100%] md:w-[50%] h-max">
          <div className="w-[calc(100%+2px)] h-[275px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-4 bg-transparent border-white rounded-lg overflow-hidden shadow-[inset_0_0_0_4px_white]" />
          <div className="w-[calc(100%)] h-[273px] relative z-10">
            <SymbolStock />
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

const Carousel = () => {
  const isHugeScreen = useMediaQuery(1080);
  const isLargeScreen = useMediaQuery(750);
  const isMediumScreen = useMediaQuery(600);

  const images = [
    { src: "/images/hero1.webp", alt: "hero1" },
    { src: "/images/hero2.webp", alt: "hero2" },
  ];
  const { getTranslation } = useTranslate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden">
      <span className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-white text-base font-montserrat flex flex-col items-center">
        {getTranslation("common_scrollDown")}
        <FaArrowDown size={16} />
      </span>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                style={{
                  width: "100%",
                  height: isHugeScreen
                    ? "calc(100vh - 160px)"
                    : isLargeScreen
                      ? "calc(100vh - 190px)"
                      : isMediumScreen
                        ? "calc(100vh - 100px)"
                        : "calc(100vh - 140px)",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-segoe font-bold text-white text-center text-[clamp(16px,4vw,24px)]">
          PT. Sari Kreasi Boga Tbk.
        </span>
        <span
          className="leading-tight font-montserrat font-bold text-white text-center mb-6 text-[clamp(24px,5vw,60px)]"
          style={{ maxWidth: "60%" }}
        >
          We provide various types of high quality rice
        </span>
        <Link href="/about-us/company">
          <Button variant="white" size="lg">
            {getTranslation("common_discoverMore")}
          </Button>
        </Link>
      </div>
      <FaChevronLeft
        onClick={handlePrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 mb-4 ml-4 text-white p-2 rounded-full cursor-pointer hover:bg-primary"
        size={48}
      />
      <FaChevronRight
        onClick={handleNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 mb-4 mr-4 text-white p-2 rounded-full cursor-pointer hover:bg-primary"
        size={48}
      />
    </div>
  );
};

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const { getTranslation } = useTranslate();
  return (
    <div className="flex flex-col items-center p-10 pt-32 gap-x-32 gap-y-10 xl:px-xCustom min-[1240px]:flex-row">
      <div className="relative min-w-[300px] w-full max-w-[550px] h-[450px] overflow-hidden">
        <img
          src="/images/home/partner_1.webp"
          alt="Partner"
          width={290}
          height={290}
          data-aos="fade-right"
          className="aspect-square absolute top-0 left-0"
        />
        <img
          src="/images/home/partner_2.webp"
          alt="Partner"
          width={210}
          height={210}
          data-aos="fade-left"
          className="aspect-square absolute top-[150px] md:top-[100px] right-0"
        />
        <div
          className="absolute bottom-10 min-[550px]:left-[180px] left-0 bg-secondary aspect-square w-48 h-48 rounded-xl flex flex-col items-center justify-center gap-2"
          data-aos="fade-up"
        >
          <span className="text-lg font-montserrat font-bold text-black w-3/5 text-center text-wrap">
            {getTranslation("common_partner")}
          </span>
          <span className="text-5xl text-center font-montserrat font-bold text-primary">
            950+
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 min-w-lg">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("common_aboutUs")}
        </span>
        <span className="text-[32px] font-montserrat font-bold text-black leading-10">
          {getTranslation("home_about_title")}
        </span>
        <span className="text-base font-medium font-segoe text-grey">
          {getTranslation("home_about_desc")}
        </span>
        <Link href="/about-us/company">
          <Button size="lg">{getTranslation("common_readMore")}</Button>
        </Link>
      </div>
    </div>
  );
};

const OurBusiness = () => {
  const { getTranslation } = useTranslate();
  return (
    <div className="flex flex-col gap-x-32 gap-y-10 items-start md:items-center p-10 pb-32 lg:flex-row xl:px-xCustom">
      <div className="flex flex-col gap-2.5 flex-shrink-0">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("common_ourBusiness")}
        </span>
        <span className="text-[32px] font-montserrat font-bold text-black leading-10">
          {getTranslation("home_business_title")}
        </span>
        <Link href="/our-business/food-supply">
          <Button size="lg">{getTranslation("common_readMore")}</Button>
        </Link>
      </div>
      <div className="w-full md:flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[870px]:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-6">
          {[
            {
              name: getTranslation("common_fish"),
              image: "/images/home/fish.webp",
            },
            {
              name: getTranslation("common_rice"),
              image: "/images/home/rice.webp",
            },
            {
              name: getTranslation("common_meat"),
              image: "/images/home/meat.webp",
            },
          ].map((item, index) => (
            <div
              className="relative flex-grow max-w-[400px] min-w-[250px] basis-[calc(33%-1.5rem)] aspect-[5/4] bg-slate-300 rounded-lg overflow-hidden"
              key={index}
            >
              <img
                src={item.image}
                alt={item.name}
                width={900}
                height={600}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="hover:scale-105 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 flex justify-between items-center px-7 py-5 w-full">
                <span className="text-4xl font-montserrat font-bold text-secondary">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const { getTranslation } = useTranslate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center p-10 bg-primary">
        <div className="flex flex-col items-start justify-center gap-2.5 w-full lg:w-4/5">
          <img
            src="/images/logo/skb_catering_white.webp"
            alt="Catering"
            width={900}
            height={600}
            style={{
              width: "auto",
              maxHeight: 80,
              marginBottom: 20,
            }}
          />
          <span className="text-xl font-segoe font-bold text-white">
            {getTranslation("common_ourBusiness")}
          </span>
          <span className="text-[32px] font-montserrat font-bold text-white leading-10">
            {getTranslation("home_skb_title")}
          </span>
          <span className="text-base font-segoe font-medium text-white">
            {getTranslation("home_skb_desc")}
          </span>
        </div>
      </div>
      <img
        src="/images/home/catering.webp"
        alt="Catering"
        width={900}
        height={600}
        style={{
          width: "100%",
          maxHeight: "470px",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <img
        src="/images/home/eskabeh.webp"
        alt="Catering"
        width={900}
        height={600}
        className="order-4 md:order-3"
        style={{
          width: "100%",
          maxHeight: "470px",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="flex justify-center p-10 bg-primary order-3 md:order-4">
        <div className="flex flex-col items-start justify-center gap-2.5 w-full lg:w-4/5">
          <img
            src="/images/logo/eskabeh_white.webp"
            alt="Eskabeh Seafood"
            width={900}
            height={600}
            style={{
              width: "auto",
              maxHeight: 80,
              marginBottom: 20,
            }}
          />
          <span className="text-xl font-segoe font-bold text-white">
            {getTranslation("common_ourBusiness")}
          </span>
          <span className="text-[32px] font-montserrat font-bold text-white leading-10">
            {getTranslation("home_eskabeh_title")}
          </span>
          <span className="text-base font-segoe font-medium text-white">
            {getTranslation("home_eskabeh_desc")}
          </span>
        </div>
      </div>
    </div>
  );
};

const MediaRoom = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getTranslation } = useTranslate();

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const latestPosts = await axios.get(
          "https://dev.skbfood.id/wp-json/wp/v2/posts?_embed&per_page=3&categories_exclude=36"
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
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="group-hover:scale-105 cursor-pointer"
                />
                <span className="absolute right-5 top-5 text-base font-montserrat font-bold text-black bg-secondary px-5 py-1 rounded-full">
                  {(item.categories?.[0] === 31) === "press"
                    ? "Press Release"
                    : (item.categories?.[0] === 3) === "blog"
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
};

const OurGroup = () => {
  const { getTranslation } = useTranslate();
  return (
    <div className="bg-primaryLight p-10 gap-10 flex flex-wrap items-center justify-center md:justify-between">
      <span className="text-4xl font-montserrat font-bold text-black">
        {getTranslation("common_ourGroup")}
      </span>
      <div className="flex flex-wrap justify-center gap-10 md:gap-5">
        <img
          src="/images/logo/sas.webp"
          alt="SAS"
          width={1000}
          height={500}
          style={{
            width: "auto",
            height: 80,
          }}
        />
        <img
          src="/images/logo/lazizza.webp"
          alt="Lazizza"
          width={1000}
          height={500}
          style={{
            width: "auto",
            height: 80,
          }}
        />
      </div>
    </div>
  );
};

const Subscribe = () => {
  const { getTranslation } = useTranslate();
  return (
    <div className="relative flex items-center justify-center bg-primary/90 p-10 min-[1500px]:px-xCustom">
      <div className="flex flex-col items-center gap-5 justify-between md:flex-row max-w-[1690px]">
        <img
          src="/images/catering.webp"
          alt="Catering"
          className="absolute inset-0 z-[-1] object-cover object-center w-full h-full"
        />
        <span className="text-white text-center text-[clamp(24px,3vw,36px)] font-bold font-montserrat w-full md:text-start md:w-3/5">
          {getTranslation("footer_email_title")}
        </span>
        <div className="relative w-3/4 md:w-2/5">
          <input
            type="text"
            className="w-full h-12 px-5 pr-12 text-black font-montserrat rounded-full outline-none"
            placeholder={getTranslation("footer_email_placeholder")}
          />

          <Button
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 !w-8 !h-8"
          >
            <FaArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
