import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";

export default function ClientLogos() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clientLogos = [
    { src: "/clients/Aguaneeta.png", alt: "Client 1" },
    { src: "/clients/mendiv.png", alt: "Client 2" },
    { src: "/clients/Logo.png", alt: "Client 3" },
    { src: "/clients/xpanzone.png", alt: "Client 4" },
    { src: "/clients/logowithiso.webp", alt: "Client 5" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Tailwind 'md'
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animationProps =
    isLargeScreen && isInView
      ? {
          initial: { opacity: 0, x: -80 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
        }
      : {};

  return (
    <div className="w-full max-w-6xl mx-auto" ref={ref}>
      <h3 className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6">
        Trusted by forward-thinking companies
      </h3>

      {/* Desktop (md and up): Fade-in Static Grid */}
      <motion.div
        {...animationProps}
        className="hidden md:flex flex-wrap justify-center items-center gap-8 px-4"
      >
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 object-contain"
          />
        ))}
      </motion.div>

      {/* Mobile/Tablet: Scrolling marquee */}
      <div className="md:hidden overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
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
  );
}
