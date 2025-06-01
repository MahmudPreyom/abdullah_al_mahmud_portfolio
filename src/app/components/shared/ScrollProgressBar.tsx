"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
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




// "use client";

// import { useEffect, useState } from "react";
// import { User, Code, Handshake } from "lucide-react";

// const ScrollProgressBar = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const updateProgress = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolled);
//     };

//     window.addEventListener("scroll", updateProgress);
//     return () => window.removeEventListener("scroll", updateProgress);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full z-[9999] h-10 sm:h-12">
//       {/* Progress Line */}
//       <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700">
//         <div
//           className="h-full bg-primary transition-all duration-200 ease-out rounded-r-full"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* Client Icon (scrolls) */}
//       <User
//         className="absolute top-0 w-6 h-6 sm:w-7 sm:h-7 text-primary transition-transform duration-300"
//         style={{ left: `calc(${scrollProgress}% - 12px)` }}
//       />

//       {/* Programmer Icon (fixed at end) */}
//       <Code
//         className="absolute top-0 right-2 w-6 h-6 sm:w-7 sm:h-7 text-primary"
//       />

//       {/* Handshake Icon when progress near 100% */}
//       {scrollProgress >= 98 && (
//         <Handshake
//           className="absolute top-0 right-10 w-6 h-6 sm:w-7 sm:h-7 text-green-500 animate-pulse"
//         />
//       )}
//     </div>
//   );
// };

// export default ScrollProgressBar;


// "use client";

// import { useEffect, useState } from "react";

// const ScrollProgressBar = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const updateProgress = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolled);
//     };

//     window.addEventListener("scroll", updateProgress);
//     return () => window.removeEventListener("scroll", updateProgress);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 h-1 bg-transparent">
//       <div
//         className="h-full transition-all duration-200 bg-primary"
//         style={{ width: `${scrollProgress}%` }}
//       />
//     </div>
//   );
// };

// export default ScrollProgressBar;

