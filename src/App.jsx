import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ServicesPage from './Components/ServicesPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AboutUsPage from './Components/AboutUsPage'
import DemoForm from './Pages/Demo'
import ContactUsPage from './Components/ContactUsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<ServicesPage />} /> */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/demo" element={<DemoForm />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
