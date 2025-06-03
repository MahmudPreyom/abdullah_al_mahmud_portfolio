// // testing purpose
// "use client";

// import { useEffect, useRef } from "react";

// type CodeRainProps = {
//   variant?: "binary" | "hex" | "alpha";
// };

// export default function CodeRainBackground({ variant = "binary" }: CodeRainProps) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     canvas.width = width;
//     canvas.height = height;

//     const columns = Math.floor(width / 20);
//     const drops: number[] = Array(columns).fill(1);

//     let characters = "01";
//     if (variant === "hex") characters = "0123456789ABCDEF";
//     else if (variant === "alpha") characters = "abcdefghijklmnopqrstuvwxyz";

//     function draw() {
//       if (!ctx) return;

//       ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
//       ctx.fillRect(0, 0, width, height);

//       ctx.fillStyle = "#00ff9c";
//       ctx.font = "14px monospace";

//       for (let i = 0; i < columns; i++) {
//         const text = characters[Math.floor(Math.random() * characters.length)];
//         ctx.fillText(text, i * 20, drops[i] * 20);

//         if (drops[i] * 20 > height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }

//         drops[i]++;
//       }
//     }

//     const interval = setInterval(draw, 60);

//     const handleResize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [variant]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-10 dark:opacity-20"
//     />
//   );
// }
