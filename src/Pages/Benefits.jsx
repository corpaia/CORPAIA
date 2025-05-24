import React from "react";

export default function StatsSection() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-12 px-4">
        <button className=" text-[#a43f97] border-2 font-semibold py-2 px-6 rounded-full transition duration-300">
          Benefits
        </button>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 leading-tight">
            Improve Operational Efficiency and Create Leverage. Fast.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Deploy AI agents to streamline operations and amplify your business's efficiency.
            These agents optimize processes, reduce delays, and enhance output, ensuring you gain
            a competitive edge with speed and precision.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch px-4">
        {/* Left Image Card */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl relative overflow-hidden bg-gradient-to-b from-[#0b2349] to-[#3278c4] text-white p-6 flex flex-col justify-end min-h-[400px] sm:min-h-[500px] w-full">
            <div className="absolute inset-0 z-0">
              <img
                src="/your-network-image.png"
                alt="AI Agent Network"
                className="object-cover w-full h-full opacity-30"
              />
            </div>
            <div className="z-10">
              <h2 className="text-2xl font-semibold mb-1 leading-snug">
                Integrate AI Agents Into
              </h2>
              <p className="text-lg opacity-90">Your Organization Structure</p>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            percentage="93%"
            description="Reduction in wait time/lead time."
            graphLevel={60}
          />
          <StatCard
            percentage="100%"
            description="Automation of repetitive tasks."
            graphLevel={80}
          />
          <StatCard
            percentage="85%"
            description="Faster aggregation of data."
            graphLevel={90}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ percentage, description, graphLevel, emphasized = false }) {
  return (
    <div
      className={`rounded-3xl bg-zinc-900 ${emphasized ? "p-7" : "p-6"
        } text-white relative min-h-[300px] sm:min-h-[400px] flex flex-col justify-end overflow-hidden`}
    >
      {/* Graph overlay */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polyline
            fill="none"
            stroke="white"
            strokeWidth="2"
            points={`-100,100 ${graphLevel / 5},${100 - graphLevel * 0.6} ${graphLevel},${100 - graphLevel * 0.8} 100,${100 - graphLevel}`}
          />
        </svg>
      </div>

      <div className="z-10">
        <h3 className={`${emphasized ? "text-6xl" : "text-4xl"} font-bold mb-4`}>
          {percentage}
        </h3>
        <p className="text-sm sm:text-base text-gray-400">{description}</p>
      </div>
    </div>
  );
}
