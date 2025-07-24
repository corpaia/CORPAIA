import React from "react";
import { Briefcase, Send, ChevronRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white font-inter py-16 px-6 lg:px-20">
      {/* Header */}
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-black py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1 rounded-full mb-6">
            Career
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            We're Building the Future
            <br className="hidden md:block" />
            of AGI, Agent by Agent
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join us and lead the path toward autonomous agents, agentic process
            automation, and the future of all of us.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why Join Corpaia?
          </h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Work with cutting-edge tech in AI & automation</li>
            <li>Remote-friendly with flexible hours</li>
            <li>Fast-growing team with real impact</li>
            <li>Creative freedom and ownership</li>
            <li>Inclusive and supportive culture</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-800 to-[#a43f97] rounded-3xl p-8 border border-purple-700">
          <h2 className="text-2xl font-semibold mb-4">What We Look For</h2>
          <ul className="list-disc pl-5 space-y-2 text-white">
            <li>Problem-solvers who love to build</li>
            <li>Initiators with a bias for action</li>
            <li>Curiosity and hunger to learn fast</li>
            <li>Collaborative communicators</li>
            <li>Passion for the future of business & tech</li>
          </ul>
        </div>
      </div>

      {/* Open Roles */}
      {/* Jobs Section Header */}
      <section className="text-center mt-20 mb-10">
        <span className="inline-block  border border-white/30 text-white text-sm px-4 py-1 rounded-full mb-4">
          Career
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Latest jobs
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Explore a world of opportunities and find your place among our team of
          innovators. See our latest job openings below.
        </p>
      </section>

      <div className="max-w-5xl mx-auto mb-24">
        <div className="space-y-6">
          <JobCard
            title="Video Editing"
            location="Remote / India"
            type="Full Time"
          />
          <JobCard
            title="Graphic Designer"
            location="Remote / Hybrid - Kerala"
            type="Contract"
          />
          <JobCard title="Content Writer" location="Remote" type="Freelance" />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 border border-gray-700 rounded-3xl p-10 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Don’t see a role that fits?
        </h3>
        <p className="text-gray-400 mb-6">
          We're always looking for exceptional talent. If you're passionate
          about what we do, send us your profile!
        </p>
        <a
          href="mailto:corpaiagents@gmail.com"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#a43f97] to-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
        >
          <Send size={18} /> Send Resume
        </a>
      </div>
    </div>
  );
}
const JobCard = ({ title, location, type }) => {
  const subject = encodeURIComponent(`Job Application: ${title}`);
  const body = encodeURIComponent(
    `Hi Corpaia Hiring Team,\n\nI would like to apply for the ${title} position.`
  );

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-700 hover:border-[#a43f97] shadow-md hover:shadow-[#a43f97]/30">
      <div>
        <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
        <p className="text-sm text-gray-400">
          {location} • {type}
        </p>
      </div>
      <a
        href={`mailto:corpaiagents@gmail.com?subject=${subject}&body=${body}`}
        className="text-[#a43f97] hover:underline font-medium flex items-center gap-1 transition-all duration-200"
      >
        Apply via Email <ChevronRight size={18} />
      </a>
    </div>
  );
};
