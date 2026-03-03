"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AppointmentPage from "../../components/Appoinment";
import ServiceCard from "../../components/ServiceCard";
import FrameConsultation from "/public/images/Frame 26086739.svg";
import Whatsapp from "../../components/Whatsapp";
export default function ERP() {
  return (
    <>
      <section className="w-full px-6 md:px-20 lg:px-0 lg:pr-10  pb-6 pt-10  md:pb-12 md:pt-10 bg-[#FBFCFE] relative flex flex-col justify-center overflow-hidden xl:container xl:mx-auto">
        <Image
          src="/images/image 23.svg"
          alt="Raybit Technologies"
          width={400}
          height={300}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none select-none"
        />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center flex-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full flex justify-center text-center z-20 "
          >
            <h1 className="text-[45px] sm:text-[64px] md:text-[64px] lg:text-[84px] xl:text-[114px] font-[500] text-black tracking-tight font-poppins">
              ERP Solutions
            </h1>
          </motion.div>
        </motion.div>

        <div className="relative z-20 w-full flex items-center justify-end"></div>

        {/* WhatsApp & Call Icons */}
        <Whatsapp />
        {/* Right Side Boxes for Mobile */}
        <div className="flex md:hidden flex-col gap-2 absolute top-1/2 right-[10px] -translate-y-1/2">
          {/* Gray Box - opens dialer */}
          <a
            href="tel:+916005286335"
            className="w-[7px] h-[37px] bg-[#D6D6D6] block "
            aria-label="Call us"
          />
          {/* Green Box - opens WhatsApp */}
          <a
            href="https://wa.me/+916005286335"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[7px] h-[37px] bg-primary block "
            aria-label="Chat on WhatsApp"
          />
        </div>
      </section>
      <section className=" py-10 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto  space-y-16 font-poppins">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h1 className="text-2xl md:text-[30px] font-[600] mb-4 leading-10">
              ERP Solutions for Streamlined Operations and Scalable Growth
            </h1>
            <p className="text-[#5F5F5F] font-[400] text-[15px] leading-7">
              At Raybit, a trusted provider of ERP solutions , we help
              businesses unify their processes, boost productivity, and gain
              real-time visibility across departments. Our customizable ERP
              systems are built to optimize your operations— from finance and
              inventory to HR and customer management. Whether you re a growing
              enterprise or an established organization, our solutions are
              designed to scale with your needs. We combine deep domain
              knowledge with modern technology to deliver powerful, secure, and
              user-friendly ERP platforms. Through strategic integration and a
              collaborative approach, we ensure that your business runs
              efficiently and is ready to adapt to evolving market demands.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full  rounded-lg overflow-hidden"
          >
            <FrameConsultation
              className="w-full h-auto"
              aria-label="Consultation"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full min-h-[500px] rounded-2xl  overflow-hidden lg:block hidden"
          >
            <FrameConsultation
              className="w-full h-full"
              aria-label="Consultation object-cover "
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-[30px] font-[600] mb-4 leading-10">
              What Makes Our ERP Solutions Stand Out
            </h2>
            <p className="text-[#5F5F5F] text-[15px] mb-6">
              At Raybit, we develop ERP systems that streamline operations,
              connect departments, and empower smarter business decisions. Our
              approach focuses on delivering flexible, scalable solutions
              tailored to your organization’s needs.
            </p>

            <ul className="space-y-7 text-[#5F5F5F] text-[15px]">
              <li>
                <span className="font-semibold text-[#212529] block mb-2">
                  Integrated Business Operations
                </span>
                Our ERP systems unify key business functions—finance, HR,
                inventory, sales, and more—into one centralized platform,
                improving collaboration and efficiency.
              </li>

              <li>
                <span className="font-semibold text-[#212529] block mb-2">
                  Customizable & Scalable Architecture
                </span>
                Built to adapt as your business grows, our solutions are
                tailored to fit your unique processes, ensuring long-term
                usability and performance.
              </li>

              <li>
                <span className="font-semibold text-[#212529] block mb-2">
                  Real-Time Insights & Automation
                </span>
                We enable data-driven decisions through real-time dashboards,
                automated workflows, and actionable reporting that reduce manual
                effort and increase accuracy.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      {/* services Cards */}
      <ServiceCard />
      <section className="py-16 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto  ">
        <AppointmentPage />
      </section>
    </>
  );
}
