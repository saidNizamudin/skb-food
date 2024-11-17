"use client";

import Image from "next/image";
import { useTranslate } from "@/hooks";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";

export default function Articles() {
  const { getTranslation } = useTranslate();

  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <div className="flex w-full items-center gap-x-20 gap-y-10 flex-col lg:flex-row">
        <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px] w-full lg:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/49c2/5bf3/ed481086f97723098136fc3dfaa47c83?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8DX4pvzB4foN~LAaiJtKUIJ7ZeI6BNqQYbytOPNFtNMK2DyUgEX0eo988pmidtQSZEbssSZTQdjOYLzmQp78DTsFp9SjUFfzs2CRtGZzI3g4YsEklocJ4sogx2mBM8ou0ZQ6svcM5K6~PvaKnTifPxWxv1sWnMVirVgRvQllBaXDRjORIdO7vKCah0rBqI46DDh~AiTYjrPLp6gKEXbeaRzoH6kZZliFN57BZT7seCGjnvF3sR7CfuHgyDb9FLWIuU5jZLQgoTLIx9xKzT~JR1dRel218I4VLTDViZfNj8SiLkDs1x0KYb44dzG4gS29ub9XZ~~T9dU4Ptw2gjBTA__"
            alt="First Content"
            className="absolute inset-0 w-full h-full object-cover object-right-top"
          />
        </div>
        <div className="flex flex-col gap-2.5 w-full lg:w-1/2">
          <img
            src="/images/logo/skb_food.webp"
            alt="SKB"
            width={800}
            height={500}
            style={{
              width: "fit-content",
              height: 70,
              marginBottom: 12,
            }}
          />
          <span className="text-xl font-montserrat font-bold text-black text-justify">
            {getTranslation("articles_content1_desc1")}
          </span>
          <span className="text-base font-segoe font-semibold text-grey text-justify">
            {getTranslation("articles_content1_desc2")}
          </span>
          <Button
            className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/13J6hSa15vVbeScH2f47EWKnMFHKHbssA/view?usp=drive_link",
                "_blank"
              )
            }
          >
            {getTranslation("common_download")}
            <FiDownload className="font-bold ml-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
