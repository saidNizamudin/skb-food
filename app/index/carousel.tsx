"use client";

import { useCallback } from "react";
import { FaArrowDown, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "@/hooks";
import { Button } from "@/components/button";
import Link from "next/link";
import { useTranslate } from "@/app/TranslationProvider";

import "aos/dist/aos.css";

export default function Carousel() {
  const isHugeScreen = useMediaQuery(1400);
  const isLargeScreen = useMediaQuery(1150);
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
        <span className="font-segoe font-bold text-white text-center text-lg md:text-xl lg:text-2xl">
          PT. Sari Kreasi Boga Tbk.
        </span>
        <span
          className="leading-tight font-montserrat font-bold text-white text-center mb-6 text-2xl md:text-4xl lg:text-6xl"
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
}
