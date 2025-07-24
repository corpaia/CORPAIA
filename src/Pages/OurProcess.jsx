import React from "react";
import { Target, PenTool, Code, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    title: "Business Diagnosis",
    icon: Target,
    description:
      "Understand your current business state, audit tools, and identify bottlenecks.",
    color: "bg-yellow-400",
  },
  {
    title: "Business Validation",
    icon: PenTool,
    description:
      "Validate marketing tools and prioritize ROI-focused, quick-win strategies.",
    color: "bg-orange-400",
  },
  {
    title: "Business Consultation",
    icon: Code,
    description:
      "Craft a complete AI Revenue Box strategy with content & funnel planning.",
    color: "bg-red-400",
  },
  {
    title: "Development",
    icon: ShieldCheck,
    description:
      "Turn strategy into real assets develop pages, visuals & automations.",
    color: "bg-blue-500",
  },
  {
    title: "Implementation",
    icon: Rocket,
    description:
      "Launch campaigns, train teams, and set up dashboards to track results.",
    color: "bg-green-500",
  },
];

const OurProcess = () => {
  return (
 <section className="py-16 ">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
      Our <span className="text-[#a43f97]">Process</span>
    </h2>

    <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
      At Corpaia, our process is engineered for autonomy optimizing workflows,
      automating decisions, and building systems that evolve with your business.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-12">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-[220px] p-6 flex flex-col items-center text-center"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md ${step.color} mb-4`}
            >
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default OurProcess;
