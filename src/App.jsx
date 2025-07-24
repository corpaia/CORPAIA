import { useState } from "react";
import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ServicesPage from "./Components/ServicesPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUsPage from "./Components/AboutUsPage";
import DemoForm from "./Pages/Demo";
import ContactUsPage from "./Components/ContactUsPage";
import OurProcess from "./Pages/OurProcess.jsx";
import { Car } from "lucide-react";
import CareerPage from "./Components/CareerPage.jsx";
import JobApplicationForm from "./Pages/applicationForm.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<ServicesPage />} /> */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/demo" element={<DemoForm />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/apply" element={<JobApplicationForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
