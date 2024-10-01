"use client";

import Image from "next/image";
import { Button } from "@/components";
import { FiDownload } from "react-icons/fi";
import { useTranslate } from "@/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Skeleton } from "@/components/Skeleton";
import { type } from "os";

const DOCUMENT_QUERY = (type) =>
  `*[ _type == "investor" && type == "${type}"]{_id, title, URL, image}`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default function AnnualReport() {
  const { getTranslation } = useTranslate();
  const [activeTab, setActiveTab] = useState("financial");
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(true);

  function downloadFile(url, filename) {
    if (typeof window !== "undefined") {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob();
        })
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = filename || "download";
          link.click();
          URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    } else {
      console.error("This function must be run in a browser.");
    }
  }

  useEffect(() => {
    if (!activeTab) return;

    setLoading(true);

    async function fetchData() {
      try {
        const data = await client.fetch(DOCUMENT_QUERY(activeTab), {}, options);
        setDocument(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [activeTab]);

  return (
    <div className="flex flex-col px-10 py-20 min-[1450px]:px-xCustom">
      <Tabs
        defaultValue="financial"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="flex-wrap !justify-start">
          {[
            {
              value: "financial",
              label: getTranslation("navbar_menu4_child1"),
            },
            { value: "annual", label: getTranslation("navbar_menu4_child2") },
            {
              value: "sustainability",
              label: getTranslation("navbar_menu4_child3"),
            },
            {
              value: "prospectus",
              label: getTranslation("navbar_menu4_child4"),
            },
            {
              value: "presentation",
              label: getTranslation("navbar_menu4_child5"),
            },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="max-[800px]:w-full"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-x-10 gap-y-20 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
        {loading ? (
          <>
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
            <Skeleton className="w-full max-w-[300px] aspect-[4/5]" />
          </>
        ) : (
          document.map((item, index) => {
            const postImageUrl = item.image ? urlFor(item.image)?.url() : null;

            return (
              <div className="flex flex-col gap-2.5" key={index}>
                <div className="relative rounded-xl w-max min-w-[300] max-w-[400px] min-h-[290px] overflow-hidden shadow-2xl border-2">
                  <Image
                    src={postImageUrl}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    style={{
                      height: "390px",
                      width: "auto",
                      minWidth: "300px",
                      objectFit: "cover",
                    }}
                    className="hover:scale-105 cursor-pointer"
                  />
                </div>
                <span className="text-base font-montserrat font-bold text-black">
                  {getTranslation("common_annualReport")}
                </span>
                <Button
                  className="!h-8 !py-1 !px-3 text-base font-montserrat font-bold"
                  onClick={() => {
                    downloadFile(item.URL, item.title);
                  }}
                >
                  {getTranslation("common_download")}
                  <FiDownload className="font-bold ml-5" />
                </Button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
