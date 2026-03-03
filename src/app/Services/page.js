"use client";

import Image from "next/image";
import AppointmentPage from "../components/Appoinment";

import { motion } from "framer-motion";
import Link from "next/link";
import Image27 from "../../assets/images/image 27.svg";
import Image28 from "../../assets/images/image 27one.svg";
import Image29 from "../../assets/images/image 27two.svg";
import Whatsapp from "../components/Whatsapp";
export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
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

  const services = [
    {
      image: Image27,
      title: "Business Consultation",
      description:
        "Business consultation provides expert guidance and tailored solutions to help companies grow, overcome challenges, and boost performance.",
      link: "Services/Consultation",
    },
    {
      image: Image28,
      title: "Software Development",
      description:
        "Custom software solutions designed and developed to automate processes, improve efficiency, and drive innovation.",
      link: "Services/SoftwareDev",
    },
    {
      image: Image29,
      title: "Mobile App Development",
      description:
        "End-to-end mobile app design and development services to bring your ideas to life on iOS and Android platforms.",
      link: "Services/MobileApp",
    },
    {
      image: Image27,
      title: "ERP Solution",
      description:
        "Integrated ERP systems to streamline operations, manage resources, and enhance business productivity.",
      link: "Services/ERP",
    },
    {
      image: Image28,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence, generate leads, and drive sales.",
      link: "Services/DigitalMarketing",
    },
    {
      image: Image29,
      title: "Web Design",
      description:
        "Creative and responsive web design services to craft engaging websites that attract and convert visitors.",
      link: "Services/WebDesign",
    },
  ];

  const text = "Services";

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
      <section className="w-full px-6 md:px-20 lg:px-0 lg:pr-10  pb-28 pt-10  md:pb-12 md:pt-10 bg-[#FBFCFE] relative flex flex-col justify-center overflow-hidden xl:container xl:mx-auto">
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
          {/* Each avatar wrapped in motion.div */}

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
            className="absolute lg:left-[12%] sm:bottom-[25%] top-[-103px] flex flex-col items-center text-center"
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
            className="absolute lg:left-[28%] md:left-[40%] xl:-top-40 lg:-top-32 md:-top-32 flex flex-col items-center text-center sm:top-[-123px] top-[-96px] left-[55%]"
          >
            <div className="bg-primary text-white px-2 py-1 md:text-sm text-[9px] shadow mb-2 tag-arrow relative">
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
            className="absolute lg:left-[48%] md:left-[73%] xl:-top-48 left-[60%] lg:-top-40 md:-top-20 top-[-15px] flex flex-col items-center text-center"
          >
            <Image
              src="https://randomuser.me/api/portraits/women/3.jpg"
              width={27}
              height={27}
              className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
              alt="Developer"
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
            className="absolute lg:right-96 md:right-[33rem] xl:-top-10 lg:-top-8 md:top-0 custom553:top-[-15px] custom553:right-[22rem] flex flex-col items-center text-center top-[1rem]"
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
            <div className="bg-[#F1F1F1] text-black md:px-2 lg:py-1 md:text-sm text-[9px] shadow mb-2 relative">
              <Image
                src="/images/Vector 2.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="absolute -top-3 -left-2 -rotate-12"
              />
              Marketers
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
            Home/Services
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

      <section className="bg-[#F2F3F4]">
        <div className="xl:container xl:mx-auto py-10 px-6 md:px-20 lg:px-[95px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-[16px] shadow hover:shadow-lg transition cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className="w-full h-[180px] relative rounded overflow-hidden mb-4">
                  {/* <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[16px]"
                  /> */}
                  <service.image
                    className="w-full h-full rounded-[16px] object-cover"
                    aria-label={service.title}
                  />
                </div>
                <h3 className="text-[24px] font-[500] mb-2 pt-4 font-poppins text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[16px] mb-4 text-center">
                  {service.description}
                </p>
                {/* Only Button Clickable */}
                <Link href={service.link}>
                  <button className="bg-primary text-white text-sm py-2 px-4 rounded-[8px] block mx-auto">
                    Read More
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto  ">
        <AppointmentPage />
      </section>
    </>
  );
}
