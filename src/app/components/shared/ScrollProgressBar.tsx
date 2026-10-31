"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const crossed = scrollProgress >= 99;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] h-10 sm:h-12">
      <div className="absolute bottom-2 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700">
        <div
          className="h-full bg-primary transition-all duration-200 ease-out rounded-r-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {!crossed && (
        <ArrowRight
          className="absolute w-5 h-5 sm:w-6 sm:h-6 text-primary transition-all duration-100"
          style={{
            left: `calc(${scrollProgress}% - 12px)`,
            bottom: "-2px",
          }}
        />
      )}

      {!crossed && (
        <ArrowLeft
          className="absolute w-5 h-5 sm:w-6 sm:h-6 text-primary"
          style={{
            bottom: "-2px",
            right: "4px",
          }}
        />
      )}

      {crossed && (
        <HeartHandshake
          className="absolute w-6 h-6 sm:w-7 sm:h-7 text-green-500 animate-pulse"
          style={{
            bottom: "0px",
            right: "4px",
          }}
        />
      )}
    </div>
  );
};

export default ScrollProgressBar;
