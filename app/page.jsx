"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
} from "react-icons/fa6";
import { CiCalendar, CiUser } from "react-icons/ci";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslate } from "@/hooks";
import { Button, Stock } from "@/components";
import Link from "next/link";
import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="relative">
        <Image
          src="/images/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 z-[-1]"
        />
        <AboutUs />
        <OurBusiness />
      </div>
      <Gallery />
      <MediaRoom />
      {/* <OurGroup /> */}
      {/* <Stock /> */}
      <Subscribe />
    </>
  );
}

const Carousel = () => {
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
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                style={{
                  width: "100%",
                  height: 600,
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
  const { getTranslation } = useTranslate();
  return (
    <div className="flex flex-col items-center p-10 pt-32 gap-x-32 gap-y-10 xl:px-xCustom min-[1240px]:flex-row">
      <Image
        src="/images/home/partner.svg"
        alt="Partner"
        width={600}
        height={400}
        style={{
          width: "100%",
          maxWidth: 550,
          height: "auto",
          maxHeight: 400,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
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
    <div className="flex flex-col gap-x-32 gap-y-10 items-start p-10 pb-32 lg:flex-row xl:px-xCustom">
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
        <div className="flex flex-wrap items-center gap-6">
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
              <Image
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
              <div className="absolute bottom-0 left-0 flex justify-between items-center p-5 w-full">
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
      <div className="flex flex-col items-start justify-center gap-2.5 p-10 bg-primary">
        <Image
          src="/images/logo/skb_catering_white.png"
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
      <Image
        src="/images/home/catering.webp"
        alt="Catering"
        width={900}
        height={600}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Image
        src="/images/home/eskabeh.webp"
        alt="Catering"
        width={900}
        height={600}
        className="order-4 md:order-3"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="flex flex-col items-start justify-center gap-2.5 p-10 bg-primary order-3 md:order-4">
        <Image
          src="/images/logo/eskabeh_white.png"
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
  );
};

const MediaRoom = () => {
  const LATEST_3_POST_QUERY = `*[_type in ["press", "blog", "csr"] && defined(slug.current)]|order(publishedAt desc)[0...3]{_id, title, author, slug, image, body, publishedAt, _type}`;
  const { projectId, dataset } = client.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const options = { next: { revalidate: 30 } };
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getTranslation } = useTranslate();

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const latestPosts = await client.fetch(LATEST_3_POST_QUERY);
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

  if (!loading && latestPosts.length === 0) {
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
        {latestPosts.map((item, index) => {
          const postImageUrl = item.image
            ? urlFor(item.image)?.width(550).height(310).url()
            : null;

          function depthFirstTraversal(obj, result = "") {
            if (obj !== null && typeof obj === "object") {
              for (const [key, value] of Object.entries(obj)) {
                if (key === "text") {
                  result += value + " ";
                } else {
                  result = depthFirstTraversal(value, result);
                }
              }
            }
            return result;
          }

          const bodyText = depthFirstTraversal(item.body).trim();
          const slicedBodyText =
            bodyText.length > 200 ? bodyText.slice(0, 200) + "..." : bodyText;

          return (
            <Link
              className="group flex flex-col gap-2.5"
              key={index}
              href={`press/${item.slug.current}`}
            >
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
                    className="group-hover:scale-105 cursor-pointer"
                  />
                )}
                <span className="absolute right-5 top-5 text-base font-montserrat font-bold text-black bg-secondary px-5 py-1 rounded-full">
                  Press Release
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
              <span className="text-base font-montserrat font-bold text-black group-hover:underline">
                {item.title}
              </span>
              <span className="text-base font-segoe font-medium text-grey group-hover:underline">
                {slicedBodyText}
              </span>
            </Link>
          );
        })}
      </div>
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
        <Image
          src="/images/logo/sas.png"
          alt="SAS"
          width={1000}
          height={500}
          style={{
            width: "auto",
            height: 80,
          }}
        />
        <Image
          src="/images/logo/lazizza.png"
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
        <Image
          src="/images/catering.webp"
          alt="Catering"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 z-[-1]"
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
