import { Rocket, Brush, Bot, GraduationCap } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Bot size={40} className="text-[#a43f97]" />,
    title: "AI Agent Development",
    description: "Custom AI agents that think, plan, and act to streamline your operations.",
    // bgColor: "bg-[#ffe4e6]", 
  },
  {
    icon: <Rocket size={40} className="text-[#f36f28]" />,
    title: "AI Marketing",
    description: "Boost reach and performance using intelligent AI marketing systems.",
    // bgColor: "bg-[#fff4e6]", // Light orange (adjusted to match orange tone)
  },
  {
    icon: <Brush size={40} className="text-[#a43f97]" />,
    title: "AI Branding",
    description: "Build a smart, scalable brand presence with AI-powered storytelling.",
    // bgColor: "bg-[#ede9fe]", // Light lavender
  },
  {
    icon: <GraduationCap size={40} className="text-[#4caf50]" />,
    title: "ACADEMY",
    description: "Learn AI-Augmented Marketing & Agent Dev in our practical academy.",
    // bgColor: "bg-[#dcfce7]", // Light mint green
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-16 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <button className="border-2 border-[#a43f97] text-[#a43f97] font-semibold px-4 py-2 rounded-full transition">
          What We Offer
        </button>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 mt-5 leading-tight">
          We Harness AI Technology to Accelerate Your Business Growth
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-lg mb-8">
          We deliver tailored AI solutions that streamline operations, enhance decision-making, and drive faster, sustainable growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300`}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#a43f97] mb-2">
                {service.title}
              </h3>
              <p className="text-base text-[#5a5a5a] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







// import { Rocket, Brush, Bot, GraduationCap } from "lucide-react";
// import React from "react";

// const firstRowServices = [
//   {
//     icon: <Bot size={40} />,
//     title: "AI Agent Development",
//     description: "Custom AI agents that think, plan, and act to streamline your operations.",
//     bgColor: "bg-[#ffe4e6]", // Light pink
//   },
//   {
//     icon: <Rocket size={40} />, // Replace with a suitable icon if you want
//     title: "Business Workflow Automation",
//     description: "Automate your business processes with smart AI-driven workflows.",
//     bgColor: "bg-[#fff7e6]", // Light warm yellow
//   },
// ];

// const secondRowServices = [
//   {
//     icon: <Rocket size={40} />,
//     title: "AI-Augmented Marketing",
//     description: "Boost reach and performance using intelligent AI marketing systems.",
//     bgColor: "bg-[#e0f2fe]", // Light blue
//   },
//   {
//     icon: <Brush size={40} />,
//     title: "AI-Augmented Branding",
//     description: "Build a smart, scalable brand presence with AI-powered storytelling.",
//     bgColor: "bg-[#ede9fe]", // Light lavender
//   },
//   {
//     icon: <GraduationCap size={40} />,
//     title: "ACADEMY",
//     description: "Learn AI-Augmented Marketing & Agent Dev in our practical academy.",
//     bgColor: "bg-[#dcfce7]", // Light mint green
//   },
// ];

// export default function WhatWeOffer() {
//   return (
//     <section className="py-16 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-14">
//           What We Offer
//         </h2>

//         {/* First Row: 2 cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           {firstRowServices.map((service, index) => (
//             <div
//               key={index}
//               className={`${service.bgColor} rounded-2xl p-10 shadow-sm hover:shadow-lg transition duration-300`}
//             >
//               <div className="mb-4 text-green-800">{service.icon}</div>
//               <h3 className="text-2xl font-bold text-green-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-base text-green-800 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Second Row: 3 cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
//           {secondRowServices.map((service, index) => (
//             <div
//               key={index}
//               className={`${service.bgColor} rounded-2xl p-10 shadow-sm hover:shadow-lg transition duration-300`}
//             >
//               <div className="mb-4 text-green-800">{service.icon}</div>
//               <h3 className="text-2xl font-bold text-green-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-base text-green-800 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
