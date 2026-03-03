"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Whatsapp from "../components/Whatsapp";
export default function TermsConditions() {
  const termsData = [
    {
      title: "Definitions",
      points: [
        '"Raybit Technologies", "we", "us" or "our" refers to Raybit Technologies Pvt. Ltd., a software company based in Jammu and Kashmir, India.',
        '"Website" refers to our official website: www.raybittechnologies.com.',
        '"Services" refer to the software solutions and other services provided by Raybit Technologies.',
        '"Software" refers to the proprietary software products developed and sold by Raybit Technologies.',
      ],
    },
    {
      title: "Acceptance of Terms",
      points: [
        "By accessing our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website and services.",
      ],
    },
    {
      title: "Use of the Website",
      points: [
        "1.1 Eligibility: You must be at least 18 years old to use our website and services. By using our website, you confirm that you are of legal age to form a binding contract.",
        "1.2 User Account: In order to access certain features of our website, you may need to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        "1.3 Prohibited Activities: When using our website and services, you agree not to engage in any activities that are unlawful, infringing, harmful, or violate these Terms and Conditions.",
      ],
    },
    {
      title: "Software Sales",
      points: [
        "4.1 Product Descriptions: We strive to provide accurate and up-to-date information about our software products. However, we do not warrant that the descriptions or information provided on our website are complete, error-free, or current.",
        "4.2 Pricing and Payment: The prices of our software products are displayed on our website. We reserve the right to modify the prices at any time without prior notice. Payments for our software products shall be made through the designated payment methods provided on our website.",
        "4.3 License: Upon successful purchase of our software products, we grant you a non-exclusive, non-transferable license to use the software for the specified purposes and according to the terms stated in the accompanying license agreement.",
      ],
    },
    {
      title: "Intellectual Property",
      points: [
        "5.1 Ownership: Raybit Technologies retains all rights, title, and interest in and to the website, services, and software products, including all intellectual property rights.",
        "5.2 Copyright: The content, materials, and graphics on our website are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content from our website without obtaining prior written consent from Raybit Technologies.",
      ],
    },
    {
      title: "Limitation of Liability",
      points: [
        '6.1 Disclaimer: The information, software, and services provided on our website are provided "as is" and without warranties of any kind. Raybit Technologies disclaims all warranties, whether expressed or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        "6.2 Limitation of Liability: In no event shall Raybit Technologies be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use or inability to use our website, services, or software products.",
      ],
    },
    {
      title: "Indemnification",
      points: [
        "7.1 You agree to indemnify, defend, and hold Raybit Technologies and its officers, directors, employees, and agents harmless from any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorney fees, arising out of or in connection with your use of our website and services.",
      ],
    },
  ];

  const text = "Terms & Conditions";

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
              className="text-[45px] sm:text-[64px] md:text-[64px] lg:text-[84px] xl:text-[110px] font-[500] text-black tracking-tight font-poppins"
            >
              {text.split("").map((char, index) => {
                // Keep line break for the responsive br
                if (char === " " && index === 6) {
                  return <br key={index} className="md:hidden block" />;
                }
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
            className="absolute md:left-[-57px] lg:left-[7%] sm:bottom-[25%] sm:top-[-127px] sm:left-[30px] top-[-102px]  lg:top-[-163px] xl:top-[-191px] flex flex-col items-center text-center"
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
            className="absolute lg:left-[28%] md:left-[40%] xl:-top-40 lg:-top-32 md:-top-32 flex flex-col items-center text-center sm:top-[-123px] custom473:top-[-97px] custom473:left-[55%] left-[55%] top-[-164px] "
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
            className="absolute lg:left-[48%] md:left-[58%] xl:-top-48 left-[60%] lg:-top-40 md:-top-2  top-[-15px]  flex flex-col items-center text-center"
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
                src="/images/Vector 2.svg" // Update this to your file path
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
            className="absolute lg:right-96 md:right-[30rem]  xl:-top-10  lg:-top-8 md:top-0  top-[-15px] custom553:right-[22rem]  flex flex-col items-center text-center top-[1rem] "
          >
            <div className="bg-[#F1F1F1] text-black px-2 py-1 md:text-sm text-[9px] shadow mb-2 relative">
              <Image
                src="/images/Vector 2.svg" // Update this to your file path
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
            className="absolute sm:top-[-9px] md:right-[12%] lg:right-[85px] xl:top-[-178px] right-[12px] md:-top-32 top-[-4rem] flex flex-col items-center text-center"
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

      {/* terms and conditions  */}

      <section className="flex justify-center items-start pt-2 pb-20 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins">
        <div className="w-full space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-[400] font-poppins"
          >
            Terms and Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-sm"
          >
            Welcome to Raybit Technologies! These Terms and Conditions outline
            the rules and regulations for the use of our website and services.
            By accessing and using our website and purchasing our software
            products, you agree to comply with these terms. Please read them
            carefully before proceeding.
          </motion.p>

          {/* Sections */}
          {termsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h2 className="font-[400] text-[16px]">{`${idx + 1}. ${
                section.title
              }`}</h2>

              {section.points.map((point, pIdx) => (
                <motion.p
                  key={pIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                  className="text-[#5F5F5F] text-sm pl-4"
                >
                  {point}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
