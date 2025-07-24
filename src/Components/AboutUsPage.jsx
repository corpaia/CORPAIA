import React from "react";
import BenefitsSection from "../Pages/BenefitSection";

const AboutUsPage = () => {
  return (
    <div>
      <section className=" flex items-center justify-center p-8 pt-48 ">
        <div className="max-w-5xl text-center">
          <button className="border-2 border-gray-400 mb-7 p-2 rounded-xl font-semibold text-white">
            About Us
          </button>
          <h1 className="text-5xl font-bold text-white mb-6">
            We are pioneering the journey toward AGI.
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              We are developing advanced AI agents designed to transform how
              organizations operate by automating routine tasks, enhancing
              productivity, and empowering teams to focus on innovation and
              meaningful work.
            </p>
          </div>
        </div>
      </section>
      <div>
        <BenefitsSection />
      </div>
      <section className=" flex items-center justify-center pb-24 pt-32 ">
        <div className="max-w-4xl text-center">
          <button className="border-2 border-gray-700 mb-7 p-2 rounded-xl font-semibold text-white">
            Values
          </button>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Every great achievement begins with a spark an idea, a choice, a
            step.
          </h1>
          {/* 
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Big things start small. One spark is all it takes.
          </h1> */}

          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-white px-4">
              We’re driven by the power of small beginnings to create meaningful
              impact. Our commitment is to empower creators, innovators, and
              visionaries with the tools and platform to achieve more by doing
              less.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
