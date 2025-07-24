import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll for glass effect and navbar show/hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glass effect when scrolled past 50px
      setIsScrolled(currentScrollY > 50);

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on resize
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
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-[96px] z-50 transition-all duration-300 ease-in-out ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        } box-border bg-[rgba(35,31,31,0.58)] border shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-[6px]`}
      >
        <div className="flex items-center justify-between py-6 px-6 md:px-12 lg:px-16 w-full">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/media/corpaia.png"
              alt="Creopedia Logo"
              className="h-8 md:h-11 w-auto"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-10 text-gray-300 font-semibold text-lg">
            <a href="/" className="hover:text-gray-500">
              Home
            </a>
            <a href="/about-us" className="hover:text-gray-500">
              About Us
            </a>
            <a href="/contact-us" className="hover:text-gray-500">
              Contact
            </a>
            <a href="/career" className="hover:text-gray-500">
              Career
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button
              className="bg-gradient-to-r from-[#f36f28] via-[#ec4899] to-[#a43f97] text-white px-6 py-3 rounded-3xl font-bold flex items-center space-x-2 transition duration-300"
              onClick={() => navigate("/demo")}
            >
              <span>Schedule a Demo</span>
              <FaArrowRight />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white text-2xl"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-black text-white p-6 transform transition-transform duration-300 z-50 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-2xl"
          >
            <FaTimes />
          </button>
          <div className="mt-16 space-y-6 text-lg">
            <a href="/" className="block">
              Home
            </a>
            <a href="/about-us" className="block">
              About Us
            </a>
            <a href="/contact-us" className="block">
              Contact
            </a>
            <a href="/blog" className="block">
              Blog
            </a>
            <a href="/career" className="block">
              Career
            </a>

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

        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
