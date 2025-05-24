import React from 'react';
import '../App.css'; 

const testimonials = [
  {
    title: "Human Resources",
    image: "/user1.jpg",
    text: "AI agents assist employees in checking leave balances, submitting leave requests, and booking meeting rooms.",
  },
  {
    title: "E-commerce",
    image: "/user2.jpg",
    text: "AI agents help customers initiate order cancellations, process refunds, and track shipments.",
  },
  {
    title: "Healthcare",
    image: "/user3.jpg",
    text: "AI agents conduct initial patient triage, manage appointments, and deliver health info efficiently.",
  },
];


const TestimonialSlider = () => {
  return (
    <div className="overflow-hidden bg-[#160035] py-12 relative">
      <div className="flex whitespace-nowrap scroll-right">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="inline-block w-80 mx-4 p-6 rounded-2xl bg-[#2b0055] text-white text-left shadow-lg flex-shrink-0"
          >
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-full border-4 border-purple-500"
              />
              <h3 className="ml-4 text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
