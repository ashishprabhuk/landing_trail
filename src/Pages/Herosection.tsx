 
// import { ArrowRight } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#030617] text-white overflow-hidden">
//       {/* BACKGROUND BLUE DEPTH LAYER */}
//       <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px]">
//         <div
//           className="w-full h-full rounded-full blur-[180px] opacity-30"
//           style={{
//             background:
//               "radial-gradient(ellipse at center, rgba(0, 110, 255, 0.4) 0%, rgba(0, 40, 90, 0.1) 70%, transparent 100%)",
//             clipPath: "ellipse(70% 40% at 50% 100%)",
//           }}
//         ></div>
//       </div>

//       {/* MAIN UPSIDE-DOWN ARC FROM FIGMA */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1988px] h-[889px] rotate-180">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 1988 889"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <foreignObject
//             x="-55.6082"
//             y="-55.7"
//             width="2099.22"
//             height="1000.4"
//           >
//             <div
//               style={{
//                 backdropFilter: "blur(27.85px)",
//                 clipPath: "url(#bgblur_0_389_95_clip_path)",
//                 height: "100%",
//                 width: "100%",
//               }}
//             ></div>
//           </foreignObject>
//           <g data-figma-bg-blur-radius="55.7">
//             <mask id="path-1-inside-1_389_95" fill="white">
//               <path d="M994 0C1508.77 0 1932.69 388.952 1987.91 889H1735.08C1679.32 529.868 1368.76 255 994 255C619.239 255 308.68 529.868 252.92 889H0.0917969C55.3129 388.952 479.234 0 994 0Z" />
//             </mask>
//             <path
//               d="M994 0C1508.77 0 1932.69 388.952 1987.91 889H1735.08C1679.32 529.868 1368.76 255 994 255C619.239 255 308.68 529.868 252.92 889H0.0917969C55.3129 388.952 479.234 0 994 0Z"
//               fill="url(#paint0_linear_389_95)"
//             />
//             <path
//               d="M1987.91 889V900H2000.19L1998.84 887.793L1987.91 889ZM1735.08 889L1724.21 890.688L1725.66 900H1735.08V889ZM252.92 889V900H262.344L263.79 890.688L252.92 889ZM0.0917969 889L-10.8417 887.793L-12.1898 900H0.0917969V889ZM994 0V11C1503.1 11 1922.36 395.672 1976.97 890.207L1987.91 889L1998.84 887.793C1943.01 382.233 1514.44 -11 994 -11V0ZM1987.91 889V878H1735.08V889V900H1987.91V889ZM1735.08 889L1745.95 887.312C1689.37 522.904 1374.27 244 994 244V255V266C1363.25 266 1669.27 536.833 1724.21 890.688L1735.08 889ZM994 255V244C613.732 244 298.63 522.904 242.05 887.312L252.92 889L263.79 890.688C318.731 536.832 624.746 266 994 266V255ZM252.92 889V878H0.0917969V889V900H252.92V889ZM0.0917969 889L11.0253 890.207C65.6377 395.672 484.904 11 994 11V0V-11C473.564 -11 44.9881 382.232 -10.8417 887.793L0.0917969 889Z"
//               fill="url(#paint1_linear_389_95)"
//               mask="url(#path-1-inside-1_389_95)"
//             />
//           </g>
//           <defs>
//             <clipPath
//               id="bgblur_0_389_95_clip_path"
//               transform="translate(55.6082 55.7)"
//             >
//               <path d="M994 0C1508.77 0 1932.69 388.952 1987.91 889H1735.08C1679.32 529.868 1368.76 255 994 255C619.239 255 308.68 529.868 252.92 889H0.0917969C55.3129 388.952 479.234 0 994 0Z" />
//             </clipPath>
//             <linearGradient
//               id="paint0_linear_389_95"
//               x1="994"
//               y1="0"
//               x2="994"
//               y2="855.5"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#00B2FF" />
//               <stop offset="0.125" stopColor="#0082B9" />
//               <stop offset="1" stopColor="#00374E" stopOpacity="0" />
//             </linearGradient>
//             <linearGradient
//               id="paint1_linear_389_95"
//               x1="994"
//               y1="0"
//               x2="994"
//               y2="274"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="white" />
//               <stop offset="0.423959" stopColor="#999999" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6">
//         <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-400 border border-blue-500/30 rounded-full">
//           AI Powered IoT solution
//         </span>

//         <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//           Smart.
//           <br />
//           Connected.
//           <br />
//           Future-Ready
//         </h1>

//         <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
//           Itona is your one-stop IoT platform with diverse features – it’s the
//           optimal solution to get control over your world.
//         </p>

//         <div className="mt-8">
//           <a
//             href="#demo"
//             className="inline-flex items-center gap-2 px-6 py-3 text-white bg-transparent border border-blue-500/50 rounded-full hover:bg-blue-600 transition-colors"
//           >
//             Get a demo <ArrowRight size={18} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
