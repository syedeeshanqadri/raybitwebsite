"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Whatsapp from "../components/Whatsapp";

export default function PrivacyPolicy() {
  const privacyData = [
    {
      title: "Information We Collect",
      points: [
        "1.1 Personal Information: We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and company information when you request a service or create an account on our website.",
        "1.2 Usage Information: We may automatically collect certain information about your interaction with our website and services, including your IP address, browser type, device information, pages visited, and the referring website.",
      ],
    },
    {
      title: "Use of Information",
      points: [
        "2.1 Provide and Improve Services: We use the information we collect to provide and improve our website and services, respond to your inquiries, fulfill your requests, personalize your experience, and communicate with you about our products and updates.",
        "2.2 Analytics and Performance: We may use the information for analytical purposes to understand user preferences, trends, and to enhance the performance and functionality of our website and services.",
        "2.3 Marketing: We may occasionally send you promotional emails about our products, services, and special offers. You can opt-out of receiving these communications at any time.",
      ],
    },
    {
      title: "Information Sharing",
      points: [
        "3.1 Third-Party Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting business, and delivering services to you. These service providers are bound by confidentiality agreements and are prohibited from using your information for any other purpose.",
        "3.2 Legal Requirements: We may disclose your personal information if required to do so by law or in response to a valid legal request, such as a court order, government inquiry, or to protect our rights, property, or safety.",
      ],
    },
    {
      title: "Data Security",
      points: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Data Retention",
      points: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. We will securely delete or anonymize your personal information when it is no longer needed.",
      ],
    },
    {
      title: "Your Rights",
      points: [
        "You have certain rights regarding your personal information, including the right to access, update, correct, or delete your information. You may also object to the processing of your data or limit certain processing activities. To exercise your rights or if you have any questions or concerns regarding your personal information, please contact us using the information provided below.",
      ],
    },
    {
      title: "Changes to this Privacy Policy",
      points: [
        "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.",
      ],
    },
  ];

  const text = "Privacy Policy";

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
      <section className="w-full px-6 md:px-20 lg:px-0 lg:pr-10  pb-10 pt-10  md:pb-12 md:pt-10 bg-[#FBFCFE] relative flex flex-col justify-center overflow-hidden xl:container xl:mx-auto ">
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
            className="absolute lg:left-[30%] md:left-[40%] xl:-top-44 lg:-top-36 md:-top-32 flex flex-col items-center text-center sm:top-[-123px]  custom473:left-[55%] left-[55%] top-[-164px] "
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
            className="absolute sm:top-[-47px] md:right-[12%] lg:right-[85px] xl:top-[-178px] right-[12px] md:-top-32 top-[-4rem] flex flex-col items-center text-center"
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

        <div className="top-4 relative w-[40px] h-[40px]  left-[90%] md:hidden">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className="rounded-full border-[1px] border-primary shadow object-cover"
            alt="Manager"
            fill
          />
        </div>
      </section>

      <section className="flex justify-center items-start pb-20 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins">
        <div className="w-full space-y-6">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-[400]"
          >
            Privacy Policy
          </motion.h1>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-sm"
          >
            This Privacy Policy document contains types of information that is
            collected and recorded by us and how we use it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 text-sm"
          >
            At Raybit Technologies, we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your
            personal information when you visit our website, use our services,
            or interact with us. By accessing and using our website and
            services, you consent to the practices described in this Privacy
            Policy.
          </motion.p>

          {/* Sections */}
          {privacyData.map((section, idx) => (
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

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <h2 className="font-[400] text-[16px]">8. Contact Us</h2>
            <p className="text-[#5F5F5F] text-sm pl-4">
              If you have any questions, comments, or requests regarding this
              Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="text-[#5F5F5F] text-sm pl-4 space-y-1">
              <p>Raybit Technologies Pvt. Ltd.</p>
              <p>Address: 174, Rajbagh, Srinagar, 190008</p>
              <p>Email: trainings@raybittechnologies.com</p>
              <p>Phone: (+91) 600-5286-335 , (+91) 700-6597-966 </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
