"use client";

import { useMediaQuery } from "@/hooks";

const Main = ({ children }) => {
  const isHugeScreen = useMediaQuery(1080);
  const isLargeScreen = useMediaQuery(750);
  const isMediumScreen = useMediaQuery(550);

  return (
    <div>
      <main
        className={
          isHugeScreen
            ? "pt-[160px]"
            : isLargeScreen
            ? "pt-[190px]"
            : isMediumScreen
            ? "pt-[140px]"
            : "pt-[220px]"
        }
      >
        {children}
      </main>
    </div>
  );
};

export default Main;
