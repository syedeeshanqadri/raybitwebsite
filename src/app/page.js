"use client";
import Image from "next/image";
import AppointmentPage from "./components/Appoinment";
import TestimonialsSection from "./components/Testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import TechStats from "./components/TechStats";
import Whatsapp from "./components/Whatsapp";
import QuoteModal from "./components/QuoteModal";
import { useEffect, useRef, useState } from "react";
import FrameConsultation from "/public/images/Frame 26086964.svg";
import Consultationframe1 from "/public/images/expertconsultations.jpg";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
//this comment is just for CI/CD trigerring
export default function LandingPage() {
  const logos = [
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
  const features = [
    "Personalized Approach",
    "Detailed Business Diagnosis",
    "Strategic Planning",
    "Innovative Solutions",
    "Guaranteed Merits",
  ];
  const features2 = [
    "Transparent Communication",
    "Dedicated Project Managers",
    "On-Time, On-Budget Delivery",
    "Post-Launch Support",
    "Long-Term Partnership",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1.5 } },
    ],
  };

  const text = "Raybit  Technologies";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionRef = useRef(null);
  const freezeTimer = useRef(null);
  const hasFrozen = useRef(false);

  useEffect(() => {
    const handleFreeze = () => {
      // Freeze scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      freezeTimer.current = setTimeout(() => {
        // Unfreeze after 3 seconds
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        freezeTimer.current = null;
      }, 3000);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.intersectionRatio >= 0.8 &&
            !freezeTimer.current &&
            !hasFrozen.current
          ) {
            handleFreeze();
            hasFrozen.current = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (freezeTimer.current) {
        clearTimeout(freezeTimer.current);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push("/Meetings");
  };

  return (
    <>
      <section className="w-full px-6 md:px-20 lg:pl-[80px] lg:pr-10 md:pb-12 pt-10 bg-[#FBFCFE] relative isolate xl:container xl:mx-auto flex flex-col justify-center">
        <div className="flex flex-col justify-center flex-1">
          <Image
            src="/images/image 30.svg"
            alt="Raybit Background"
            fill
            className="object-cover opacity-20 block lg:hidden pointer-events-none select-none z-0"
          />

          {/* Heading and avatars */}
          <div className="relative w-full flex justify-center text-center z-20 lg:ml-[-20px]">
            <div className="relative md:max-w-max">
              <motion.h1
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-[45px] sm:text-[64px] md:text-[64px] lg:text-[84px] xl:text-[113px] font-[500] text-black tracking-tight font-poppins"
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
                <span className=" relative text-xs mt-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded">
                  <Image
                    src="/images/Vector 2.svg"
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
                <span className=" relative text-xs mb-1 bg-primary text-white px-2 py-0.5 shadow rounded">
                  <Image
                    src="/images/Vector 2.svg"
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
                <span className=" relative text-xs mt-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded">
                  <Image
                    src="/images/Vector 2.svg"
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
                <span className="relative text-xs mb-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded">
                  <Image
                    src="/images/Vector 2.svg"
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
                className="flex absolute lg:-right-6 md:-right-12 -right-6  md:top-3 top-8 flex-col items-center"
              >
                <span className=" relative text-xs mb-1 bg-[#F1F1F1] px-2 py-0.5 shadow rounded">
                  <Image
                    src="/images/Vector 2.svg"
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

            {/* Right Side Boxes for Mobile — unchanged */}
            <div className="flex md:hidden flex-col gap-2 absolute top-1/2 right-[-20px] -translate-y-1/2">
              <a
                href="tel:+916005286335"
                className="w-[7px] h-[37px] bg-[#D6D6D6] block "
                aria-label="Call us"
              />
              <a
                href="https://wa.me/+916005286335"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[7px] h-[37px] bg-primary block "
                aria-label="Chat on WhatsApp"
              />
            </div>
          </div>

          {/* Lower Section */}
          <div className="relative flex flex-col lg:flex-row items-start md:mt-8 sm:mt-9 mt-12 z-20 md:ml-3 text-center md:text-left">
            <div className="relative w-full">
              <Image
                src="/images/image 23.svg"
                alt="Raybit Technologies"
                width={300}
                height={300}
                className="absolute -top-12 right-0 z-0 opacity-80 pointer-events-none select-none md:block hidden"
              />

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
                className="relative z-10 text-[24px] sm:text-[34px] md:text-[42px] font-[600] text-black font-poppins"
              >
                Grow Your Business with Tailored
                <span className="text-primary"> IT Solutions</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 1.4,
                  duration: 0.8,
                  ease: [0.2, 0.8, 0.2, 1],
                  type: "spring",
                  stiffness: 70,
                }}
                className="text-[#5F5F5F] text-[18px] sm:text-[20px] lg:w-[500px] mt-2"
              >
                Custom apps, automation, and digital tools built to scale your
                success.
              </motion.p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-10 justify-center md:justify-start md:mb-0 mb-5">
                {/* ✅ Your 'Get Free Quote' button here */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.6 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-[#01965d] text-white font-medium py-4 sm:px-6 px-16 rounded-[4px] shadow font-poppins"
                >
                  Get Free Quote
                </motion.button>

                {/* ✅ Book a Call button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="flex items-center gap-2 border border-primary text-black font-medium py-4 sm:px-8 px-20 rounded-[4px] shadow font-poppins"
                  onClick={handleClick}
                >
                  Book a Call
                </motion.button>

                {/* ✅ The modal renders ONCE */}
                <QuoteModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>

              <div className="-top-[24rem] relative w-[40px] h-[40px]  left-[90%] md:hidden">
                <Image
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  className="rounded-full border-[1px] border-primary shadow object-cover"
                  alt="Manager"
                  fill
                />
              </div>
            </div>

            {/* Right Image unchanged */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              className="w-full relative"
            >
              <Image
                src="/images/image 30.svg"
                alt="Raybit Technologies"
                width={390}
                height={425}
                className="absolute -top-10 right-10 z-0 pointer-events-none select-none hidden lg:block object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* WhatsApp & Call Icons unchanged */}
        <Whatsapp />
      </section>
      {/* clients */}

      <section className="bg-[#F2F3F4] py-5">
        <div className="pl-6 md:px-10 lg:px-[95px] flex flex-row items-center sm:gap-6 lg:gap-10">
          {/* Left side - Text and icon */}
          <div className="flex items-center sm:gap-4 gap-2 w-full lg:w-[40%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
            >
              <path
                fill="#00B470"
                d="m10.95 12.7l-1.4-1.4q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.1 2.125q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM12 21.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"
              />
            </svg>
            <p className="text-[10px] sm:text-xl md:text-[18px] font-[400] font-poppins leading-snug">
              Clients we have partnered with <br className="hidden lg:block" />
              on successful projects
            </p>
          </div>

          {/* Right side - Logos slider */}
          <div className=" w-1/2 lg:w-[60%]  ">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="sm:w-[80px]  grayscale hover:grayscale-0 transition flex justify-center h-[75px] mt-5"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* consultation */}
      <section className="py-10 px-6 md:px-20 lg:px-[95px]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-7"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-[28px] sm:font-medium font-[600] text-gray-900 font-poppins leading-10 text-center md:text-left"
            >
              Expert Consultation for Strategic Growth and Success
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[#5F5F5F] text-[16px]"
            >
              We pledge to take your current businesses to the next level of
              success with premium consultation tailored to your unique needs
              and goals. Some highlights:
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-1"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-[#5F5F5F] font-[400] font-poppins text-[16px]"
                >
                  <span className="w-[20px] h-[20px] flex items-center justify-center rounded-full border bg-[#008653] text-white text-[11px] mt-[3px]">
                    ✓
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              disabled
              className="mt-4 bg-primary text-white px-6 py-3 rounded-md transition font-poppins font-[500] md:block hidden cursor-not-allowed"
            >
              Book Free Consultation Call
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 md:w-1/2"
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={Consultationframe1}
                alt="Consultation"
                className="w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                disabled
                className="mt-4 bg-primary text-white px-6 py-3 rounded-md transition font-poppins font-[500] md:hidden flex justify-center cursor-not-allowed"
              >
                Book Free Consultation Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-10 px-6 md:px-20 lg:px-[95px]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 md:w-1/2 order-2 lg:order-none md:order-none"
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <FrameConsultation
                className="w-full h-auto"
                aria-label="Consultation"
              />
            </div>

            <div className="flex justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => setIsModalOpen(true)}
                className="mt-4 bg-primary text-white px-12 py-3 rounded-[4px] transition font-poppins font-[500] md:hidden flex justify-center"
              >
                Get a Free Quote
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 "
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-[28px] sm:font-medium font-[600] text-gray-900 font-poppins leading-10  mb-7 text-center md:text-left"
            >
              Focus on Partnership & Reliability- Your Trusted Partner in
              Digital Excellence
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[#5F5F5F] text-[16px] mb-3"
            >
              <p className="mb-2">
                {" "}
                Beyond development, we believe in building partnerships that
                last. Our collaborative approach ensures your brand grows
                sustainably through technology, creativity, and trust.
              </p>

              <span className="text-[#5F5F5F]">Some Highlights</span>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-1"
            >
              {features2.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-[#5F5F5F] font-[400] font-poppins text-[16px]"
                >
                  {" "}
                  <span className="w-[20px] h-[20px] flex items-center justify-center rounded-full border bg-[#008653] text-white text-[11px] mt-[3px]">
                    ✓
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-primary text-white px-12 py-3 rounded-[4px] transition font-poppins font-[500] md:block hidden"
            >
              Get a Free Quote
            </motion.button>
            <QuoteModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </motion.div>
        </div>
      </section>
      {/*  tech stats */}

      <section className="pt-10 lg:pb-5 px-6 md:px-20 lg:px-[95px]">
        <TechStats />
      </section>

      {/* Appoinment */}
      <section
        ref={sectionRef}
        className="py-16 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto"
      >
        <AppointmentPage />
      </section>
      {/* Testimonials */}
      <section className=" pb-12 px-6 md:px-20 xl:px-[95px] xl:container xl:mx-auto ">
        <TestimonialsSection />
      </section>
    </>
  );
}
