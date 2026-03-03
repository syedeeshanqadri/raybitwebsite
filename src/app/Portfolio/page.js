"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppointmentPage from "../components/Appoinment";
import Image from "next/image";
import TestimonialsSection from "../components/Testimonials";
import ClientsPartners from "../components/Clients";
import TechStats from "../components/TechStats";
import Whatsapp from "../components/Whatsapp";
const categories = [
  {
    name: "All",
    key: "all",
    highlight: "Al",
    rest: "l",
    description: "Innovation at Every Digital Step",
  },
  {
    name: "Mobile Apps",
    key: "mobile",
    highlight: "Mobile",
    rest: " Apps",
    description: "Crafting the Future of Mobile Experiences",
  },
  {
    name: "Websites",
    key: "website",
    highlight: "Web",
    rest: "sites",
    description: "Building the Future of Web Experiences",
  },
  {
    name: "Business Solution",
    key: "business",
    highlight: "Business",
    rest: " Solution",
    description: "Driving Business Growth Through Technology.",
  },
];

const portfolioData = [
  {
    title: "Evexia",
    description:
      "A smart workout tracking app designed to help users monitor fitness goals, log exercises, and analyze performance insights. With personalized workout plans, progress charts, and seamless device syncing, it simplifies fitness management and keeps users motivated every day.",
    image: "/images/Evexia.svg",
    category: "mobile",
    link: "https://apps.apple.com/in/app/evexia-clinic/id6743784479",
  },
  {
    title: "Jijutsu",
    description:
      "An interactive online Jiujutsu e-learning platform built for martial arts enthusiasts. It offers structured video lessons, live classes, and progress tracking tools, empowering learners to master techniques and connect with certified instructors anytime, anywhere.",
    image: "/images/Jijutsu.svg",
    category: "website",
    link: "https://www.figma.com/design/M5gKvOFVEJRAiSBrtt13ES/Juijitsux?node-id=0-1&t=DSJ8wO7u3coV0pgt-1",
  },

  {
    title: "Marketplace",
    description:
      "A companion web platform for the Marketplace App that allows users to browse listings, connect with sellers, and manage transactions securely. Designed for scalability, it supports real-time chat, multi-category browsing, and advanced user analytics.",
    image: "/images/Marketplace.svg",
    category: ["website", "business"],
    link: "https://shop.raybitprojects.com/",
  },
  {
    title: "Marketplace App",
    description:
      "A white-label mobile marketplace application for online buying and selling. Users can post ads, chat instantly, and manage listings effortlessly. With verified profiles, location-based search, and a smooth UI, it brings local commerce to everyone’s fingertips.",
    image: "/images/Marketplace App.svg",
    category: ["mobile", "business"],
    link: "https://www.figma.com/design/hwwkhJNe75a7R2qMQ1hH7C/MarketPlace?node-id=1-5081&t=nmkGRlRHBUVCNSHt-1",
  },
  {
    title: "Jyotishwani",
    description:
      "A web version of the Jyotishvani platform offering online consultations, astrology content, and product purchases. With responsive design, multi-language support, and integrated e-commerce, it brings astrology services to a wider audience seamlessly.",

    image: "/images/Jyotish.svg",
    category: "website",
    link: "https://jyotishvanii.com/",
  },
  {
    title: "Jyotishwani App",
    description:
      "An advanced online astrology consultation app inspired by AstroTalk. It enables users to connect with expert astrologers, order remedies, shop spiritual products, and access personalized reports — all through a modern, secure, and intuitive interface.",

    image: "/images/JyotishApp.svg",
    category: "mobile",
    link: "https://www.figma.com/design/LVRSoUDJ6P9RmwsqspQ8Gt/Jyotishvani?node-id=1-5036&t=bmp8WYvozjdI2o8S-1",
  },
  {
    title: "Wego",
    description:
      "A customized cab and taxi booking app developed for the Philippines market. It provides real-time ride tracking, driver management, fare estimation, and in-app payments — tailored to local needs for maximum reliability and user satisfaction.",
    image: "/images/Wego.svg",
    category: "mobile",
    link: "https://www.figma.com/design/jxi102ViBIQ2CKa15NGTXu/Wego?node-id=0-1&t=Pk4AOb5fjkaLkQyU-1",
  },
  {
    title: "Rayfood Website",
    description:
      "A fully responsive white-label food ordering and listing website that connects restaurants with customers. Featuring advanced search filters, menu management, live order tracking, and easy reordering, it’s built for speed, security, and convenience.",
    image: "/images/FoodWebsite.svg",
    category: ["website", "business"],
    link: "https://www.figma.com/design/j1WXvIt1kbn2CK7uw3fMoQ/Ray-Food?node-id=49-170&t=1ZOU1pPT5j80Mp9R-1",
  },
  {
    title: "Rayfood App",
    description:
      "A white-label food ordering and delivery platform offering advanced features similar to Swiggy and Zomato. With real-time tracking, secure payments, restaurant dashboards, and customer loyalty systems, it delivers a complete on-demand food ecosystem.",
    image: "/images/Rayfood1.svg",
    category: ["mobile", "business"],
    link: "https://www.figma.com/design/j1WXvIt1kbn2CK7uw3fMoQ/Ray-Food?node-id=1-5556&t=1ZOU1pPT5j80Mp9R-1",
  },

  {
    title: "Empsuite",
    description:
      "An all-in-one ERP platform for company operations — including employee management, HR, CRM, time tracking, and project collaboration. With role-based dashboards and automation tools, it simplifies workflows and enhances organizational productivity.",
    image: "/images/Empsuite.svg",
    category: ["website", "business"],
    link: "https://www.figma.com/design/rrPhDwKsuIgJtVhhTiPvqR/Empsuite?node-id=1-7047&t=cbmp0Svd3FKklSF1-1",
  },
  {
    title: "Rust Skin",
    description:
      "An engaging online gaming website offering virtual item trading, skin upgrades, and gaming utilities. Designed for performance and security, it combines sleek visuals with seamless functionality for gamers and e-commerce integration.",
    image: "/images/Rust Skin.svg",
    category: "website",
    link: "https://www.figma.com/design/aajxgio3fjp3RfnlE44Mex/Rust-Skin?node-id=0-1&t=5Dx09ims1vOVZYLI-1",
  },
  {
    title: "Elevance",
    description:
      "A professional freelance and project marketplace connecting clients with skilled experts worldwide. With intelligent matching, milestone tracking, and secure escrow payments, it offers a streamlined experience for hiring and collaboration like Upwork.",
    image: "/images/Elevance.svg",
    category: ["website", "business"],
    link: "https://www.figma.com/design/7UpapudefGGO1zxJKybm6R/Elevance?node-id=0-1&t=X2PojglGdUFo8Dob-1",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredData =
    selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) =>
          item.category.includes(selectedCategory)
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

  const text = "Portfolio";

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
            className="absolute lg:right-96 md:right-[33rem]  xl:-top-10  lg:-top-8 md:top-0  custom553:top-[-15px] custom553:right-[22rem]  flex flex-col items-center text-center top-[1rem] "
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
            Home/Portfolio
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

      {/* portfolio */}

      <section className=" bg-[#F2F3F4]">
        <div className="w-full py-10 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-10"
          >
            <p className="text-primary mb-2 flex flex-row gap-2 justify-center text-[24px] font-[500]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-primary mt-2"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15.38 8.65L12 .986L8.62 8.65L.953 12.03l7.667 3.38L12 23.078l3.38-7.668l7.667-3.38z"
                  clipRule="evenodd"
                />
              </svg>
              Portfolio
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[48px] font-[600] font-poppins leading-3_9 md:block hidden"
            >
              A <span className="text-primary">Glimpse</span> into Our{" "}
              <span className="text-primary">Latest</span> Creations
            </motion.h2>
            <p>
              A curated look at some of the impactful products and platforms
              we’ve recently developed.
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[24px] font-[600] font-poppins md:hidden"
            >
              We’re Your Digital Technological Partners
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[14px] font-[400] font-poppins text-[#5F5F5F] md:hidden"
            >
              Since 2018, we’ve been helping businesses like yours accelerate
              their journey to success, backed by the right transformative
              solutions.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary text-center text-white px-9 py-2 mt-5 rounded-[4px] md:hidden"
            >
              Explore more
            </motion.button>
          </motion.div>

          {/* Portfolio Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-7">
            {/* Left Filter Menu */}
            <div className="flex-shrink-0 w-full lg:w-[30%] bg-white h-auto pl-3 hidden lg:block">
              {/* Desktop Sidebar */}
              <ul className="space-y-8 font-poppins text-[30px] font-[500] pb-32">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer font-[600] font-poppins ${
                      selectedCategory === category.key
                        ? "opacity-100"
                        : "opacity-50"
                    } hover:opacity-100 transition-opacity duration-300`}
                    onClick={() => setSelectedCategory(category.key)}
                  >
                    <span className="text-primary">{category.highlight}</span>
                    <span className="text-black">{category.rest}</span>
                    <p className="text-[14px] font-normal mt-1">
                      {category.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Category Buttons */}
            <div className="block lg:hidden w-full mb-6">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide ">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-[6px] border text-sm font-medium ${
                      selectedCategory === category.key
                        ? "bg-primary text-white border-primary"
                        : " text-black border-gray-400"
                    }`}
                  >
                    {category.highlight}
                    {category.rest}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Portfolio Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory} // Force animation on category change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full lg:w-3/4 space-y-8" // ✅ Your original width preserved
              >
                {filteredData.map((item, index) => (
                  <div
                    key={item.key || index}
                    className="bg-white shadow p-6 flex flex-col md:flex-row gap-6"
                  >
                    {/* Text Section */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-[30px] font-[600] font-poppins mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[16px]">{item.description}</p>

                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Content Section */}
                        <div className="w-full md:w-1/2 flex flex-col">
                          {/* Store Buttons */}
                          <div className="">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-6 inline-block bg-primary text-white font-semibold px-6 py-2 rounded-md 
             hover:bg-white hover:text-primary hover:border transition-all"
                            >
                              Go to Project
                            </a>
                          </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full custom553:w-1/2 rounded-[12px] flex items-center justify-center">
                          <div className="relative w-full h-[200px] md:h-[279px] border border-[#D6D6D6] p-3 rounded-[8px] bg-white">
                            <div className="relative w-full h-full">
                              <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-[4px] bg-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* tech */}

      <section className="pt-10 lg:pb-5 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto">
        <h2 className="text-primary md:text-[48px] text-[24px] font-[700] text-center mb-3 ">
          Explore More Work & Live Demos?
        </h2>
        <p className="mb-9 text-center lg:px-32 text-[#5F5F5F] md:block hidden ">
          At Raybit Technologies, we prioritize the privacy and confidentiality
          of our b2b projects. As per our policy, we do not disclose all
          projects sold as b2b to clients openly. However, if you are interested
          in viewing our impressive portfolio and exploring the exceptional work
          we have done, kindly request more portfolio links here. We value your
          trust and look forward to showcasing our successful collaborations
          with you.
        </p>
        <p className="text-[#5F5F5F]  mb-9 md:hidden text-center">
          At Raybit Technologies, we respect the confidentiality of our B2B
          projects and don’t publicly share all client work. To explore our
          portfolio, feel free to request links—we’d be happy to showcase our
          successful collaborations.
        </p>
        <TechStats />
      </section>

      {/* cards */}
      <section className="pt-10 lg:pb-5 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto">
        <h3 className="md:text-[30px]  text-[24px] font-[600] text-center mb-12 font-poppins">
          Providing Digital Solutions with a Difference
        </h3>
        {/* Process Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 custom871:grid-cols-3 gap-6 text-center"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="border border-[#D6D6D6] px-4 custom1136:px-8 pb-5 pt-4 hover:shadow-lg transition bg-white shadow-[0px_0px_4px_0px_#00B47040]"
          >
            <Image
              src="/images/automation 1.svg"
              alt="Strategy"
              width={110}
              height={110}
              className="mx-auto mb-3"
            />
            <h3 className="text-[30px] custom1136:text-[33px] font-[400] mb-2">
              Automation <br />
              Solutions
            </h3>
            <p>Unleashing Innovation, Efficiency, and Success at Every Turn</p>
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
              className="mx-auto mb-3"
            />
            <h3 className="text-[30px] custom1136:text-[33px] font-[400] mb-2">
              Web <br />
              Development
            </h3>
            <p>
              Unleash the Power of High-End Web Development and Exceptional
              Digital Experiences
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="border border-[#D6D6D6] px-4 custom1136:px-8 pb-5 pt-4 hover:shadow-lg transition bg-white shadow-[0px_0px_4px_0px_#00B47040]"
          >
            <Image
              src="/images/blockchain 1.svg"
              alt="Production"
              width={110}
              height={110}
              className="mx-auto mb-3"
            />
            <h3 className="text-[30px] custom1136:text-[33px] font-[400] mb-2">
              Blockchain <br /> Development
            </h3>
            <p>
              Revolutionizing Industries with Cutting-Edge Blockchain
              Development Solutions.
            </p>
          </motion.div>
        </motion.div>
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
    </>
  );
}
