"use client";

import { useMediaQuery } from "@/hooks";

const Main = ({ children }) => {
  const isHugeScreen = useMediaQuery(1080);
  const isLargeScreen = useMediaQuery(750);
  const isMediumScreen = useMediaQuery(600);

  return (
    <div>
      <main
        className={
          isHugeScreen
            ? "pt-[160px]"
            : isLargeScreen
            ? "pt-[190px]"
            : isMediumScreen
            ? "pt-[100px]"
            : "pt-[140px]"
        }
      >
        {children}
      </main>
    </div>
  );
};

export default Main;
