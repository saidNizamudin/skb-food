"use client";

import Stock from "@/app/index/stock";
import SymbolStock from "@/app/index/symbol-stock";
import Carousel from "./index/carousel";
import AboutUs from "./index/about-us";
import OurBusiness from "./index/our-business";
import Gallery from "./index/gallery";
import MediaRoom from "./index/media";
import Subscribe from "./index/subscribe";

import "aos/dist/aos.css";

export default function Page() {
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
