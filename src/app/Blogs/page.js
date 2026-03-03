"use client";

import Image from "next/image";
import { useState } from "react";
import BlogCard from "../components/Blog";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Whatsapp from "../components/Whatsapp";
const blogs = [
  {
    id: 1,
    image: "/images/image 11.svg",
    title: "Decide with Data",
    date: "June 30, 2025",
    author: "Basit",
    para: "In today’s digital era, making business decisions based on assumptions or gut feelings is no longer sufficient. With rapid technological advancements, shifting market dynamics, and increasing competition, companies need a more reliable foundation for their choices. Whether you're a startup founder making your first product roadmap or a seasoned corporate leader planning your next big move, the most successful strategies are powered by data. Data-driven decision-making involves the systematic use of facts, metrics, and insights to guide business strategies and actions. It replaces guesswork with precision and transforms raw information into actionable intelligence. From understanding customer preferences and tracking behavior patterns to identifying operational inefficiencies and forecasting trends, data provides a comprehensive and real-time view of what’s truly happening within and outside your organization.",
    comments: "6",
    category: "Web Development",
  },
  {
    id: 2,
    image: "/images/image 10.svg",
    title: "Driven by Insights",
    date: "June 30, 2025",
    author: "Mehak",
    para: "In today’s digital era, making business decisions based on assumptions or gut feelings is no longer sufficient. With rapid technological advancements, shifting market dynamics, and increasing competition, companies need a more reliable foundation for their choices. Whether you're a startup founder making your first product roadmap or a seasoned corporate leader planning your next big move, the most successful strategies are powered by data. Data-driven decision-making involves the systematic use of facts, metrics, and insights to guide business strategies and actions. It replaces guesswork with precision and transforms raw information into actionable intelligence. From understanding customer preferences and tracking behavior patterns to identifying operational inefficiencies and forecasting trends, data provides a comprehensive and real-time view of what’s truly happening within and outside your organization.",
    comments: "2",
    category: "Email Marketing",
  },
  {
    id: 3,
    image: "/images/image 10.svg",
    title: "Lead with Data",
    date: "June 30, 2025",
    author: "Mehak",
    para: "In today’s digital era, making business decisions based on assumptions or gut feelings is no longer sufficient. With rapid technological advancements, shifting market dynamics, and increasing competition, companies need a more reliable foundation for their choices. Whether you're a startup founder making your first product roadmap or a seasoned corporate leader planning your next big move, the most successful strategies are powered by data. Data-driven decision-making involves the systematic use of facts, metrics, and insights to guide business strategies and actions. It replaces guesswork with precision and transforms raw information into actionable intelligence. From understanding customer preferences and tracking behavior patterns to identifying operational inefficiencies and forecasting trends, data provides a comprehensive and real-time view of what’s truly happening within and outside your organization.",
    comments: "3",
    category: "App Design",
  },
  {
    id: 4,
    image: "/images/image 10.svg",
    title: "Lead with Data",
    date: "June 30, 2025",
    author: "Mehak",
    para: "In today’s digital era, making business decisions based on assumptions or gut feelings is no longer sufficient. With rapid technological advancements, shifting market dynamics, and increasing competition, companies need a more reliable foundation for their choices. Whether you're a startup founder making your first product roadmap or a seasoned corporate leader planning your next big move, the most successful strategies are powered by data. Data-driven decision-making involves the systematic use of facts, metrics, and insights to guide business strategies and actions. It replaces guesswork with precision and transforms raw information into actionable intelligence. From understanding customer preferences and tracking behavior patterns to identifying operational inefficiencies and forecasting trends, data provides a comprehensive and real-time view of what’s truly happening within and outside your organization.",
    comments: "3",
    category: "Content Writing",
  },
  {
    id: 5,
    image: "/images/image 10.svg",
    title: "Lead with Data",
    date: "June 30, 2025",
    author: "Mehak",
    para: "In today’s digital era, making business decisions based on assumptions or gut feelings is no longer sufficient. With rapid technological advancements, shifting market dynamics, and increasing competition, companies need a more reliable foundation for their choices. Whether you're a startup founder making your first product roadmap or a seasoned corporate leader planning your next big move, the most successful strategies are powered by data. Data-driven decision-making involves the systematic use of facts, metrics, and insights to guide business strategies and actions. It replaces guesswork with precision and transforms raw information into actionable intelligence. From understanding customer preferences and tracking behavior patterns to identifying operational inefficiencies and forecasting trends, data provides a comprehensive and real-time view of what’s truly happening within and outside your organization.",
    comments: "3",
    category: "SEO Strategy",
  },
];

