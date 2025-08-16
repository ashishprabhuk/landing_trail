import { useMemo, useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number }>({
    x: 0.5,
    y: 0.5,
  });
  const [time, setTime] = useState(0);

  // Animation frame for orbiting effect
  useEffect(() => {
    let animationFrameId: number;

    const updateTime = () => {
      setTime(prevTime => (prevTime + 0.005) % (Math.PI * 2));
      animationFrameId = requestAnimationFrame(updateTime);
    };

    animationFrameId = requestAnimationFrame(updateTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stars = useMemo(() => {
    const count = 120;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      // Initial positions will be around the screen
      initialAngle: Math.random() * Math.PI * 2,
      orbitRadius: 50 + Math.random() * 150, // base orbit radius
      orbitSpeed: 0.2 + Math.random() * 0.3, // speed of orbit
      phaseOffset: Math.random() * Math.PI * 2, // different starting points
      sizePx: Math.random() < 0.7 ? 4 : 5,
      opacity: 0.35 + Math.random() * 0.45,
      drift: 6 + Math.random() * 12,
      // Absorption properties
      absorptionProgress: Math.random(), // 0-1 how far along absorption is
      absorptionSpeed: 0.0005 + Math.random() * 0.001, // speed of absorption
    }));
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouse({ x, y });
  }

  function handleMouseLeave() {
    setMouse({ x: 0.5, y: 0.5 });
  }

  // Arc center position (adjust these based on your actual arc position)
  const arcCenterX = 0.5; // 50% of container
  const arcCenterY = 0.85; // 85% from top (near bottom)

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
    >
      {/* Soft glow behind headline */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[31%] opacity-80 blur-[90px]"
        style={{
          width: "min(78vw, 820px)",
          height: "280px",
          background:
            "radial-gradient(ellipse 55% 40% at 50% 50%, rgba(0,178,255,0.55) 0%, rgba(0,55,78,0.08) 70%, #121223 100%)",
        }}
      />

      {/* Stars with orbit and absorption effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {stars.map((s) => {
          // Update absorption progress (reset if completed)
          const absorptionProgress = (s.absorptionProgress + s.absorptionSpeed) % 1;

          // Calculate current orbit position
          const orbitAngle = s.initialAngle + time * s.orbitSpeed;
          const currentOrbitRadius = s.orbitRadius * (1 - absorptionProgress * 0.7);

          // Base position (orbiting around arc center)
          let xPct = arcCenterX * 100 + Math.cos(orbitAngle + s.phaseOffset) * currentOrbitRadius;
          let yPct = arcCenterY * 100 + Math.sin(orbitAngle + s.phaseOffset) * currentOrbitRadius * 0.6;

          // Add mouse interaction effect
          const dx = (mouse.x - 0.5) * s.drift * (1 - absorptionProgress);
          const dy = (mouse.y - 0.5) * s.drift * (1 - absorptionProgress);

          // Scale down as they get absorbed
          const scale = 1 - absorptionProgress * 0.7;

          return (
            <span
              key={s.id}
              className="absolute rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.55)]"
              style={{
                left: `${xPct}%`,
                top: `${yPct}%`,
                width: s.sizePx,
                height: s.sizePx,
                opacity: s.opacity * (1 - absorptionProgress * 0.5),
                transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
                transition: "transform 120ms ease-out, opacity 120ms ease-out",
                willChange: "transform, opacity",
              }}
            />
          );
        })}
      </div>

      {/* Headline + Subheadline + CTA */}
      <div className="relative top-[-60px] z-10 text-center px-6">
        <h1 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[60px] leading-snug tracking-wide">
          Simplify Technology
          <br />
          Amplify Efficiency
        </h1>

      </div>

      {/* Bottom arc (existing SVG) */}
      <div className="
        pointer-events-none 
        absolute 
        left-1/2 -translate-x-1/2
        w-[95%] max-w-[1500px]
        bottom-[-150px]           /* large screen default */
        sm:bottom-[-150px]        /* tablet+ screens */
        bottom-[50px]             /* mobile: lift arc up behind headline */
        scale-125 sm:scale-100    /* mobile: make arc bigger */
      ">
        <svg
          viewBox="0 0 3551 1886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <g filter="url(#filter0_f_407_103)">
            <path
              d="M1399.83 464L1575.33 657.5L1868.33 692.5L2084.83 493.5L2026.33 300H1651.83L1399.83 464Z"
              fill="#00A6ED"
              fillOpacity="0.4"
            />
          </g>
          <g filter="url(#filter1_f_407_103)">
            <path
              d="M1879.83 592L2055.33 785.5L2348.33 820.5L2564.83 621.5L2506.33 428H2131.83L1879.83 592Z"
              fill="#026E9C"
              fillOpacity="0.4"
            />
          </g>
          <g filter="url(#filter2_f_407_103)">
            <path
              d="M1604.32 634.097L1409.34 460.242L1114.29 456.426L920.046 677.207L998.682 863.435L1371.08 823.828L1604.32 634.097Z"
              fill="#1D32B3"
              fillOpacity="0.4"
            />
          </g>
          <g filter="url(#filter3_f_407_103)">
            <mask id="path-4-inside-1_407_103" fill="white">
              <path d="M1775.5 769C2700.85 769 3451 1216.72 3451 1769C3451 1774.51 3450.92 1780.01 3450.78 1785.5C3436.01 1240.83 2691.62 802 1775.5 802C859.38 802 114.987 1240.83 100.224 1785.5C100.075 1780.01 100 1774.51 100 1769C100 1216.72 850.147 769 1775.5 769Z" />
            </mask>
            <path
              d="M1775.5 769C2700.85 769 3451 1216.72 3451 1769C3451 1774.51 3450.92 1780.01 3450.78 1785.5C3436.01 1240.83 2691.62 802 1775.5 802C859.38 802 114.987 1240.83 100.224 1785.5C100.075 1780.01 100 1774.51 100 1769C100 1216.72 850.147 769 1775.5 769Z"
              fill="url(#paint0_linear_407_103)"
            />
            <path
              d="M3450.78 1785.5L3445.78 1785.64L3455.77 1785.64L3450.78 1785.5ZM100.224 1785.5L95.2255 1785.64L105.222 1785.64L100.224 1785.5ZM1775.5 769V774C2237.43 774 2655.39 885.759 2957.69 1066.19C3260.11 1246.68 3446 1495.32 3446 1769H3451H3456C3456 1490.4 3266.82 1239.04 2962.82 1057.6C2658.72 876.099 2238.92 764 1775.5 764V769ZM3451 1769H3446C3446 1774.46 3445.92 1779.92 3445.78 1785.36L3450.78 1785.5L3455.77 1785.64C3455.92 1780.1 3456 1774.56 3456 1769H3451ZM3450.78 1785.5L3455.77 1785.36C3448.33 1510.62 3256.92 1263.44 2953.68 1085.19C2650.33 906.874 2234.3 797 1775.5 797V802V807C2232.82 807 2647.04 916.539 2948.61 1093.81C3250.29 1271.14 3438.46 1515.71 3445.78 1785.64L3450.78 1785.5ZM1775.5 802V797C1316.7 797 900.666 906.874 597.319 1085.19C294.079 1263.44 102.672 1510.62 95.2255 1785.36L100.224 1785.5L105.222 1785.64C112.538 1515.71 300.71 1271.14 602.387 1093.81C903.957 916.539 1318.18 807 1775.5 807V802ZM100.224 1785.5L105.222 1785.36C105.074 1779.92 105 1774.47 105 1769H100H95C95 1774.56 95.0755 1780.1 95.2255 1785.64L100.224 1785.5ZM100 1769H105C105 1495.32 290.894 1246.68 593.305 1066.19C895.612 885.759 1313.57 774 1775.5 774V769V764C1312.08 764 892.285 876.099 588.18 1057.6C284.179 1239.04 95 1490.4 95 1769H100Z"
              fill="url(#paint1_linear_407_103)"
              mask="url(#path-4-inside-1_407_103)"
            />
          </g>
          <foreignObject x="81.4" y="796.4" width="3388.2" height="1053.7">
            <div
              style={{
                backdropFilter: "blur(8.65px)",
                clipPath: "url(#bgblur_0_407_103_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g data-figma-bg-blur-radius="17.3">
            <mask id="path-6-inside-2_407_103" fill="white">
              <path d="M1775.5 815C2700.85 815 3451 1262.72 3451 1815C3451 1820.51 3450.92 1826.01 3450.78 1831.5C3436.01 1286.83 2691.62 848 1775.5 848C859.38 848 114.987 1286.83 100.224 1831.5C100.075 1826.01 100 1820.51 100 1815C100 1262.72 850.147 815 1775.5 815Z" />
            </mask>
            <path
              d="M1775.5 815C2700.85 815 3451 1262.72 3451 1815C3451 1820.51 3450.92 1826.01 3450.78 1831.5C3436.01 1286.83 2691.62 848 1775.5 848C859.38 848 114.987 1286.83 100.224 1831.5C100.075 1826.01 100 1820.51 100 1815C100 1262.72 850.147 815 1775.5 815Z"
              fill="url(#paint2_linear_407_103)"
            />
            <path
              d="M3450.78 1831.5L3445.78 1831.64L3455.77 1831.64L3450.78 1831.5ZM100.224 1831.5L95.2255 1831.64L105.222 1831.64L100.224 1831.5ZM1775.5 815V820C2237.43 820 2655.39 931.759 2957.69 1112.19C3260.11 1292.68 3446 1541.32 3446 1815H3451H3456C3456 1536.4 3266.82 1285.04 2962.82 1103.6C2658.72 922.099 2238.92 810 1775.5 810V815ZM3451 1815H3446C3446 1820.46 3445.92 1825.92 3445.78 1831.36L3450.78 1831.5L3455.77 1831.64C3455.92 1826.1 3456 1820.56 3456 1815H3451ZM3450.78 1831.5L3455.77 1831.36C3448.33 1556.62 3256.92 1309.44 2953.68 1131.19C2650.33 952.874 2234.3 843 1775.5 843V848V853C2232.82 853 2647.04 962.539 2948.61 1139.81C3250.29 1317.14 3438.46 1561.71 3445.78 1831.64L3450.78 1831.5ZM1775.5 848V843C1316.7 843 900.666 952.874 597.319 1131.19C294.079 1309.44 102.672 1556.62 95.2255 1831.36L100.224 1831.5L105.222 1831.64C112.538 1561.71 300.71 1317.14 602.387 1139.81C903.957 962.539 1318.18 853 1775.5 853V848ZM100.224 1831.5L105.222 1831.36C105.074 1825.92 105 1820.47 105 1815H100H95C95 1820.56 95.0755 1826.1 95.2255 1831.64L100.224 1831.5ZM100 1815H105C105 1541.32 290.894 1292.68 593.305 1112.19C895.612 931.759 1313.57 820 1775.5 820V815V810C1312.08 810 892.285 922.099 588.18 1103.6C284.179 1285.04 95 1536.4 95 1815H100Z"
              fill="url(#paint3_linear_407_103)"
              mask="url(#path-6-inside-2_407_103)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_407_103"
              x="1099.83"
              y="0"
              width="1285"
              height="992.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_407_103"
              />
            </filter>
            <filter
              id="filter1_f_407_103"
              x="1579.83"
              y="128"
              width="1285"
              height="992.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_407_103"
              />
            </filter>
            <filter
              id="filter2_f_407_103"
              x="620.046"
              y="156.426"
              width="1284.28"
              height="1007.01"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_407_103"
              />
            </filter>
            <filter
              id="filter3_f_407_103"
              x="0"
              y="669"
              width="3551"
              height="1216.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_407_103"
              />
            </filter>
            <clipPath
              id="bgblur_0_407_103_clip_path"
              transform="translate(-81.4 -796.4)"
            >
              <path d="M1775.5 815C2700.85 815 3451 1262.72 3451 1815C3451 1820.51 3450.92 1826.01 3450.78 1831.5C3436.01 1286.83 2691.62 848 1775.5 848C859.38 848 114.987 1286.83 100.224 1831.5C100.075 1826.01 100 1820.51 100 1815C100 1262.72 850.147 815 1775.5 815Z" />
            </clipPath>
            <linearGradient
              id="paint0_linear_407_103"
              x1="1775.5"
              y1="769"
              x2="1775.5"
              y2="1785.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.4375" stopColor="#999999" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_407_103"
              x1="1775.5"
              y1="769"
              x2="1775.5"
              y2="1785.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.1" stopColor="#999999" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_407_103"
              x1="1775.5"
              y1="815"
              x2="1775.5"
              y2="1670.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.07" stopColor="#00B2FF" />
              <stop offset="0.125" stopColor="#0082B9" />
              <stop offset="0.25" stopOpacity="0.65" stopColor="#001BE4" />
              <stop offset="0.649038" stopColor="#00374E" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_407_103"
              x1="1775.5"
              y1="815"
              x2="1775.5"
              y2="1831.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.1" stopColor="#999999" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute z-10 bottom-[220px] lg:left-1/2 lg:-translate-x-1/2 lg:w-[90%] inset-x-0 px-4 mx-4 max-w-xl text-center">
  <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] leading-relaxed opacity-70">
    We help businesses harness the power of technology to automate, innovate, and scale—smarter and faster.
  </p>
</div>


      </div>

    </section>
  );
}





