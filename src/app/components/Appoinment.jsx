// app/appointment/page.jsx
"use client";

import { motion } from "framer-motion";
import BookAppoinment from "./BookAppoinment";
export default function AppointmentPage() {
  return (
    <div className="text-black flex flex-col custom930:flex-row gap-10">
      {/* Left Content with Animation */}
      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="flex items-center text-center flex-row md:text-left text-primary font-[500] font-poppins mb-9 gap-2 justify-center md:justify-start">
          <div className="flex-shrink-0 flex items-center justify-center h-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-primary"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.38 8.65L12 .986L8.62 8.65L.953 12.03l7.667 3.38L12 23.078l3.38-7.668l7.667-3.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="relative inline-block">
            <span className="absolute md:-top-6 -top-4 left-1/2 -translate-x-1/2 md:-left-9 md:translate-x-0 transform md:text-[70px] text-[33px] custom930:text-[50px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
              Appoinment
            </span>
            <h3 className="relative text-[24px] z-10 -mt-2">Book Appoinment</h3>
          </div>
        </div>

        <h2
          className="text-2xl md:text-3xl md:font-[500] font-[600] font-poppins md:text-left text-center"
          style={{ lineHeight: "2.5rem" }}
        >
          Turn Your Vision Into Reality — Let’s Build Something Great Together!
        </h2>
        <p className="text-[#5F5F5F] text-sm leading-6 font-poppins lg:pr-24 pb-5">
          Raybit Technologies Private Limited is a Global Software Development
          Company with expertise in building scalable work flow models for
          different industry uprights. We deliver best in class services and
          tailor made solutions for various modern business problems.
        </p>
        <ul className="list-disc list-inside text-sm text-[#5F5F5F] space-y-4 font-poppins">
          <li>Progressive Web Applications</li>
          <li>Customized Mobile Applications</li>
          <li>ERP Solutions</li>
          <li>Automation Solutions</li>
          <li>White Labelled Products</li>
          <li>Digital Marketing Services</li>
        </ul>
      </motion.div>

      {/* Right Form with Animation */}
      <BookAppoinment />
    </div>
  );
}
