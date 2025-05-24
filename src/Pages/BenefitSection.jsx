import { FaCheckCircle } from 'react-icons/fa';
import React from 'react';

export default function BenefitsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Badge */}
        <div className="mb-6">
          <span className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full inline-block">
            Benefits
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Run your operations<br />
          smarter, faster, and<br />
          with greater efficiency
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          AI agents simplify complex BPO and Shared Service Center processes by automating routine tasks and enhancing productivity. Business process outsourcing companies and SSCs can leverage AI-driven insights to uncover trends, improve service quality, and ensure 24/7 operational support. Equip your team to make informed decisions, boost efficiency, and drive sustainable growth.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg font-semibold text-white">
          {[
            "Reduce Need to Hire",
            "Better Customer Satisfaction",
            "Risk Management",
            "Improved Tenant Experience",
            "Decrease Operational Costs",
            "Operational 24/7",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-400" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
