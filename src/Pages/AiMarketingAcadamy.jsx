import React from 'react';
import { GraduationCap } from 'lucide-react';

const AiMarketingAcademy = () => {
  return (
    <section className="bg-gradient-to-br from-[#361335] to-[#702969] text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-800 rounded-full p-4">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              AGENTS SCHOOL<br />
              {/* <span className="text-orange-400">Where the Future of AI Talent Begins</span> */}
            </h2>
          </div>

          <p className="text-lg text-white mb-6">
            <strong>Agents School</strong> is India’s first academy built to ignite a movement of AI-powered creators, entrepreneurs, and specialists.
            We empower the next generation to not just adapt to the AI era — but to shape it.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <GraduationCap className="text-orange-500 w-5 h-5 mt-1" />
              <span>Develop future-ready skills in AI-Augmented Marketing, AIoT, Blockchain, and Automation</span>
            </li>
            <li className="flex items-start gap-3">
              <GraduationCap className="text-orange-500 w-5 h-5 mt-1" />
              <span>Join a new wave of AI entrepreneurs, creators, and digital pioneers</span>
            </li>
            <li className="flex items-start gap-3">
              <GraduationCap className="text-orange-500 w-5 h-5 mt-1" />
              <span>Hands-on learning, real-world innovation, and mission-driven mentorship</span>
            </li>
            <li className="flex items-start gap-3">
              <GraduationCap className="text-orange-500 w-5 h-5 mt-1" />
              <span>Be part of India’s first AI Agent School nurturing specialized, global-ready AI talent</span>
            </li>
          </ul>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold tracking-wide">
            Coming Soon — Be Among the First to Join Agents School
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-7/12 relative">
          <img
            src="/media/academy.jpg"
            alt="Agent School Cohort"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AiMarketingAcademy;