import { Code, BarChart3, PenTool, Lightbulb } from "lucide-react";
import wwd from "../assets/WhatWeDo_graphic.svg";
import devices from "../assets/devices.svg";

const services = [
  {
    title: "Design",
    text: "Logo creation, brand identity assets, and visual communication that resonates.",
    icon: <PenTool className="w-12 h-12 text-white" />,
  },
  {
    title: "Software Development",
    text: "Custom web and mobile applications tailored to your business logic.",
    icon: <Code className="w-12 h-12 text-white" />,
  },
  {
    title: "Technology Consulting",
    text: "Expert guidance for digital transformation, IT strategy, and technology adoption.",
    icon: <Lightbulb className="w-12 h-12 text-white" />,
  },
  {
    title: "Data Analytics & AI",
    text: "Actionable insights and smart automation through AI-driven solutions.",
    icon: <BarChart3 className="w-12 h-12 text-white" />,
  },
];

export default function WhatWeDo() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        <div className="md:col-span-7 text-center md:text-left px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
            What We Do
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto md:mx-0">
            At Andrometa, we offer end-to-end digital solutions designed to help
            you thrive in the modern business landscape.
          </p>

          <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg 
                             hover:shadow-2xl hover:scale-[1.03] transition-all duration-300
                             relative overflow-hidden group"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

                  {/* Icon */}
                  <div className="mb-4">{service.icon}</div>

                  <h3 className="font-semibold text-lg text-white">{service.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-end">
          <img
            src={wwd}
            alt="Andrometa capabilities graphic"
            className="w-full h-auto md:max-w-[520px] md:ml-auto"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-4 md:px-8">
        <div className="mb-2">
          <h3 className="text-4xl font-semibold mb-4">
            One idea. Every platform!
          </h3>
          <p className="text-gray-400 mb-4 text-lg max-w-xl mx-auto">
            Let's design, build, and launch your app for all devices — beautifully and seamlessly.
          </p>
        </div>

        <img
          src={devices}
          alt="Multi-device application development"
          className="w-full sm:mb-5 md:mb-5 lg:mb-5 max-w-[700px] h-auto"
          loading="lazy"
        />

        <div className="-mt-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[60px] font-bold mb-6">
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
