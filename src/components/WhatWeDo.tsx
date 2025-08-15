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
    title: "Cybersecurity",
    text: "Advanced security solutions to keep your digital assets safe and compliant.",
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
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
            At Andrometa, we offer end-to-end digital solutions designed to help you thrive in the modern business landscape.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow hover:scale-105 transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{service.text}</p>
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
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* Left: Device SVG */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <img
            src={devices}
            alt="Multi-device application development"
            className="w-full h-auto md:max-w-[480px]"
            loading="lazy"
          />
        </div>

        {/* Right: Custom Solution Text */}
        <div className="md:col-span-7 text-center md:text-left px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Can't find exactly what you're looking for? 
            <span className="block mt-2 text-blue-400">
              We'll craft a custom solution just for you
            </span>
          </h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">
              One idea. Every platform!
            </h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
              Let's design, build, and launch your app for all devices — beautifully and seamlessly.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}