"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jacob Goldsmith",
    role: "USA (Long-term Client | Online Gaming Platform)",
    image: "/images/jacob goldsmith 2.png",
    message:
      "Raybit Technologies delivered an exceptional platform with top-notch security and usability. Their professionalism and technical expertise truly set them apart.",
  },
  {
    name: "Mark Goldsmith ",
    role: "USA (Ongoing Partnership | Hospitality)",
    image: "/images/mark goldsmith.jpg",
    message:
      "Raybit Technologies transformed our idea into a fully functional mobile app with a beautiful interface and smooth performance. Their attention to detail and commitment to deadlines were remarkable",
  },
  {
    name: "Benjamin Eddy ",
    role: "USA (Long-term Client | E-learning)",
    image: "/images/maleplaceholder.jpg",
    message:
      "The Raybit team brought our e-learning vision to life with precision and creativity. Their ability to combine strong design with reliable technology made the entire project effortless for us",
  },
  {
    name: "Forrest Renaissance ",
    role: "USA (Long-term Business Partner)",
    image: "/images/forrest.webp",
    message:
      "Raybit Technologies delivered an exceptional platform with top-notch security and usability. Their professionalism and technical expertise truly set them apart.”",
  },
  {
    name: "Neha Joshi ",
    role: "India (Long-term Client)",
    image: "/images/femalePlaceholder.jpg",
    message:
      "Raybit Technologies turned our concept into a beautiful, feature-rich website and app. Their team was patient, proactive, and deeply invested in understanding our goals.”",
  },
  {
    name: "Peter Surowski ",
    role: "USA (Long-term Partnership | Multiple Projects)",
    image: "/images/peter.jpg",
    message:
      "I’ve collaborated with Raybit on several web and mobile projects, and they’ve consistently delivered outstanding results. Their versatility and technical depth make them a trusted long-term partner",
  },
  {
    name: "Lua Bashir ",
    role: "USA (Long-term Client | Multiple Projects)",
    image: "/images/lua bashir.jpg",
    message:
      "Raybit Technologies impressed us with their creativity, communication, and execution. The Evexia app and other projects were built with precision, reflecting their passion for quality",
  },
  {
    name: "Rachel Solov ",
    role: "USA (Long-term Partnership | Multiple Projects)",

    image: "/images/rachel.jpeg",
    message:
      "Raybit Technologies handled our diverse projects with remarkable efficiency and consistency. From corporate websites to custom apps, their team maintained high standards and clear communication throughout.”",
  },
  {
    name: "Hartford Matthews ",
    role: "USA (Long-term Client | Multiple Projects)",
    image: "/images/maleplaceholder.jpg",
    message:
      "Working with Raybit Technologies has been a seamless experience from start to finish. Their team’s attention to detail, reliability, and technical expertise consistently exceeded expectations across all our projects. Truly a dependable long-term partner.",
  },
  {
    name: "Michael Silvestri ",
    role: "USA (Ongoing Partnership | Multiple Projects)",
    image: "/images/Mike Silvestri.png",
    message:
      "Raybit Technologies brought our ideas to life with clarity and precision. Their proactive approach, quick response times, and dedication to quality make them stand out. It’s rare to find a team this professional and easy to collaborate with",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      setPerPage(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentPage = Math.floor(current / 1);

  if (!hasMounted) return null;

  return (
    <section className=" mx-auto ">
      {/* Titles */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
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
          <span className="absolute md:-top-6 -top-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 transform md:text-[70px] text-[33px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
            Testimonials
          </span>

          <h3 className="relative text-[24px] z-10 -mt-2">Testimonials</h3>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl md:text-3xl lg:text-[44px] sm:font-[500] font-[600] font-poppins mb-5 md:leading-3_9 leading-10 text-center md:text-left"
      >
        Clients Love Us For Our Commitment <br />
        <span className="sm:block hidden">
          To Deliver Transformative Excellence
        </span>
      </motion.h2>

      <div className="relative flex flex-col md:flex-row items-start lg:items-center">
        {/* Arrows */}
        <div className="absolute right-0 top-0 flex gap-2 z-20">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-black hover:bg-gray-200 flex items-center justify-center text-xl disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="m13.281 6.781l-8.5 8.5l-.687.719l.687.719l8.5 8.5l1.438-1.438L7.938 17H28v-2H7.937l6.782-6.781z"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-primary text-black hover:bg-green-600 flex items-center justify-center text-xl disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              className="transform rotate-180"
            >
              <path
                fill="currentColor"
                d="m13.281 6.781l-8.5 8.5l-.687.719l.687.719l8.5 8.5l1.438-1.438L7.938 17H28v-2H7.937l6.782-6.781z"
              />
            </svg>
          </button>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative custom930:w-[360px] w-[70vw] h-[400px] sm:w-[360px] sm:h-[434px] flex-shrink-0"
        >
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            fill
            sizes="(max-width: 1024px) 100vw, 360px"
            className="rounded-md object-cover w-full h-full transition-all duration-500"
            priority
          />

          {/* <button className="absolute inset-0 flex items-center justify-center ">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                  />
                </g>
              </svg>
            </div>
          </button> */}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="flex flex-col sm:flex-row -mt-32 gap-6 md:mt-7 lg:mt-0 md:-ml-52 w-full justify-center items-center sm:items-start transition-transform duration-300 lg:-ml-56">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 w-full justify-center"
            >
              {[
                ...testimonials.slice(current, current + perPage),
                ...(current + perPage > testimonials.length
                  ? testimonials.slice(
                      0,
                      (current + perPage) % testimonials.length
                    )
                  : []),
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white z-10 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] rounded-xl p-6 w-full max-w-[340px] transition-transform duration-300 border border-[#D6D6D6]"
                >
                  <p className="text-[#5F5F5F] text-[14px] sm:mb-10 mb-3 font-poppins">
                    {item.message}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                      <p className="text-yellow-400 text-sm mt-1">★★★★★</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        <div className="flex gap-2">
          {Array.from({ length: testimonials.length - perPage + 2 }).map(
            (_, idx) => (
              <span
                key={idx}
                className={`sm:w-[85px] w-[30px] h-[6px] rounded-full transition-all duration-300 ${
                  idx === currentPage ? "bg-green-500" : "bg-gray-300"
                }`}
              ></span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
