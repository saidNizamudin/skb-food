"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const images = [
    { src: "/images/hero1.webp", alt: "hero1" },
    { src: "/images/hero2.webp", alt: "hero2" },
  ];
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
    </>
  );
}
