"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import BookAppoinment from "../components/BookAppoinment";
import Whatsapp from "../components/Whatsapp";
export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const text = "Contact Us";

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

  return (
    <>
      <section className="w-full px-6 md:px-20 lg:px-0 lg:pr-10  pb-28 pt-10  md:pb-12 md:pt-10 bg-[#FBFCFE] relative flex flex-col justify-center overflow-hidden xl:container xl:mx-auto ">
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
        <motion.div
          className="relative w-full h-full z-30"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
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
                src="/images/Vector 2.svg"
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
            variants={fadeUp}
            className="absolute lg:left-[28%] md:left-[40%] xl:-top-40 lg:-top-32 md:-top-32 flex flex-col items-center text-center sm:top-[-123px] top-[-97px] left-[55%] "
          >
            <div className="bg-primary text-white px-2 py-1 md:text-sm text-[9px]  shadow mb-2 tag-arrow relative">
              <Image
                src="/images/Vector 2.svg"
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
        </motion.div>
        <div className="relative z-20 w-full flex items-center justify-end">
          {/* Centered Home/About us */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:mt-7 mt-28 text-[24px] text-primary font-poppins font-[500]  whitespace-nowrap">
            Home / Contact Us
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

        <div className="top-24 relative w-[40px] h-[40px]  left-[90%] md:hidden">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className="rounded-full border-[1px] border-primary shadow object-cover"
            alt="Manager"
            fill
          />
        </div>
      </section>

      {/* map */}

      <section className="  pt-10 lg:pb-5 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto ">
        <div className="flex flex-col lg:flex-row justify-center gap-10 bg-[#F2F3F4]  lg:py-12 pt-12 items-stretch min-h-[500px] ">
          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 space-y-7 pl-5 h-full flex flex-col ">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="md:bg-white rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00B470"
                    d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                  />
                </svg>
              </div>

              <div>
                <h2 className="md:text-[27px] text-[16px] font-[400] font-poppins mb-1">
                  Our Office Address:
                </h2>
                <p className="md:text-[15px] text-[12px] text-[#5F5F5F]">
                  AF44 Building, Sector 12 A Chandigarh 160022
                </p>
                <p className="md:text-[15px] text-[12px]  text-[#5F5F5F] mt-1">
                  174, Rajbagh, Srinagar, 190008
                </p>
              </div>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="md:bg-white rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 16 14"
                >
                  <path
                    fill="#00B470"
                    d="M14.5 13h-13C.67 13 0 12.33 0 11.5v-9C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5z"
                  />
                  <path
                    fill="#00B470"
                    d="M8 8.96c-.7 0-1.34-.28-1.82-.79L.93 2.59c-.19-.2-.18-.52.02-.71s.52-.18.71.02l5.25 5.58c.57.61 1.61.61 2.18 0l5.25-5.57c.19-.2.51-.21.71-.02s.21.51.02.71L9.82 8.18c-.48.51-1.12.79-1.82.79Z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="md:text-[27px] text-[16px] font-[400] font-poppins  mb-1">
                  Email Address:
                </h2>
                <p className="md:text-[15px] text-[12px]  text-[#5F5F5F]">
                  Sales:{" "}
                  <a
                    href="mailto:team@raybittechnologies.com"
                    className=" hover:underline"
                  >
                    team@raybittechnologies.com
                  </a>
                </p>
                <p className="md:text-[15px] text-[12px]  text-[#5F5F5F] mt-1">
                  Partnerships:{" "}
                  <a
                    href="mailto:ceo@raybittechnologies.com"
                    className=" hover:underline"
                  >
                    ceo@raybittechnologies.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="md:bg-white rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00B470"
                    d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="md:text-[27px] text-[16px] font-[400] font-poppins mb-1">
                  Phone:
                </h2>
                <p className="md:text-[15px] text-[12px]  text-[#5F5F5F] mt-1">
                  (+91) 600-5286-335 ,
                </p>
                <p className="md:text-[15px] text-[12px]  text-[#5F5F5F] mt-1">
                  (+91) 700-6597-966
                </p>
              </div>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <div className="md:bg-white rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00B470"
                    d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="md:text-[27px] text-[16px] font-[400] font-poppins mb-1">
                  Business Hours
                </h2>
                <p className="md:text-[15px] text-[12px]  text-[#5F5F5F] mt-1">
                  Monday – Friday: 9:00 AM – 6:00 PM
                </p>
                <p className="md:text-[15px] text-[12px]  text-[#5F5F5F] mt-1">
                  Saturday – Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-2/3  overflow-hidden shadow-lg  h-full flex ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d288.2974073949568!2d74.82949062122175!3d34.064260136253964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38e18f0a4fca2cb5%3A0x168bf4d0428a3bdf!2s174%2C%20near%20Hurriyat%20Office%2C%20Kursu%2C%20Rajbagh%2C%20Srinagar%2C%20190008!3m2!1d34.0641983!2d74.82968319999999!5e0!3m2!1sen!2sin!4v1751346023135!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full shadow-lg"
              style={{ minHeight: 500 }}
            />
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="  pt-10 lg:pb-5 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto  mb-12">
        <div className="text-black flex flex-col custom930:flex-row gap-20">
          {/* Left Content with Animation */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center text-center flex-row md:text-left text-primary font-[500] font-poppins mb-2 gap-2 justify-center md:justify-start mt-10 md:mt-0">
              <h3 className="relative text-[24px] z-10 -mt-2">Contact Us</h3>
            </div>

            <h2 className="text-[24px] md:text-[48px] md:font-[500] font-[600] font-poppins md:text-left text-center md:leading-3_9 text-[#212529]">
              Lets Start Creating Together!
            </h2>

            <BookAppoinment />
          </motion.div>

          {/* Right Form with Animation */}
          <motion.div
            className="mt-10 lg:block hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/Frame 26086809 (1).svg"
              alt="img"
              width={440}
              height={200}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
