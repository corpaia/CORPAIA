import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Demo() {
  const clientLogos = [
    { src: "/clients/Aguaneeta.png", alt: "Client 1" },
    { src: "/clients/mendiv.png", alt: "Client 2" },
    { src: "/clients/Logo.png", alt: "Client 3" },
    { src: "/clients/xpanzone.png", alt: "Client 4" },
    { src: "/clients/kamco.png", alt: "Client 5" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    country: "",
    queries: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API logic here
  };

  return (
    <div className="max-w-7xl mx-auto pt-32 text-white p-8 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Section */}
      {/* Left Section */}
      <div className="md:flex-[1.5]">
        <h1 className="text-4xl text-white font-bold leading-tight mb-4">
          Automate Your Business <br />
          <span className="text-5xl bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent">
            with Corpaia AI Agents
          </span>
        </h1>
        <p className="text-lg text-white mb-6">
          We deploy enterprise-grade AI agents that handle execution, decisions,
          and operations. So your team can focus on growth.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2 text-white">
            <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
            <span>Intelligent customer support</span>
          </li>
          <li className="flex items-start gap-2 text-white">
            <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
            <span>Enhanced employee experience</span>
          </li>
          <li className="flex items-start gap-2 text-white">
            <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
            <span>AI-powered product recommendations</span>
          </li>
        </ul>
        <p className="font-semibold text-white text-lg mb-2">Schedule a Demo</p>
        <p className="text-white text-base">
          for a personalized, no-commitment consultation. Discover how Corpaia
          can address your unique challenges and boost your business efficiency.
        </p>
        <div className="mt-8 bg-white/10 rounded-xl p-4 overflow-hidden">
          <div className="flex flex-col items-start gap-12">
            <span className="text-sm uppercase text-gray-400 font-bold">
              Trusted by leading companies
            </span>
            <div className="flex scroll-animation gap-10">
              {clientLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="md:flex-[1.5] mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
        {/* <h2 className="text-2xl font-bold text-black mb-6 text-center">Schedule a Demo</h2> */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/** First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f36f28]"
              onChange={handleChange}
            />
          </div>

          {/** Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name*
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            />
          </div>

          {/** Work Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Work Email*
            </label>
            <input
              type="email"
              name="workEmail"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            />
          </div>

          {/** Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name*
            </label>
            <input
              type="text"
              name="companyName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            />
          </div>

          {/** Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title*
            </label>
            <input
              type="text"
              name="jobTitle"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            />
          </div>

          {/** Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country/Region*
            </label>
            <input
              type="text"
              name="country"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            />
          </div>

          {/** Queries */}
          {/** Queries */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Monthly Queries*
            </label>
            <select
              name="queries"
              required
              className="mt-1 block text-black w-full border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="0-100">0-100</option>
              <option value="100-1000">100-1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div>

          {/** Budget */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Budget*
            </label>
            <select
              name="budget"
              required
              className="mt-1 block text-black w-full border border-gray-300 rounded-md px-4 py-2"
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="under-1k">$0 - $1,000</option>
              <option value="1k-10k">$1,000 - $10,000</option>
              <option value="10k+">$10,000+</option>
            </select>
          </div>

          {/** Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#f36f28] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
            >
              Schedule Demo
            </button>
          </div>
        </form>
      </div>
      {/* <div>
          <SupportSection/>
      </div> */}
    </div>
  );
}

// Tailwind Input Style (recommended in global CSS or add `input` class above)
// .input {
//   @apply w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500;
// }
