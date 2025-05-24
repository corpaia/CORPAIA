import React from 'react';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {

  const navigate = useNavigate()


  return (
    <section className="bg-[#f9f7fc] py-20 px-4 text-center rounded-3xl max-w-6xl mx-auto mb-10">
      <h2 className="text-gray-600 text-xl mb-4">Build smarter systems with AI agents.</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Adopt{' '}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          autonomous, adaptive AI agents
        </span>{' '}
        to automate daily operations.
      </h1>
      <button 
      onClick={() => navigate('/demo')}
      className="mt-4 px-6 py-3 text-white font-medium rounded-xl bg-gradient-to-r from-[#f36f28] via-[#ec4899] to-[#a43f97] shadow-lg hover:opacity-90 transition-all">
        SCHEDULE A DEMO
      </button>
    </section>
  );
};

export default CtaSection;
