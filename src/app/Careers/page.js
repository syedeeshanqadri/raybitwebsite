"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CareerHero from "../components/CareerHero";
const testimonials = [
  {
    name: "Bisma Mushtaq",
    text: "At Raybit Technologies, we're committed to shaping the future of digital talent. I take pride in leading our CSR efforts, focused on creating inclusive pathways to learning, skill development, and career growth for underserved communities.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mehak Amin",
    text: "Raybit has empowered me to grow in ways I never imagined. The work culture here is inspiring and inclusive.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jasia Hassan",
    text: "Every day at Raybit is a new opportunity to challenge myself and collaborate with passionate individuals.",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Basit Bashir",
    text: "I’ve never felt more supported in my career journey. Raybit is truly a people-first company.",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Mateen Masoodi",
    text: "It’s rare to find a workplace that balances innovation, support, and fun — but Raybit nails it.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const recruiters = [
  {
    name: "Bisma Mushtaq",
    role: "Graduates Recruiter",
    image: "/images/recruiter-bg.jpg",
    logo: "/images/raybit-logo.png",
  },
  {
    name: "Bisma Mushtaq",
    role: "Graduates Recruiter",
    image: "/images/recruiter-bg.jpg",
    logo: "/images/raybit-logo.png",
  },
  {
    name: "Mehak Amin",
    role: "Internship Recruiter",
    image: "/images/recruiter-bg.jpg",
    logo: "/images/raybit-logo.png",
  },
  {
    name: "Jasia",
    role: "Internship Recruiter",
    image: "/images/recruiter-bg.jpg",
    logo: "/images/raybit-logo.png",
  },
];
export default function Careers() {
  const sliderRef = React.useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    if (startIndex + visibleCount < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setVisibleCount(3);
        } else if (window.innerWidth < 1136) {
          setVisibleCount(2);
        } else {
          setVisibleCount(3);
        }
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  const hasPrev = startIndex > 0;
  const hasNext = startIndex + 3 < testimonials.length;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <CareerHero />
      {/* search */}
      <section className="pt-6 pb-6 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto bg-[#F2F3F4] font-poppins">
        <div className="w-full">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            {/* Left box: icon + input */}
            <div className="flex items-center pl-4 border-l-[1.5px] border-[#00B470]">
              {/* Search Icon */}
              <div className="pr-3 text-[#00B470]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.76 13.24a6 6 0 1 1 8.49-8.49a6 6 0 0 1-8.49 8.49ZM10.5 13.5l-7.5 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Input Field with underline */}
              <div className="relative md:w-[360px]">
                <input
                  type="text"
                  placeholder="Search for jobs by Skills or Keyword"
                  className="w-full bg-transparent outline-none text-[18px] placeholder:text-black pb-4 md:block hidden"
                />
                <input
                  type="text"
                  placeholder="Search for jobs "
                  className="w-full bg-transparent outline-none text-[18px] placeholder:text-black  md:hidden"
                />
                {/* Underline */}
                <div className="absolute bottom-0  -left-2 h-[1px] w-full bg-[#00B470] md:block hidden" />
              </div>
            </div>

            {/* Search Button */}
            <button className="ml-6 bg-[#00B470] text-white md:px-9 px-3 md:py-3 py-1 rounded-md flex items-center space-x-2">
              <span className="text-[16px]">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="20"
                viewBox="0 0 12 24"
                className="md:block hidden"
              >
                <path
                  fill="currentColor"
                  d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* cards */}
      <section className="px-6 py-12 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins text-center ">
        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[32px] lg:text-[45px] font-[600] md:leading-3_9 lg:px-12"
        >
          <span className="text-[#00B470] ">Explore</span> Careers at{" "}
          <span className="text-[#00B470] ">Raybit Technologies </span>
          <br className="lg:block hidden" />
          Where <span className="text-[#00B470] ">Innovation</span> Meets
          Opportunity 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-7 text-[#5F5F5F] text-sm md:text-[15px] max-w-3xl mx-auto leading-6 "
        >
          Looking to build a future fueled by creativity, growth, and
          cutting-edge technology? At Raybit Technologies, we don’t just build
          digital solutions—we empower people, solve real-world problems, and
          drive progress through innovation. If you’re passionate about tech,
          driven by curiosity, and eager to grow, your journey starts here.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link href="/Careers/Graduates" className="block">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full border border-gray-300 p-6 shadow-[0_0_4px_rgba(0,180,112,0.25)] transition flex flex-col justify-between bg-white cursor-pointer"
            >
              <h3 className="font-[400] xl:text-[28px] text-[20px] text-left pb-5">
                Graduates
              </h3>
              <div className="flex md:justify-end justify-center">
                <Image
                  src="/images/learning (2) 1.svg"
                  alt="Graduates"
                  width={180}
                  height={180}
                />
              </div>
            </motion.div>
          </Link>

          {/* Card 2 */}
          <Link href="/Careers/Experienced" className="block">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className=" h-full border border-gray-300  p-6 shadow-[0_0_4px_rgba(0,180,112,0.25)] transition flex flex-col justify-between bg-white "
            >
              <h3 className="font-[400] xl:text-[28px] text-[20px] text-left pb-5">
                Experienced Professional
              </h3>
              <div className="flex md:justify-end justify-center">
                <Image
                  src="/images/group 1.svg"
                  alt="Experienced Professional"
                  width={180}
                  height={180}
                />
              </div>
            </motion.div>
          </Link>

          {/* Card 3 */}
          <Link href="/Careers/Internships" className="block">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className=" h-full border border-gray-300  p-6 shadow-[0_0_4px_rgba(0,180,112,0.25)] transition flex flex-col justify-between  bg-white"
            >
              <h3 className="font-[400] xl:text-[28px] text-[20px] text-left pb-5">
                Students / Internship
              </h3>
              <div className="flex md:justify-end justify-center">
                <Image
                  src="/images/training 1.svg"
                  alt="Students / Internship"
                  width={180}
                  height={180}
                />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* employees */}

      <section className=" px-6 py-12 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins">
        <div className="bg-[#F2F3F4] py-12 ">
          {/* Title & Arrows Row */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-28">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-[48px] font-medium text-center w-full"
            >
              Hear From Our Employees
            </motion.h2>

            {/* Arrows */}

            <div className="flex gap-4 mt-4 md:mt-0">
              {/* Prev */}
              <button
                onClick={hasPrev ? handlePrev : null}
                disabled={!hasPrev}
                className={`w-9 h-9 rounded-full border border-[#212529] flex items-center justify-center hover:bg-gray-100 transition ${
                  !hasPrev ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Next */}
              <button
                onClick={hasNext ? handleNext : null}
                disabled={!hasNext}
                className={`w-9 h-9 rounded-full border flex items-center justify-center bg-primary  transition ${
                  !hasNext ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 custom1136:grid-cols-3 md:gap-6  gap-[4.5rem] transition-all duration-300 ease-in-out md:px-16 px-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((item, index) => (
                <motion.div
                  key={item.name + index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white relative rounded-[20px] shadow-sm p-6 pt-16 text-center hover:shadow-md transition"
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-[100px] h-[100px] rounded-full border-4 border-green-500 overflow-hidden bg-white shadow-md">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={93}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-green-600 font-[500] mb-3 mt-3">
                    {item.name}
                  </h3>
                  <p className="text-[#5F5F5F] text-sm leading-relaxed font-[400] pb-3">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="px-6 py-12 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins">
        {/* Header with Title & Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-[48px] font-medium text-center w-full"
          >
            Hear From Our Recruiters
          </motion.h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-9 h-9 rounded-full border flex items-center justify-center bg-primary text-white hover:bg-primary/90"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Recruiter Cards Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Slider ref={sliderRef} {...settings}>
            {recruiters.map((item, i) => (
              <div key={item.id || i} className="px-2">
                <div className="relative rounded-xl overflow-hidden shadow-md group h-[360px]">
                  {/* Background Image */}
                  <Image
                    src="/images/db293021226f14105784d39d901d3de7c47524a7.jpg"
                    alt={item.name}
                    fill
                    className="object-cover brightness-100 contrast-90 hue-rotate-[-5deg]"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-300 backdrop-brightness-75 bg-opacity-20 z-10 p-4 flex flex-col gap-12">
                    {/* Logo Top Left */}
                    <Image
                      src="/images/logo.svg"
                      alt="Logo"
                      width={120}
                      height={20}
                    />
                    {/* Center text block */}
                    <div className="flex flex-col text-white drop-shadow-sm mt-8">
                      <h3 className="text-lg md:text-xl lg:text-[40px] font-medium">
                        {item.name}
                      </h3>
                      <p className="text-[18px] pt-5">{item.role}</p>
                    </div>
                    {/* Play Button */}
                    <div className="flex justify-center -mt-9">
                      <div className="bg-primary rounded-full w-[71px] h-[71px] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="34"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                            <path
                              fill="white"
                              d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>
    </>
  );
}
