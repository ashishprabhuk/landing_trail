import whatWeDoGraphic from "../assets/whatwedo-graphic.svg";
import wwd from "../assets/WhatWeDo_graphic.svg";
import devices from "../assets/devices.svg";

const services = [
  {
    title: "Design",
    text: "Logo creation, brand identity assets, and visual communication that resonates.",
    icon: "🎨",
  },
  {
    title: "Software Development",
    text: "Custom web and mobile applications tailored to your business logic.",
    icon: "💻",
  },
  {
    title: "Technology Consulting",
    text: "Expert guidance for digital transformation, IT strategy, and technology adoption.",
    icon: "🛡️",
  },
  {
    title: "Data Analytics & AI",
    text: "Actionable insights and smart automation through AI-driven solutions.",
    icon: "📊",
  },
];

export default function WhatWeDo() {
  const isActive = false;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="space-y-16">
      {/* First Section - What We Do */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* Left: Heading + Services */}
        <div className="md:col-span-7 text-center md:text-left px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
            What We Do
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto md:mx-0">
            At Andrometa, we offer end-to-end digital solutions designed to help
            you thrive in the modern business landscape.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl relative group overflow-hidden
                   bg-white/10 backdrop-blur-xl border border-white/20
                   shadow-lg hover:shadow-2xl transition-all duration-500
                   hover:scale-105"
              >
                {/* Glow gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="text-4xl mb-4 text-white">{service.icon}</div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 mt-2">{service.text}</p>

                {/* Hover light effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: SVG graphic aligned to the screen edge */}
        <div className="md:col-span-5 max-h-220 flex justify-end md:pr-0 pr-0">
          <img
            src={wwd}
            alt="Andrometa capabilities graphic"
            className="w-full h-auto md:max-w-[520px] md:ml-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Second Section - Custom Solutions */}
      <div className="flex flex-col items-center text-center px-4 md:px-8">
  {/* Above text */}
  <div className="mb-2">
    <h3 className="text-2xl font-semibold mb-4">
      One idea. Every platform!
    </h3>
    <p className="text-gray-400 text-lg max-w-xl mx-auto">
      Let's design, build, and launch your app for all devices — beautifully and seamlessly.
    </p>
  </div>

  {/* SVG center */}
  <img
    src={devices}
    alt="Multi-device application development"
    className="w-full max-w-[700px] h-auto"
    loading="lazy"
  />

  {/* Below text */}
  <div className="-mt-12"> 
    <h2 className="text-3xl font-bold mb-6">
      Can't find exactly what you're looking for?
      <span className="block mt-2 text-blue-400">
        We'll craft a custom solution just for you
      </span>
    </h2>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
      Get Started
    </button>
  </div>
</div>

    </div>
  );
}
