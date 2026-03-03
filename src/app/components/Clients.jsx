"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Logos = [
  "/images/LOGOS/EVEXIA.png",
  "/images/LOGOS/logo re.png",
  "/images/LOGOS/image (1).png",
  "/images/LOGOS/image (2).png",
  "/images/LOGOS/image (3).png",
  "/images/LOGOS/image (4).png",
  "/images/LOGOS/image (5).png",
  "/images/LOGOS/image (6).png",
  "/images/LOGOS/image (7).png",
  "/images/LOGOS/image (8).png",
  "/images/LOGOS/image (9).png",
  "/images/LOGOS/image (10).png",
  "/images/LOGOS/image (11).png",
  "/images/LOGOS/image (12).png",
  "/images/LOGOS/image (13).png",
  "/images/LOGOS/image (14).png",
  "/images/LOGOS/image (15).png",
  "/images/LOGOS/image (16).png",
  "/images/LOGOS/image (17).png",
  "/images/LOGOS/image (18).png",
  "/images/LOGOS/image (19).png",
  "/images/LOGOS/image (20).png",
  "/images/LOGOS/image (21).png",
  "/images/LOGOS/image (22).png",
  "/images/LOGOS/image (23).png",
  "/images/LOGOS/image (24).png",
  "/images/LOGOS/image (25).png",
  "/images/LOGOS/image (26).png",
  "/images/LOGOS/image (27).png",
  "/images/LOGOS/image (28).png",
  "/images/LOGOS/image (29).png",
  "/images/LOGOS/image (30).png",
  "/images/LOGOS/image (31).png",
  "/images/LOGOS/image (32).png",
  "/images/LOGOS/image (33).png",
  "/images/LOGOS/image (34).png",
  "/images/LOGOS/image (35).png",
  "/images/LOGOS/image (36).png",
  "/images/LOGOS/image (37).png",
  "/images/LOGOS/image (38).png",
  "/images/LOGOS/image (39).png",
  "/images/LOGOS/image 2.png",
  "/images/LOGOS/temple-removebg-preview.png",
  "/images/LOGOS/vent academy.png",
];

export default function ClientsPartners() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return null; // Prevents hydration mismatch

  // ✅ Limit to 6 logos on mobile
  const visibleLogos = isMobile ? Logos.slice(0, 10) : Logos;

  return (
    <section className=" px-4 py-16">
      {/* Section Title */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center text-center flex-row md:items-center md:text-left text-primary font-[500] font-poppins mb-9 gap-2 justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="z-10 -mt-2"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M15.38 8.65L12 .986L8.62 8.65L.953 12.03l7.667 3.38L12 23.078l3.38-7.668l7.667-3.38z"
              clipRule="evenodd"
            />
          </svg>

          <div className="relative inline-block">
            <span className="absolute md:-top-6 -top-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 transform md:text-[70px] text-[33px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
              Clients
            </span>

            <h3 className="relative text-[24px] z-10 -mt-2">
              Clients & Partners
            </h3>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-[44px] font-[500] font-poppins mb-5 md:leading-3_9 leading-10 md:block hidden">
          From Startups To Enterprises, <br />
          We Transform Digital Visions At Every Scale
        </h2>
      </motion.div>

      {/* Logo Grid with Staggered Animation */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {visibleLogos.map((logoSrc, index) => (
          <motion.div
            key={index}
            className="border border-[#D6D6D6] rounded-md p-6 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
            variants={logoVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <img
              src={logoSrc}
              alt={`Client Logo ${index + 1}`}
              className="w-[140px] h-[60px] object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
