"use client";
// import Navbar from "./components/Navbar";

import Image from "next/image";
import ServicesSection from "../components/Services";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AppointmentPage from "../components/Appoinment";
import TestimonialsSection from "../components/Testimonials";
import ClientsPartners from "../components/Clients";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import BookAppointment from "../components/BookAppoinment";
import Whatsapp from "../components/Whatsapp";
import Modal from "../components/Modal";
import { useRouter } from "next/navigation";
// import Footer from "./components/Footer";
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-34px] top-1/2 -translate-y-1/2 z-50 w-9 h-9 border border-black rounded-full flex items-center justify-center cursor-pointer shadow"
    onClick={onClick}
  >
    <ChevronLeft className="text-black w-5 h-5" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-34px] top-1/2 -translate-y-1/2 z-50 w-9 h-9 border  border-black rounded-full flex items-center justify-center cursor-pointer shadow"
    onClick={onClick}
  >
    <ChevronRight className="text-black w-5 h-5" />
  </div>
);

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
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
  const progressBars = [
    { label: "Business Security", value: 95 },
    { label: "Cloud Backup", value: 80 },
    { label: "Network Protection", value: 72 },
  ];
  const products = [
    { title: "Logistics", image: "/images/image 17.svg" },
    { title: "School Management System", image: "/images/image 17 (1).svg" },
    { title: "Taxi and Transportation", image: "/images/image 17 (2).svg" },
    { title: "Operation Management", image: "/images/image 17 (3).svg" },
  ];
  const items = [
    {
      title: "Specialized Team",
      description:
        "We have the specialised professionals to develop effective strategies and deliver desired results.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Our team leverages cutting-edge technologies to craft unique solutions for your business.",
    },
    {
      title: "Reliable Support",
      description:
        "Count on us for round-the-clock support and dedicated assistance when you need it most.",
    },
  ];

  const projects = [
    {
      title: "Mobile Application Projects",
      image: "/images/raybit 1.jpg",
      para: "Mobile app development is the creation of apps for smartphones and tablets.",
    },
    {
      title: "Mobile Application Projects",
      image: "/images/raybit 2.jpg",
      para: "Mobile app development is the creation of apps for smartphones and tablets.",
    },
    {
      title: "Mobile Application Projects",
      image: "/images/raybit 3.jpg",
      para: "Mobile app development is the creation of apps for smartphones and tablets.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const text = "Raybit  Technologies";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const list = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* <Navbar /> */}

      <section className="w-full px-6 md:px-20 lg:pl-[80px] lg:pr-10 md:pb-12 pt-10 bg-[#FBFCFE] relative  isolate xl:container xl:mx-auto  flex flex-col justify-center md:block ">
        {/* Vertical background lines */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0  justify-between px-2 md:px-4 lg:px-[80px] pointer-events-none overflow-hidden md:flex hidden">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-px bg-gray-300/40 h-full self-stretch" />
          ))}
        </div>

        {/* Heading and avatars */}
        <div className="relative w-full flex justify-center text-center z-20 lg:ml-[-20px] ">
          {/* Text + Avatars wrapper with tight width */}
          <div className="relative md:max-w-max  ">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className=" text-[45px] sm:text-[64px] md:text-[64px] lg:text-[84px] xl:text-[113px] font-[500] text-black tracking-tight font-poppins "
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

            {/* Avatars inside text width */}

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
              className="flex absolute left-4 md:top-[70%] top-[90%] flex-col items-center"
            >
              <Image
                src="https://randomuser.me/api/portraits/men/1.jpg"
                width={28}
                height={28}
                className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
                alt="Manager"
              />
              <span className="text-xs mt-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded relative">
                <Image
                  src="/images/Vector 2.svg" // Update this to your file path
                  alt="Arrow"
                  width={12}
                  height={12}
                  className="absolute -top-3 -left-2 -rotate-12"
                />
                Manager
              </span>
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
              className="flex absolute left-[10%] -top-4 flex-col items-center"
            >
              <span className="text-xs mb-1 bg-primary text-white px-2 py-0.5 shadow rounded relative">
                <Image
                  src="/images/Vector 2.svg" // Update this to your file path
                  alt="Arrow"
                  width={12}
                  height={12}
                  className="absolute -top-3 -left-2 -rotate-12"
                />
                Designer
              </span>
              <Image
                src="https://randomuser.me/api/portraits/women/2.jpg"
                width={28}
                height={28}
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
              className="flex absolute left-[40%] md:top-[91%] top-[83%] flex-col items-center"
            >
              <Image
                src="https://randomuser.me/api/portraits/women/3.jpg"
                width={28}
                height={28}
                className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
                alt="Developer"
              />
              <span className="text-xs mt-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded relative">
                <Image
                  src="/images/Vector 2.svg" // Update this to your file path
                  alt="Arrow"
                  width={12}
                  height={12}
                  className="absolute -top-3 -left-2 -rotate-12"
                />
                Developer
              </span>
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
              className="flex absolute left-[65%] md:top-1 -top-7 flex-col items-center"
            >
              <span className="text-xs mb-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded relative">
                <Image
                  src="/images/Vector 2.svg" // Update this to your file path
                  alt="Arrow"
                  width={12}
                  height={12}
                  className="absolute -top-3 -left-2 -rotate-12"
                />
                Marketer
              </span>
              <Image
                src="https://randomuser.me/api/portraits/women/5.jpg"
                width={28}
                height={28}
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
              className="flex absolute lg:-right-6 md:-right-12  -right-6 md:top-3 top-8 flex-col items-center"
            >
              <span className="text-xs mb-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded relative">
                <Image
                  src="/images/Vector 2.svg" // Update this to your file path
                  alt="Arrow"
                  width={12}
                  height={12}
                  className="absolute -top-3 -left-2 -rotate-12"
                />
                Marketer
              </span>
              <Image
                src="https://randomuser.me/api/portraits/women/6.jpg"
                width={28}
                height={28}
                className="rounded-full border-[1px] border-primary shadow w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]"
                alt="Marketer"
              />
            </motion.div>
          </div>

          {/* Right Side Boxes for Mobile */}
          <div className="flex md:hidden flex-col gap-2 absolute top-1/2 right-[-20px] -translate-y-1/2">
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
        </div>

        {/* Lower Section - Description + CTA */}
        <div className=" relative flex flex-col md:flex-row sm:items-start sm:justify-between mt-20 z-20  items-center justify-center text-center md:text-left">
          {/* Left Text Block */}
          <div className="relative w-full md:w-1/2  md:ml-3">
            {/* Background Image Behind Text */}
            <Image
              src="/images/image 23.svg"
              alt="Raybit Technologies"
              width={300}
              height={300}
              className="absolute md:-top-12 -top-60 md:right-0 right-16 z-0 opacity-80 pointer-events-none select-none "
            />

            {/* Heading in Foreground */}
            <motion.h2
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1],
                type: "spring",
                stiffness: 70,
              }}
              className="relative z-10 md:text-[42px] font-[600] text-black font-poppins text-[24px]"
            >
              Your premier destination for top notch{" "}
              <span className="text-primary">IT- </span>
              <br className="md:block hidden" />
              <span className="text-primary">Solutions</span>
            </motion.h2>
          </div>

          {/* Right Description Block */}
          <div className="w-full md:w-1/2  lg:mt-4  text-black text-sm  font-poppins lg:ml-8 lg:mr-7">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2, // slight delay if you want it after the headline
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="md:text-[18px] text-[14px] font-poppins leading-[28px] mb-4"
            >
              <span className="font-[400]">
                Raybit Technologies empowers businesses to
              </span>{" "}
              <span className="font-[500]">
                Innovate, Automate, and Elevate.
              </span>
            </motion.p>

            <motion.ul
              variants={list}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="font-[400] text-[15px] space-y-4 md:block hidden"
            >
              {[
                {
                  title: "Custom Software & App Development",
                  desc: " tailored to your unique goals",
                },
                {
                  title: "AI & Automation Tools",
                  desc: " that enhance efficiency and decision-making",
                },
                {
                  title: "Robust Security Frameworks",
                  desc: " with blockchain-grade data protection",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-start gap-2"
                >
                  <span className="w-[15px] h-[15px] flex items-center justify-center rounded-full border border-[#000000] text-black text-[11px] mt-[3px]">
                    ✓
                  </span>
                  <span>
                    {item.title}
                    <span className="text-[#5F5F5F]">{item.desc}</span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="-top-8 relative w-[40px] h-[40px]  left-[90%] md:hidden">
              <Image
                src="https://randomuser.me/api/portraits/men/1.jpg"
                className="rounded-full border-[1px] border-primary shadow object-cover"
                alt="Manager"
                fill
              />
            </div>
            <div className="flex justify-between mt-10 gap-4 flex-wrap">
              {/* Build Button */}

              <div className="md:text-left text-center w-full md:w-auto   ">
                <div className="md:text-left text-center w-full md:w-auto -mt-16 md:mt-0 ">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-primary hover:bg-[#01965d] text-white font-medium py-4 md:px-4 md:rounded-[8px] rounded-[4px] shadow px-6"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Build Your Success Story
                  </motion.button>
                </div>

                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                >
                  <BookAppointment />
                </Modal>
              </div>

              {/* Raybit Agent Button */}
            </div>
          </div>
        </div>

        {/* Icons on Right Side - WhatsApp & Call */}
        <Whatsapp />
      </section>

      {/* About Company */}
      <section className="md:bg-[#F2F3F4] " ref={ref}>
        <div className="md:py-16 py-12 px-6 md:px-20 lg:px-[95px] flex flex-col lg:flex-row items-center text-center gap-12 xl:container xl:mx-auto">
          {/* Left Content */}
          <motion.div
            className="flex-1 relative md:items-start md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={leftControls}
          >
            <div className="relative inline-block">
              <span className="absolute md:-top-6 left-0 transform scale-100 md:text-[70px] text-[35px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
                About Us
              </span>
              <h3 className="relative z-10 text-primary font-semibold text-xl md:text-2xl ml-1">
                About Our Company
              </h3>
            </div>

            <div className="relative z-10">
              <h2 className="text-[29px] font-[600] font-poppins text-gray-900 mb-3 leading-snug mt-8">
                Building Digital Futures Together with Innovation and Trust
              </h2>
              <p className="text-[#5F5F5F] text-[16px]">
                We believe genuine growth is achieved through a well-rounded
                approach that integrates marketing, branding, customer service,
                and innovation. With this philosophy, we provide a wide array of
                services aimed at helping our clients streamline processes,
                boost performance, and reach their objectives effectively.
              </p>

              <div className="mt-10 items-end justify-between space-x-2 pt-5 md:flex hidden">
                <Image
                  src="/images/Ornament 68.svg"
                  alt="ornament 68"
                  width={70}
                  height={123}
                />
                <Image
                  src="/images/Ornament 67.svg"
                  alt="ornament 67"
                  width={38}
                  height={69}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 relative w-fit mt-[-60px] md:flex hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={rightControls}
          >
            <Image
              src="/images/Group 77.svg"
              alt="Team Working"
              width={380}
              height={500}
              className="rounded-lg"
            />

            <div
              className="absolute right-0 2xl:right-20 top-1/2 -translate-y-1/2 bg-primary text-white rounded-xl px-3 pb-3 w-[221px] shadow-lg border-white"
              style={{ borderWidth: "7px" }}
            >
              <div className="flex flex-col gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  style={{ transform: "rotate(40.88deg)" }}
                >
                  <path
                    fill="currentColor"
                    d="M6.625 20.142q-.404.162-.755-.08t-.35-.671V15.46q0-.404.189-.768q.189-.363.537-.58l1.196-.783q.175 1.736.451 3.019t.909 2.927zm3.56-1.334q-.293 0-.485-.196t-.298-.464q-.54-1.532-.818-2.832q-.276-1.299-.276-2.93q0-2.434.75-4.49t2.36-3.729q.11-.13.266-.183q.155-.053.316-.053t.316.053t.267.183q1.61 1.672 2.36 3.728t.75 4.492q0 1.655-.268 2.932t-.827 2.829q-.106.268-.298.464t-.484.196zM12 12.5q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 9.5t-1.066.434Q10.5 10.367 10.5 11t.434 1.066T12 12.5m5.356 7.662l-2.177-.868q.633-1.644.909-2.936t.45-3.03l1.197.803q.348.217.537.58q.19.364.19.768v3.93q0 .43-.351.672t-.755.08"
                  />
                </svg>

                <div className="flex flex-row gap-2 items-center justify-center pb-3">
                  <h2 className="text-4xl font-bold">10</h2>
                  <p className="text-sm font-[400]">
                    Years Of <br /> Experience
                  </p>
                </div>
              </div>

              <hr className="border-white/40 my-4" />

              <p className="text-[12px] leading-relaxed font-[400] pb-6">
                We recognize our primary asset is people. We work with our
                clients as a team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* services */}

      <section className="md:py-20  pb-10 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto   ">
        <ServicesSection />
      </section>

      {/* why choose us */}
      <section className="pb-5 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto">
        <div className="px-4 flex flex-col lg:flex-row xl:gap-52 md:gap-9 items-center">
          {/* Image with overlay cards */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex-1 lg:mt-[-90px] md:mb-32 lg:mb-0 lg:block hidden"
          >
            <Image
              src="/images/image 13.svg"
              alt="Team"
              className=""
              width={390}
              height={10}
            />

            {/* Overlay Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
              className="absolute top-20 xl:left-52 sm:left-40 lg:left-0 bg-primary text-white px-3 pb-16 pt-8 rounded-lg space-y-8 shadow-lg max-w-[350px]"
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-[77px] h-[77px] bg-white text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      className="block"
                    >
                      <path
                        fill="currentColor"
                        d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L6 16v.086a1.5 1.5 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16q-.264.001-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                      />
                    </svg>
                  </div>
                  <div className="w-[257px]">
                    <h4 className="font-semibold text-[24px]">{item.title}</h4>
                    <p className="text-[12px] font-[400]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 md:mt-30 lg:mt-0"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative inline-block w-full text-center md:text-left"
            >
              <span className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:-top-6 top-0 transform scale-100 md:text-[70px] text-[30px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
                IT <span className="md:hidden">Solution</span>
              </span>
              <h4 className="relative text-primary text-[24px] font-semibold mb-2 z-10">
                Why Choose Us
              </h4>
            </motion.div>

            {/* Main Heading and Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative inline-block text-center md:text-left"
            >
              <span className="absolute lg:top-9 left-0 transform scale-100 text-[70px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text hidden md:block">
                Solution
              </span>
              <h4 className="relative text-[24px] md:text-[28px] font-[600] mb-10 mt-2 font-poppins leading-10">
                Building a Smarter Future with IT solution
              </h4>
              <p className="text-gray-600 mb-6">
                In today’s rapidly changing digital world, adopting effective IT
                solutions has become essential for driving business growth.
                Technology is crucial in optimizing processes, boosting
                productivity, and empowering businesses to achieve their maximum
                potential.
              </p>
            </motion.div>

            {/* Progress Bars */}
            {progressBars.map((bar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                  <span>{bar.label}</span>
                  <span>{bar.value}%</span>
                </div>
                <div className="w-full border border-[#D6D6D6] h-3 rounded-[4px] bg-white overflow-hidden px-[3px] py-[3px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.3 * (i + 1),
                    }}
                    className="bg-primary h-full rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full flex justify-center md:justify-start"
            >
              {/* <button className="mt-6 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-primary hover:border transition-all">
                Get a Service Now
              </button> */}
              <div className="  ">
                <div className="">
                  <button
                    className="mt-6 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-primary hover:border transition-all"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get a Service Now
                  </button>
                </div>

                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                >
                  <BookAppointment />
                </Modal>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Our products */}
      <section className="relative pt-16 pb-10 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto  ">
        {/* Watermark Background Title */}

        <div className="relative z-10 space-y-6">
          {/* Tag */}
          {/* Title Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center text-center flex-row md:items-center md:text-left text-primary font-[500] font-poppins mb-9 gap-2 justify-center md:justify-start"
          >
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
              {/* Outlined 'Our Products' */}
              <span className="absolute md:-top-6 -top-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 transform md:text-[70px] text-[33px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
                Our Products
              </span>

              {/* Visible Heading */}
              <h3 className="relative sm:text-[24px] text-[21px] z-10 -mt-2">
                Ready-to-Use Products
              </h3>
            </div>
          </motion.div>

          {/* Heading and Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="md:flex hidden flex-col md:flex-row items-center gap-6 justify-between"
          >
            {/* Heading */}
            <h2
              className="text-black font-[500] text-2xl sm:text-3xl lg:text-[44px] md:text-[37px] font-poppins"
              style={{ lineHeight: "3.9rem" }}
            >
              From Quick Launches to Scalable Solutions, We Deliver Pre-Built
              Tools That Fit Every Business Need
            </h2>

            {/* Image */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="md:w-[240px] justify-center lg:flex hidden"
            >
              <Image
                src="/images/Group 5.svg"
                alt="Business Tools Illustration"
                width={100}
                height={100}
                className="object-contain md:-mt-40"
              />
            </motion.div>
          </motion.div>

          {/* Container with arrows inside */}
          <div className="relative px-4 py-10">
            <Slider {...settings}>
              {products.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="rounded-lg shadow-[0px_0px_4px_0px_#00B47040] border h-[240px] flex flex-col "
                    style={{ borderColor: "#D6D6D6" }}
                  >
                    <div className="flex-1 flex flex-col items-center justify-center border-b border-[#D6D6D6] px-4 py-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={90}
                        className="object-contain"
                      />
                    </div>
                    <div className="h-[80px] flex items-center justify-center px-4">
                      <p className="text-[18px] font-[500] font-poppins text-center">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* Recent work */}
      <section className="pb-10 px-4 md:px-20 lg:px-[95px] xl:container xl:mx-auto   ">
        {/* Top Heading */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
        >
          <div className="text-primary font-[500] font-poppins mb-9 items-center">
            <div className="relative inline-block mb-3 text-center md:text-left w-full">
              {/* Outlined 'Our Projects' */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -top-2 md:-top-6 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 transform scale-100 md:text-[70px] text-[33px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text"
              >
                Our Projects
              </motion.span>

              {/* Visible Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative text-[24px] z-10 -mt-2"
              >
                Our Recent Work
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-between md:items-center items-center gap-6 text-center md:text-left"
            >
              {/* Heading */}
              <h2 className="text-black md:font-[500] font-[600] text-2xl sm:text-3xl lg:text-[44px] md:text-[37px] font-poppins max-w-[900px] md:leading-3_9 leading-10">
                From Innovative Startups to Industry Leaders, We Build Impactful
                Digital Solutions That Drive Real Results
              </h2>

              {/* Image */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-[250px] lg:flex hidden justify-center"
              >
                <Image
                  src="/images/Group 71.svg"
                  alt="Business Tools Illustration"
                  width={100}
                  height={100}
                  className="object-contain -mt-20"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 custom930:grid-cols-3 gap-10  xl:container xl:mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => router.push("/Portfolio")}
              className="relative group overflow-hidden rounded-none  xl:w-[320px] xs:w-[390px] custom1136:w-[300px] custom930:w-[242px] custom1014:w-[250px] w-full
               2xl:w-full transition-transform duration-300 sm:hover:scale-110 hover:scale-95 hover:border hover:border-primary hover:rounded-md mx-auto"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />

              {/* Overlay - fades out on hover */}
              <div className="absolute inset-0 bg-[#1B4B39] bg-opacity-50 group-hover:bg-opacity-0 transition duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-8 border-primary -mt-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#00B470"
                      d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              <p className="absolute bottom-5 left-3  text-white text-[17px] leading-2 font-semibold font-poppins w-44">
                {project.title}
              </p>

              {/* Hover Card */}
              <div className="absolute bottom-5 left-3 right-3 hidden group-hover:flex flex-col gap-1 bg-white border border-[#00B470] md:px-5 custom930:px-1 lg:px-5 px-2 py-4 rounded-md shadow-sm transition duration-300 ">
                <p className="text-[15px]  custom930:text-[10px] lg:text-[15px] font-semibold font-poppins text-[#00B470]">
                  {project.title}
                </p>
                <p className="text-sm custom930:text-[8px] lg:text-sm font-normal font-poppins text-[#5F5F5F]">
                  {project.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appoinment */}
      <section className="py-16 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto  ">
        <AppointmentPage />
      </section>
      {/* Testimonials */}
      <section className=" px-6 md:px-20 xl:px-[95px] xl:container xl:mx-auto ">
        <TestimonialsSection />
      </section>
      <section className=" px-6 md:px-20 xl:px-[95px] xl:container xl:mx-auto ">
        {" "}
        <ClientsPartners />
      </section>

      {/* Footer */}
      {/* <section className="bg-[#FBFCFE] pb-4 px-6 md:px-20 lg:px-[95px]">
        <Footer />
      </section> */}
    </>
  );
}
