import { Rocket, Brush, Bot, GraduationCap } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Bot size={40} className="text-white" />,
    title: "AI Agent Development",
    description:
      "Custom AI agents that think, plan, and act to streamline your operations.",
  },
  {
    icon: <Rocket size={40} className="text-white" />,
    title: "AI Marketing",
    description:
      "Boost reach and performance using intelligent AI marketing systems.",
  },
  {
    icon: <Brush size={40} className="text-white" />,
    title: "AI Branding",
    description:
      "Build a smart, scalable brand presence with AI-powered storytelling.",
  },
  {
    icon: <GraduationCap size={40} className="text-white" />,
    title: "ACADEMY",
    description:
      "Learn AI-Augmented Marketing & Agent Dev in our practical academy.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <button className="border-2 border-[#a43f97] text-white font-semibold px-4 py-2 rounded-full transition">
          What We Offer
        </button>
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-200 mb-4 mt-5 leading-tight">
          We Harness AI Technology to Accelerate Your Business Growth
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
          We deliver tailored AI solutions that streamline operations, enhance
          decision-making, and drive faster, sustainable growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-2xl p-6 shadow-sm hover:shadow-[#a43f97]/30 hover:scale-105 transition duration-300 border-2 border-[#a43f97]  flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
