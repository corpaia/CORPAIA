import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const AgentChatCard = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto">
      {/* Left Side - AI Benefits */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
          AI Agents That <span className="text-[#f36f28]">Automate</span> Your
          Workflows
        </h2>
        <p className="text-gray-300 mb-6">
          Harness the power of CORPAIA's intelligent AI agents to handle
          time-consuming tasks and streamline your business operations without
          disrupting your existing systems.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Seamless System Sync",
              desc: "Connect effortlessly with tools like HubSpot, Salesforce, and more using plug-and-play API integration.",
            },
            {
              title: "Human-Like Learning",
              desc: "No coding needed — teach your AI using natural language, just as you would guide a team member.",
            },
            {
              title: "Smart Data Access",
              desc: "Set clear rules on how your agent interacts with business data, ensuring both control and efficiency.",
            },
            {
              title: "End-to-End Automation",
              desc: "From lead handling to task follow-ups, automate entire workflows with precision and reliability.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FiCheckCircle className="text-[#a43f97] text-xl mt-1" />
              <div>
                <p className="font-semibold text-gray-100">{item.title}:</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="media/chat.png"
          alt="AI Agent Chat Example"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AgentChatCard;
