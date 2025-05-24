import React from "react";
import { ArrowRight } from "lucide-react"; // Optional: For icon in Learn More link

const divisions = [
  {
    title: "Academy",
    description: "AI-powered digital marketing education and career launchpad.",
    icon: "🎓", // Replace with actual icon components if needed
    link: "#"
  },
  {
    title: "Branding Studio",
    description: "Crafting purpose-driven identities and story-led digital brands.",
    icon: "🎨",
    link: "#"
  },
  {
    title: "Agentic Services",
    description: "Custom AI agents and automations for scaling your business.",
    icon: "🤖",
    link: "#"
  },
  {
    title: "Corporate Solutions",
    description: "Strategic AI-led transformation programs for enterprises.",
    icon: "🏢",
    link: "#"
  }
];

const DivisionHighlights = () => {
  return (
    <div className="w-full py-16 text-[#20361c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl">{division.icon}</div>
              <h3 className="text-xl font-semibold">{division.title}</h3>
              <p className="text-sm text-[#3d5c3a]">{division.description}</p>
              <a
                href={division.link}
                className="text-sm text-[#3d5c3a] mt-auto flex items-center gap-1 hover:underline"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivisionHighlights;
