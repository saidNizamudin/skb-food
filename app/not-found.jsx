"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-80 flex flex-col gap-2 items-center justify-center">
      <span className="text-4xl text-primary font-bold font-segoe">
        404 - Page Not Found
      </span>
      <span className="text-2xl text-black font-semibold font-montserrat animate-bounce">
        Redirecting to the homepage
      </span>
    </div>
  );
}
