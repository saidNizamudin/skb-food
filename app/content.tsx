"use client";

import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
  const [hydrate, setHydrate] = useState(false);

  useEffect(() => {
    setHydrate(true);
  }, []);

  if (!hydrate) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-transparent border-primary rounded-full animate-spin mb-4"></div>
          <span className="text-lg font-montserrat font-semibold text-primary">
            Preparing content
          </span>
          <span className="text-sm text-black font-medium font-montserrat">
            Please wait a moment.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Content;
