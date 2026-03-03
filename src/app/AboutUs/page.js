"use client";

import React from "react";
import Image from "next/image";
import AppointmentPage from "../components/Appoinment";
import ClientsPartners from "../components/Clients";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Reputaion from "/public/images/reputation 1.svg";
import Relationship from "/public/images/relationship 1.svg";
import Support from "/public/images/support 1.svg";
import CustomerService1 from "/public/images/customer-service 1.svg";
import { useRouter } from "next/navigation";
import Whatsapp from "../components/Whatsapp";
export default function AboutUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (inView) {
      leftControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      rightControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
      });
    }
  }, [inView, leftControls, rightControls]);
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      title: "Software Development",
      image: "/images/image 4.svg",
    },
    {
      title: "Mobile App Development",
      image: "/images/image 5.svg",
    },
    {
      title: "Software Testing & QA",
      image: "/images/image 7.svg",
    },
  ];

  const text = "About Us";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.11,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/Meetings");
  };
  return (
    <>
      <section className="w-full px-6 md:px-20 lg:px-0 lg:pr-10  pb-28 pt-10  md:pb-12 md:pt-10 bg-[#FBFCFE] relative flex flex-col justify-center overflow-hidden ">
        <Image
          src="/images/image 23.svg"
          alt="Raybit Technologies"
          width={400}
          height={300}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none select-none"
        />

        {/* Heading */}
        <div className="flex flex-col justify-center flex-1">
          <div className="relative w-full flex justify-center text-center z-20">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-[45px] sm:text-[64px] md:text-[64px] lg:text-[84px] xl:text-[113px] font-[500] text-black tracking-tight font-poppins"
            >
              {text.split("").map((char, index) => {
                return (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
          </div>
        </div>

        {/* Avatars - Scattered */}
        <div className="relative w-full h-full z-30">
          {/* Manager */}

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              delay: 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute lg:left-[12%] sm:bottom-[25%]  top-[-103px] flex flex-col items-center text-center"
          >
            <Image
              src="https://randomuser.me/api/portraits/men/1.jpg"
              width={27}
              height={27}
              className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
              alt="Manager"
            />
            <div className="bg-[#F1F1F1] text-black px-2 py-1 md:text-sm text-[9px] shadow mt-2 relative">
              <Image
                src="/images/Vector 2.svg" // Update this to your file path
                alt="Arrow"
                width={12}
                height={12}
                className="absolute -top-3 -left-2 -rotate-12"
              />
              Manager
            </div>
          </motion.div>

          {/* Designer */}

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              delay: 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute lg:left-[28%] md:left-[40%] xl:-top-40 lg:-top-32 md:-top-32 flex flex-col items-center text-center sm:top-[-123px] top-[-97px] left-[55%] "
          >
            <div className="bg-primary text-white px-2 py-1 md:text-sm text-[9px]  shadow mb-2 tag-arrow relative">
              <Image
                src="/images/Vector 2.svg" // Update this to your file path
                alt="Arrow"
                width={12}
                height={12}
                className="absolute -top-3 -left-2 -rotate-12"
              />
              Designer
            </div>
            <Image
              src="https://randomuser.me/api/portraits/women/2.jpg"
              width={27}
              height={27}
              className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
              alt="Designer"
            />
          </motion.div>

          {/* Developer */}

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              delay: 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute lg:left-[48%] md:left-[73%] xl:-top-48 left-[60%] lg:-top-40 md:-top-20  top-[-15px]  flex flex-col items-center text-center"
          >
            <Image
              src="https://randomuser.me/api/portraits/women/3.jpg"
              width={27}
              height={27}
              className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
              alt="Developer"
            />
            <div className="bg-[#F1F1F1] text-black px-2 py-1 md:text-sm text-[9px] shadow mt-2 relative">
              {/* Aeroplane Arrow */}
              <Image
                src="/images/Vector 2.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="absolute -top-3 -left-2 -rotate-12"
              />
              Manager
            </div>
          </motion.div>

          {/* Marketer Left */}

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              delay: 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute lg:right-96 md:right-[33rem]  xl:-top-10  lg:-top-8 md:top-0  custom553:top-[-15px] custom553:right-[22rem]  flex flex-col items-center text-center top-[1rem] "
          >
            <div className="bg-[#F1F1F1] text-black px-2 py-1 md:text-sm text-[9px] shadow mb-2 relative">
              <Image
                src="/images/Vector 2.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="absolute -top-3 -left-2 -rotate-12"
              />
              Marketer
            </div>
            <Image
              src="https://randomuser.me/api/portraits/women/5.jpg"
              width={27}
              height={27}
              className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
              alt="Marketer"
            />
          </motion.div>

          {/* Marketer Right */}

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              delay: 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute md:right-[12%] right-[12px] md:-top-32 top-[-4rem] flex flex-col items-center text-center"
          >
            <div className="bg-[#F1F1F1] text-black md:px-2 lg:py-1 md:text-sm text-[9px]  shadow mb-2 relative">
              <Image
                src="/images/Vector 2.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="absolute -top-3 -left-2 -rotate-12"
              />
              Marketer
            </div>
            <Image
              src="https://randomuser.me/api/portraits/women/6.jpg"
              width={27}
              height={27}
              className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
              alt="Marketer"
            />
          </motion.div>
        </div>
        <div className="relative z-20 w-full flex items-center justify-end">
          {/* Centered Home/About us */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:mt-7 mt-28 text-[24px] text-primary font-poppins font-[500]  whitespace-nowrap">
            Home/About us
          </div>
        </div>

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

        <div className="top-20 relative w-[40px] h-[40px]  left-[90%] md:hidden">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className="rounded-full border-[1px] border-primary shadow object-cover"
            alt="Manager"
            fill
          />
        </div>
      </section>
      {/* About Company */}
      <section className="bg-[#F2F3F4]" ref={ref}>
        <div className=" pt-8 pb-3 px-6 md:px-20 lg:px-[95px] flex flex-col lg:flex-row items-center text-center gap-12 xl:container xl:mx-auto">
          {/* Left Content */}
          <motion.div
            className="flex-1 relative md:items-start md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={leftControls}
          >
            <div className="relative inline-block">
              <span className="absolute md:-top-6 -left-5 md:left-0 transform scale-100 md:text-[70px] text-[35px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
                About Us
              </span>
              <h3 className="relative z-10 text-primary font-semibold text-xl md:text-2xl ml-1">
                About Us
              </h3>
            </div>

            <div className="relative z-10">
              <h2 className="md:text-[29px] text-[24px] font-[600] font-poppins text-gray-900 mb-3 leading-snug mt-8">
                We’re Your Digital Technological Partners
              </h2>
              <p className="text-[#5F5F5F] md:text-[16px] text-[14px]">
                Since 2018, we’ve been helping businesses like yours accelerate
                their journey to success, backed by the right transformative
                solutions.
              </p>
              <button
                className="flex items-center gap-2 bg-primary hover:bg-[#01965d] text-white font-[400] py-3 md:px-7 px-16 rounded-[8px] shadow mt-10 
  mx-auto md:mx-0"
              >
                Explore more
              </button>

              <div className=" justify-end  sm:flex hidden">
                <Image
                  src="/images/Ornament 67.svg"
                  alt="ornament 67"
                  width={38}
                  height={69}
                />
              </div>

              <div className="pt-5 md:flex hidden">
                <Image
                  src="/images/Ornament 68.svg"
                  alt="ornament 68"
                  width={45}
                  height={123}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 relative w-fit mt-[-80px] md:flex hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={rightControls}
          >
            <div className="relative">
              <Image
                src="/images/Subtract.svg"
                alt="Team Working"
                width={380}
                height={500}
                className="rounded-lg"
              />

              {/* Fixed Positioned SVG */}
              <div
                className="absolute top-2/3 right-0 -translate-y-1/2 translate-x-1/2 
      bg-primary text-white rounded-xl px-3 w-[99px] h-[85px] shadow-lg border-white flex items-center justify-center"
                style={{ borderWidth: "7px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"
                  />
                </svg>
              </div>
              <div
                className="absolute top-0 left-0 
  bg-primary text-white rounded-[8px] px-3 w-[96px] h-[85px] shadow-lg flex items-center justify-center"
              >
                <p className="font-[500] text-center leading-none">
                  <span className="text-[24px] leading-none">25</span>
                  <br />
                  <span className="font-[400] text-[12px] leading-none">
                    Years of Experience
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  tech stats */}

      <section className="pt-10 lg:pb-5 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto">
        <div className="max-w-6xl flex flex-col md:flex-row  gap-10 xl:gap-20">
          {/* Mobile Heading */}

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-full  rounded-xl overflow-hidden relative h-2/3"
          >
            {/* Image */}
            <Image
              src="/images/image 26.svg"
              alt="Cutting-Edge Technologies"
              width={800}
              height={100}
              className="rounded-xl object-cover w-full h-full"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center text-white text-center sm:text-left px-4 lg:pl-20 bg-black/10">
              <h2 className="xs:text-[30px] text-[24px] sm:text-3xl md:text-[42px] font-bold mb-12">
                We’ve Empowered
              </h2>

              <div className="flex flex-row items-center sm:items-start text-center sm:text-left gap-10">
                {/* Businesses */}
                <div>
                  <h3 className=" text-[20px] xs:text-[24px] sm:text-3xl lg:text-[50px] font-bold">
                    10,000 +
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-[33px] mt-5">
                    Businesses
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-[1px] h-24 bg-white"></div>

                {/* Countries */}
                <div>
                  <h3 className=" text-[20px] xs:text-[24px] sm:text-3xl lg:text-[50px] font-bold">
                    150 +
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-[33px] mt-5">
                    Countries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-4"
          >
            <div className="space-y-4">
              {/* Customer Satisfaction */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 border-b border-b-[#D6D6D6] pb-4"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="md:text-[48px] text-[35px] font-bold"
                >
                  100%
                </motion.span>
                <div>
                  <p className="md:text-[24px] text-[18px] font-[400] flex items-center gap-4">
                    <Relationship
                      className="  bg-primary  w-[34px] h-[34px]  "
                      aria-label="Consultation"
                    />
                    Customer Satisfaction
                  </p>
                </div>
              </motion.div>
              {/* Customers Served */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 border-b border-b-[#D6D6D6] pb-8"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="md:text-[48px] text-[35px] font-bold text-gray-900"
                >
                  95%
                </motion.span>
                <div>
                  <p className="md:text-[24px] text-[18px] font-[400] flex items-center gap-4">
                    <Reputaion
                      className=" w-[34px] h-[34px]  bg-primary     p-[1px]"
                      aria-label="Consultation"
                    />
                    Commitment to Quality
                  </p>
                </div>
              </motion.div>

              {/* Customer Satisfaction */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 border-b border-b-[#D6D6D6] pb-4"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="md:text-[48px] text-[35px] font-bold"
                >
                  95%
                </motion.span>
                <div>
                  <p className="md:text-[24px] text-[18px] font-[400] flex items-center gap-4">
                    <Support
                      className=" w-[34px] h-[34px]  bg-primary     p-[2px]"
                      aria-label="Consultation"
                    />
                    Seamless Support
                  </p>
                </div>
              </motion.div>
              {/* Customer Satisfaction */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 border-b border-b-[#D6D6D6] pb-4"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="md:text-[48px] text-[35px] font-bold"
                >
                  95%
                </motion.span>
                <div>
                  <p className="md:text-[24px] text-[18px] font-[400] flex items-center gap-4">
                    <CustomerService1
                      className=" w-[34px] h-[34px]  bg-primary     p-[2px]"
                      aria-label="Consultation"
                    />
                    Best in Class Services
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* process  */}

      <motion.section
        className="py-4 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="xl:container xl:mx-auto ">
          {/* Section Header */}
          <h4 className="text-primary text-[24px] font-[500] mb-4">
            Our Process
          </h4>
          <h2 className="text-2xl md:text-[28px] font-[600] mb-3 font-poppins">
            Customized Solutions That Make Your Business Stand Out
          </h2>
          <p className="text-[16px] mb-9">
            We craft tailored software solutions that align with your goals and
            give your business a competitive edge.
          </p>

          {/* Process Cards */}
          <div className="grid grid-cols-1 custom871:grid-cols-3 gap-6 text-center">
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              className="border border-[#D6D6D6] px-4 custom1136:px-8 pb-8 pt-4 hover:shadow-lg transition bg-white shadow-[0px_0px_4px_0px_#00B47040]"
            >
              <Image
                src="/images/strategy 1.svg"
                alt="Strategy"
                width={110}
                height={110}
                className="mx-auto mb-6"
              />
              <h3 className="text-[30px] custom1136:text-[36px] font-[400] mb-4">
                Strategy
              </h3>
              <p>
                At Raybit Technologies, we turn visions into reality with
                complete success roadmaps.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              className="border border-[#D6D6D6] px-4 custom1136:px-8 pb-8 pt-4 hover:shadow-lg transition bg-white shadow-[0px_0px_4px_0px_#00B47040]"
            >
              <Image
                src="/images/coding 1.svg"
                alt="Development"
                width={110}
                height={110}
                className="mx-auto mb-6"
              />
              <h3 className="text-[30px] custom1136:text-[36px] font-[400] mb-4">
                Development
              </h3>
              <p>
                Driven by Agile, we craft smart, adaptable solutions at the
                speed of innovation.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              className="border border-[#D6D6D6]  px-4 custom1136:px-8 pb-8 pt-4 hover:shadow-lg transition bg-white shadow-[0px_0px_4px_0px_#00B47040]"
            >
              <Image
                src="/images/strategy 1.svg"
                alt="Production"
                width={110}
                height={110}
                className="mx-auto mb-6"
              />
              <h3 className="text-[30px] custom1136:text-[36px] font-[400] mb-4">
                Production
              </h3>
              <p>
                We ensure seamless performance through rigorous testing and
                quality assurance.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* meeting */}
      <motion.section
        className="py-10 text-center md:px-20 lg:px-[95px] px-6 xl:container xl:mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-3xl lg:text-[48px] font-bold text-primary mb-7 font-poppins md:leading-3_9"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          10,000+ businesses trust us. <br /> Schedule your meeting today.
        </motion.h1>

        <motion.button
          whileHover={{ y: -4 }}
          className="bg-primary text-white px-6 py-3 rounded-[8px] mb-12"
          transition={{ type: "spring", stiffness: 200 }}
          onClick={handleClick}
        >
          Schedule a Meeting
        </motion.button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-[#D6D6D6] rounded-lg p-6 pt-9 hover:shadow-lg transition duration-300 "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <h4 className="font-[500] mb-4 text-[23px] font-poppins">
                {service.title}
              </h4>
              <div className="flex justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Appoinment */}
      <section className="py-16 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto  ">
        <AppointmentPage />
      </section>
      {/* clients */}
      <section className=" px-6 md:px-20 xl:px-[95px] xl:container xl:mx-auto">
        {" "}
        <ClientsPartners />
      </section>
    </>
  );
}
