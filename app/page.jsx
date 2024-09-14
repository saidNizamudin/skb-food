"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa6";
import { CiCalendar, CiUser } from "react-icons/ci";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslate } from "@/hooks";
import { Stock } from "@/components";

export default function Home() {
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
    <>
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
          <span className="text-2xl font-segoe font-bold text-white text-center mb-2.5">
            PT. Sari Kreasi Boga Tbk.
          </span>
          <span
            className="text-6xl leading-tight font-montserrat font-bold text-white text-center mb-6"
            style={{ maxWidth: 800 }}
          >
            We provide various types of high quality rice
          </span>
          <div className="text-base font-montserrat font-bold bg-white text-black text-center rounded-full px-8 py-2.5 cursor-pointer">
            Discover More
          </div>
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
      <div className="flex flex-col py-20 gap-20">
        <div className="flex flex-col items-center px-10 lg:flex-row lg:gap-20">
          <Image
            src="/images/home/partner.webp"
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
          <div className="flex flex-col gap-2.5">
            <span className="text-xl font-segoe font-bold text-primary">
              {getTranslation("common_aboutUs")}
            </span>
            <span className="text-[32px] font-montserrat font-bold text-black">
              {getTranslation("home_about_title")}
            </span>
            <span className="text-base font-medium font-segoe text-grey">
              {getTranslation("home_about_desc")}
            </span>
            <button className="text-base font-bold font-montserrat bg-primary text-white rounded-full w-max px-8 py-2.5 mt-2.5">
              {getTranslation("common_readMore")}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start px-10 md:flex-row md:gap-20">
          <div className="flex flex-col gap-2.5 flex-shrink-0">
            <span className="text-xl font-segoe font-bold text-primary">
              {getTranslation("common_ourBusiness")}
            </span>
            <span className="text-[32px] font-montserrat font-bold text-black">
              {getTranslation("home_business_title")}
            </span>
            <button className="text-base font-bold font-montserrat bg-primary text-white rounded-full w-max px-8 py-2.5 mt-2.5">
              {getTranslation("common_readMore")}
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-1 overflow-hidden -mr-10">
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide md:overflow-x-auto">
              {
                // loop 5 times
                [
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
                  {
                    name: getTranslation("common_fish"),
                    image: "/images/home/fish.webp",
                  },
                  {
                    name: getTranslation("common_rice"),
                    image: "/images/home/rice.webp",
                  },
                ].map((item, index) => (
                  <div
                    className="relative min-h-[250px] min-w-[400px] bg-slate-300 rounded-lg overflow-hidden"
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
                      <FaChevronRight
                        onClick={handleNext}
                        className="text-black p-2 rounded-full cursor-pointer bg-secondary hover:bg-secondaryDark"
                        size={36}
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-2.5 p-20 bg-primaryLight">
          <Image
            src="/images/logo/skb_catering.png"
            alt="Catering"
            width={900}
            height={600}
            style={{
              width: "auto",
              maxHeight: 80,
              marginBottom: 20,
            }}
          />
          <span className="text-xl font-segoe font-bold text-primary">
            {getTranslation("common_ourBusiness")}
          </span>
          <span className="text-[32px] font-montserrat font-bold text-black">
            {getTranslation("home_skb_title")}
          </span>
          <span className="text-base font-segoe font-medium text-grey">
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
          src="/images/home/catering.webp"
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
        <div className="flex flex-col items-start justify-center gap-2.5 p-20 bg-primaryLight order-3 md:order-4">
          <Image
            src="/images/logo/eskabeh.png"
            alt="Eskabeh Seafood"
            width={900}
            height={600}
            style={{
              width: "auto",
              maxHeight: 80,
              marginBottom: 20,
            }}
          />
          <span className="text-xl font-segoe font-bold text-primary">
            {getTranslation("common_ourBusiness")}
          </span>
          <span className="text-[32px] font-montserrat font-bold text-black">
            {getTranslation("home_eskabeh_title")}
          </span>
          <span className="text-base font-segoe font-medium text-grey">
            {getTranslation("home_eskabeh_desc")}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center p-5 md:p-10">
        <span className="text-xl font-segoe font-bold text-primary">
          {getTranslation("common_mediaRoom")}
        </span>
        <span className="text-[32px] font-montserrat font-bold text-black">
          {getTranslation("home_media_title")}
        </span>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-3 gap-y-8 mt-5">
          {[
            {
              badge: "Press Release",
              image: "/images/home/press_release.webp",
              title:
                "Program CSR Batumbu bersama SKB Food Dukung Pemuda Tani Karawang",
              desc: "Kegiatan ini merupakan program Corporate Social Responsibility (CSR), kolaborasi Batumbu dan SKB Food dalam meningkatkan kesadaran petani tentang pentingnya literasi keuangan dan pengolahan pangan. Jakarta,",
            },
            {
              badge: "CSR",
              image: "/images/home/csr.webp",
              title: "SKDK Pengangkatan Komite Audit – RAFI",
              desc: "SURAT KEPUTUSAN DEWAN KOMISARIS PT SARI KREASI BOGA TBK Nomor : 13/Komisaris/SKB/VI/2024 TENTANG PENGGANTIAN DAN PENGANGKATAN KOMITE AUDIT   Menimbang : Bahwa untuk membantu melaksanakan",
            },
            {
              badge: "Blog & Artikel",
              image: "/images/home/blog.webp",
              title:
                "Berita Penyembelihan Hewan Kurban PT Sari Kreasi Boga, TBK",
              desc: "Kegiatan ini merupakan program Corporate Social Responsibility (CSR), kolaborasi Batumbu dan SKB Food dalam meningkatkan kesadaran petani tentang pentingnya literasi keuangan dan pengolahan pangan. Jakarta,",
            },
          ].map((item, index) => (
            <div className="flex flex-col gap-2.5" key={index}>
              <div className="relative min-w-[400px] min-h-[250px] bg-slate-200 overflow-hidden">
                <Image
                  src={item.image}
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
                <span className="absolute right-5 top-5 text-base font-montserrat font-bold text-black bg-secondary px-5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <div className="flex items-center text-grey gap-1 text-sm">
                <CiCalendar size={16} />
                <span className="underline">September 10, 2024</span>
                <span>/</span>
                <CiUser size={16} />
                <span className="underline">by Admin</span>
                <span>/</span>
              </div>
              <span className="text-base font-montserrat font-bold text-black">
                {item.title}
              </span>
              <span className="text-base font-segoe font-medium text-grey">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primaryLight p-5 gap-10 flex flex-col items-center justify-between lg:flex-row md:p-10">
        <span className="text-4xl font-montserrat font-bold text-black">
          {getTranslation("common_ourGroup")}
        </span>
        <div className="flex flex-col gap-10 items-center md:flex-row md:gap-5">
          <Image
            src="/images/logo/sas.png"
            alt="SAS"
            width={1000}
            height={500}
            style={{
              width: "auto",
              height: 120,
            }}
          />
          <Image
            src="/images/logo/lazizza.png"
            alt="Lazizza"
            width={1000}
            height={500}
            style={{
              width: "auto",
              height: 120,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-5 md:p-10">
        <Stock />
      </div>
    </>
  );
}