const categories = [
  { id: 1, name: "Web Development", count: 4 },
  { id: 2, name: "Email Marketing", count: 3 },
  { id: 3, name: "App Design", count: 2 },
  { id: 4, name: "Content Writing", count: 5 },
  { id: 5, name: "SEO Strategy", count: 1 },
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3;
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleExpand = (id) => {
    setExpandedBlogId(id);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Add this handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 if category changes
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setExpandedBlogId(null);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const expandedBlog = filteredBlogs.find((b) => b.id === expandedBlogId);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  // Determine the text
  const titleText = expandedBlogId
    ? filteredBlogs.find((b) => b.id === expandedBlogId)?.title || ""
    : "Blogs";

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
    },
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
          {/* <div className="relative w-full flex justify-center text-center z-20">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-[45px] sm:text-[64px] md:text-[64px] lg:text-[84px] xl:text-[113px] font-[500] text-black tracking-tight font-poppins px-7 "
            >
              {titleText.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={letter}
                  className="inline-block "
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.h1>
          </div> */}

          <div className="relative w-full flex justify-center text-center z-20">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-[45px] sm:text-[64px] md:text-[64px] lg:text-[84px] xl:text-[113px] font-[500] text-black tracking-tight font-poppins px-7"
            >
              {titleText.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={letter}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                  &nbsp;
                </span>
              ))}
            </motion.h1>
          </div>
        </div>
        {!expandedBlogId && (
          <>
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
                Home/Blogs
              </div>
            </div>
          </>
        )}
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

      {/* blogs */}
      <section className="items-stretch min-h-screen pb-10 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Blog Section */}
          <div className="w-full lg:w-[60%] flex flex-col h-full space-y-8">
            {expandedBlogId && expandedBlog ? (
              <motion.div
                key={expandedBlog.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <BlogCard
                  blog={expandedBlog}
                  expanded
                  onCollapse={() => setExpandedBlogId(null)}
                />
              </motion.div>
            ) : (
              paginatedBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <BlogCard
                    blog={blog}
                    expanded={false}
                    onExpand={() => handleExpand(blog.id)}
                  />
                </motion.div>
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[40%] bg-[#F2F3F4] rounded-[8px] flex flex-col">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="px-6 py-9 space-y-9 flex-1"
            >
              {/* Search */}
              <motion.div
                variants={cardVariants}
                className="p-4 border rounded-[8px] bg-white"
              >
                <div className="flex items-center border rounded-[8px] overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search....."
                    className="w-full p-2 outline-none"
                  />
                  <button className="p-2 text-gray-500">
                    <FaSearch />
                  </button>
                </div>
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                variants={cardVariants}
                className="p-4 border rounded-lg bg-white"
              >
                <h3 className="font-[500] text-[20px] mb-4">Recent Posts</h3>
                {paginatedBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-6"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#00B470"
                              d="M10.5 7.25a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-1 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                            />
                            <path
                              fill="#00B470"
                              fillRule="evenodd"
                              d="M8 3.5a.5.5 0 0 1 .5.5v1h7V4a.5.5 0 0 1 1 0v1.003q.367.003.654.026c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v7.642c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.333.029H8.179c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98C4.5 17.3 4.5 16.862 4.5 16.32V8.68c0-.475 0-.868.02-1.197l.009-.136c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243q.289-.023.655-.026V4a.5.5 0 0 1 .5-.5m-.5 3v-.497a9 9 0 0 0-.573.023c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C5.5 7.736 5.5 8.132 5.5 8.7v.55h13V8.7c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137a9 9 0 0 0-.573-.023V6.5a.5.5 0 0 1-1 0V6h-7v.5a.5.5 0 0 1-1 0m11 3.75h-13v6.05c0 .568 0 .965.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137C7.236 19 7.632 19 8.2 19h7.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.306.137-.608c.026-.308.026-.705.026-1.273z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none" stroke="#00B470" strokeWidth="1.5">
                              <path
                                strokeLinejoin="round"
                                d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                              />
                              <circle cx="12" cy="7" r="3" />
                            </g>
                          </svg>
                          <span>{blog.author}</span>
                        </div>
                      </div>
                      <h4 className="text-[24px] font-semibold text-black">
                        {blog.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Categories */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="p-4 border rounded-lg bg-white"
              >
                <h3 className="font-semibold text-[20px] mb-4">Categories</h3>
                <ul className="space-y-7">
                  <li
                    onClick={() => handleCategoryChange("All")}
                    className={`cursor-pointer flex justify-between border-b pb-2 pt-4 text-[18px] font-[500] font-poppins ${
                      selectedCategory === "All"
                        ? "text-primary"
                        : "text-[#5F5F5F]"
                    }`}
                  >
                    <span>All</span>
                    <span>({blogs.length})</span>
                  </li>
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`cursor-pointer flex justify-between border-b pb-2 pt-4 md:text-[18px] text-[14px] font-[500] font-poppins ${
                        selectedCategory === category.name
                          ? "text-primary"
                          : "text-[#5F5F5F]"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span>({category.count})</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Pagination */}
        {!expandedBlogId && totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &lt;
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => (
              <motion.button
                key={i + 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "border border-gray-300"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </motion.button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
