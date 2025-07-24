import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Agentic AI?",
    answer:
    "Agentic AI refers to self-learning AI systems that autonomously make decisions and execute tasks, adapting dynamically to changes in workflows.",
  },
  {
    question: "What is an AI agent, and how is it different from a chatbot?",
    answer:
      "AI agents go beyond basic chatbots. They’re autonomous, goal oriented systems that think, act, and optimize. Unlike chatbots, which follow predefined rules, AI agents make decisions, handle complex workflows, and continuously improve with experience.",
  },
  {
    question: "What makes Corpaia different from traditional automation platforms?",
    answer:
      "While most platforms offer rule-based workflows, CORPAIA builds intelligent, context-aware AI agents that learn from your data, adapt to new inputs, and act autonomously offering a truly cognitive automation layer for your business.",
  },
  {
    question: "How does Corpaia use AI in branding?",
    answer:
      "We build intelligent brand systems that evolve with your audience. From logo creation and AI-enhanced visual identity to tone-of-voice engines and sentiment analysis, our agents help you craft consistent, adaptive brand experiences across platforms.",
  },
  {
    question: "How can AI agents transform my business operations?",
    answer: `
    AI agents act as digital team members capable of executing tasks, making decisions, and optimizing workflows in real time. Unlike traditional software, they don’t just follow instructions; they learn, adapt, and perform across departments like customer support, sales, HR, and operations.
    <br /><br />
    With <strong>CORPAIA's AI agents</strong>, you can:
    <ul class="list-disc list-inside mt-2 space-y-1">
    <li>Automate repetitive and time-consuming tasks</li>
    <li>Operate 24/7 without fatigue or downtime</li>
    <li>Provide instant, human-like customer support</li>
    <li>Increase operational efficiency with fewer resources</li>
    <li>Scale faster without growing your team</li>
    </ul>
    <br />
    By embedding intelligent agents into your operations, your business becomes faster, leaner, and more agile ready to thrive in a future powered by autonomous execution.
    `
  },
  
];

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-[#ffffff] ">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">
        Frequently <span className="text-[#a43f97]">Asked</span> Questions
      </h2>
      <p className="text-lg text-[#bac2ba] mb-10 max-w-4xl">
        Learn the answers to common questions about our AI solutions, tools, and services, helping you understand how they can benefit your business and streamline operations.
      </p>

      <div className="space-y-2 ">
        {faqs.map((faq, index) => (
          <div key={index} className=" border-[#dde7d0] bg-gray-950  ounded-xl overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-6 py-5 bg-gray-950 hover:bg-gray-950 rounded-xl transition-colors duration-300 text-gray-200"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg sm:text-xl font-semibold text-left">{faq.question}</span>
              <ChevronDown
                className={`h-6 w-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out px-6 ${activeIndex === index ? 'max-h-96 py-4 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
              <div
                className="text-base text-gray-300 "
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
