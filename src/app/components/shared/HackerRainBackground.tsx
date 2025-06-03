// // testing purpose
// "use client";

// import { useEffect, useRef } from "react";

// export default function HackerRainBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     canvas.width = width;
//     canvas.height = height;

//     const columns = Math.floor(width / 20);
//     const drops = Array(columns).fill(1);

//     const characters = "アァイィウエエオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     function draw() {
//       if (!ctx) return;

//       // translucent background for fading trail
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//       ctx.fillRect(0, 0, width, height);

//       ctx.fillStyle = "#00FF00";
//       ctx.shadowColor = "#00FF00";
//       ctx.shadowBlur = 6;
//       ctx.font = "16px monospace";

//       for (let i = 0; i < columns; i++) {
//         const char = characters[Math.floor(Math.random() * characters.length)];
//         ctx.fillText(char, i * 20, drops[i] * 20);

//         if (drops[i] * 20 > height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }

//         drops[i]++;
//       }
//     }

//     const interval = setInterval(draw, 50);

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
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-15"
//     />
//   );
// }
