import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex md:justify-around justify-between items-center py-6 px-6 md:px-12 lg:px-16 w-full">
        {/* Logo and Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/media/corpaia.png"
              alt="Creopedia Logo"
              className="h-8 md:h-11 w-auto"
            />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-10 text-black font-semibold text-lg">
            <a href="/" className="hover:text-gray-500">Home</a>
            <a href="/about-us" className="hover:text-gray-500">About Us</a>
            <a href="/contact-us" className="hover:text-gray-500">Contact</a>
          </div>
        </div>


        <div className="hidden md:flex">
          <button
            className="bg-gradient-to-r from-[#f36f28] via-[#ec4899] to-[#a43f97] text-white px-6 py-3 rounded-3xl font-bold flex items-center space-x-2 transition duration-300"
            onClick={() => navigate("/demo")}
          >
            <span>Schedule a Demo</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-black text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white p-6 transform transition-transform duration-300 z-50 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-5 text-2xl"
        >
          <FaTimes />
        </button>
        <div className="mt-16 space-y-6 text-lg">
          <a href="/" className="block">Home</a>
          <a href="/about-us" className="block">About Us</a>
          <a href="/contact-us" className="block">Contact</a>
          <a href="/blog" className="block">Blog</a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/contact-us");
            }}
            className="w-full mt-4 bg-gradient-to-r from-[#f36f28] via-[#ec4899] to-[#a43f97] text-white py-3 rounded-lg"
          >
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;


