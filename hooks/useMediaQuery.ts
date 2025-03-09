import { useState, useEffect } from "react";

export function useMediaQuery(width: number) {
  const [isWidthMatch, setIsWidthMatch] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthMatch(window.innerWidth >= width);
    };

    // Check on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isWidthMatch;
}
