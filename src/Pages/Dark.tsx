
export default function HeroEclipse() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden text-white">

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Simplify Technology <br /> Amplify Efficiency
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          We help businesses harness the power of technology to automate, innovate, and scale — smarter and faster.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition">
          Boost Your Business
        </button>
      </div>

      {/* Stronger Neon Glow Halo Behind Arc */}
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[150%] h-[400px] rounded-[50%] bg-blue-500/30 blur-[150px]"></div>
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[160%] h-[500px] rounded-[50%] bg-blue-400/20 blur-[200px]"></div>

      {/* Quarter Arc Shape */}
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[120%] h-[180px] rounded-t-[50%] bg-gradient-to-t from-black to-transparent"></div>

      {/* Neon Edge Over Arc */}
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[120%] h-[180px] rounded-t-[50%] border-t-2 border-blue-400 shadow-[0_0_40px_#3b82f6,0_0_80px_#3b82f6]"></div>

      {/* Logo Row */}
      <div className="absolute bottom-8 flex space-x-12 opacity-50 text-gray-400 text-sm">
        <span>Airbnb</span>
        <span>Creative Market</span>
        <span>Shopify</span>
        <span>Amazon</span>
        <span>Google</span>
      </div>
    </div>
  );
}
