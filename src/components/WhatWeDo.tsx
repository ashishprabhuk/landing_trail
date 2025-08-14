import whatWeDoGraphic from "../assets/whatwedo-graphic.svg";
import wwd from "../assets/WhatWeDo_graphic.svg";

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
      {/* <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "6px",
              background: "rgba(255, 255, 255, 0.08)",
              padding: "6px",
              borderRadius: "25px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            {navItems.map((item, index) => {
              return (
                <button
                  key={item.path}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "18px",
                    background: `
            rgba(255, 255, 255, 0.05),
            linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))`,
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)"
          ,color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    whiteSpace: "nowrap",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.1)",
                    animation: "activeGlow 2s ease-in-out infinite alternate",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.12)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0px)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div> */}
        <img
          src={wwd}
          alt="Andrometa capabilities graphic"
          className="w-full h-auto md:max-w-[520px] md:ml-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}
