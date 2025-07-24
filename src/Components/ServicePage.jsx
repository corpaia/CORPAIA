import React, { useState } from "react";
import {
  Cpu,
  BarChart3,
  Bot,
  Radar,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const services = [
  { title: "AI Agents", icon: <Bot className="w-8 h-8 text-white" /> },
  {
    title: "Process Automation",
    icon: <Workflow className="w-8 h-8 text-white" />,
  },
  {
    title: "Business Diagnostics",
    icon: <Radar className="w-8 h-8 text-white" />,
  },
  {
    title: "Growth Analytics",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
  },
  {
    title: "Security & Compliance",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    title: "Infrastructure Setup",
    icon: <Cpu className="w-8 h-8 text-white" />,
  },
];

export default function ServicesDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <span className="cursor-pointer">Services</span>

      {showDropdown && (
        <div className="absolute top-full left-0 mt-4 flex gap-6 bg-white border border-gray-200 shadow-xl rounded-xl px-6 py-4 z-50">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center hover:scale-105 transition-transform w-28"
            >
              <div className="w-16 h-16 bg-black flex items-center justify-center rounded-md">
                {item.icon}
              </div>
              <span className="mt-2 text-center text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
