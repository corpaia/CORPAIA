import React from 'react'
import FAQsPage from '../Pages/FaqsPages'
import ServicesPage from './ServicesPage'
import BlogPage from '../Pages/BlogPage'
import Benefits from '../Pages/Benefits'
import TestimonialSlider from '../Pages/TestimonialSlider'
import AgentChatCard from '../Pages/AgentChatCard'
import WhatWeOffer from '../Pages/WhatWeOffer'
import AiMarketingAcademy from '../Pages/AiMarketingAcadamy'
import { useNavigate } from 'react-router-dom'
import ClientLogos from '../utils/ClientLogos'
import CtaSection from '../Pages/CtaSection'

const Home = () => {



  const navigate = useNavigate()

  return (
    <>
      <div>
        <section className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="relative">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-[#a43f97] to-[#f36f28] bg-clip-text text-transparent mb-4 leading-tight sm:leading-tight md:leading-snug relative z-10"
              >
                Transform Your Business with Intelligent AI Agents
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
              Deploy smart AI agents to automate daily tasks, streamline operations, and empower your team to focus on what truly matters.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
              {/* <button className="bg-[#a43f97] text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#892d7a] transition">
                Get Started Now
              </button> */}
              <button
                onClick={() => navigate('/demo')}
                className="border-2 border-[#f36f28] text-[#f36f28] px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#f36f28] hover:text-white transition"
              >
                Book A Demo
              </button>
            </div>
          </div>


          <div className="w-full max-w-6xl ">
            <ClientLogos />
          </div>

        </section >

        <div>
          <WhatWeOffer />
          <AgentChatCard />
          <Benefits />
          <AiMarketingAcademy />
          <FAQsPage />
          <CtaSection />
          {/* <TestimonialSlider/> */}
          {/* <BlogPage /> */}
        </div>
      </div>
    </>
  )
}

export default Home