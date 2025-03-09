"use client";

import { Button } from "@/components/button";
import { useTranslate } from "@/app/TranslationProvider";
import { FaArrowRight, FaFax, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function Page() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56204.194577674614!2d106.79243395558534!3d-6.292238548861461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f39a5089b391%3A0x990ca787d7360f4a!2sPT.%20Sari%20Kreasi%20Boga%2C%20Tbk!5e0!3m2!1sid!2sid!4v1727527988971!5m2!1sid!2sid"
          style={{
            border: 0,
            width: "100%",
            height: "400px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col-reverse items-start gap-10 p-5 xl:py-20 xl:px-xCustom lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col">
          <span className="text-5xl font-bold font-montserrat mb-3">
            {getTranslation("common_contactUs")}
          </span>
          <span className="text-base font-semibold font-segoe text-grey mb-5">
            {getTranslation("common_contactUsDesc")}
          </span>
          <span className="text-xl font-semibold font-montserrat mb-2">
            {getTranslation("common_mainOffice")}
          </span>
          <span className="text-base font-semibold font-segoe text-grey mb-5">
            Beltway Office Park
            <br />
            Jl. Ampera Raya, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan,
            Daerah Khusus Ibukota Jakarta 12540
          </span>
          <span className="text-xl font-semibold font-montserrat mb-3">
            {getTranslation("common_ourContact")}
          </span>
          <div className="flex flex-wrap gap-10 items-center">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center p-1 w-7 h-7 text-2xl text-white bg-primary rounded-full">
                <FaPhone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-montserrat">
                  {getTranslation("common_telephone")}
                </span>
                <span className="text-base font-medium font-segoe text-grey">
                  (021) 7463 7390
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center p-1 w-7 h-7 text-2xl text-white bg-primary rounded-full">
                <FaFax size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-montserrat">
                  {getTranslation("common_fax")}
                </span>
                <span className="text-base font-medium font-segoe text-grey">
                  (021) 7463 7390
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center p-1 w-7 h-7 text-2xl text-white bg-primary rounded-full">
                <MdMail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-montserrat">
                  {getTranslation("common_email")}
                </span>
                <span className="text-base font-medium font-segoe text-grey">
                  corporatesecretary@skbfood.id
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/logo/skb_food.webp"
          alt="SKB Food"
          width={900}
          height={600}
          style={{
            width: "500px",
            height: "fit-content",
          }}
          className=";g:ml-auto"
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 justify-between bg-primary/90 md:flex-row px-10 py-10 min-[1500px]:px-xCustom">
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
}
