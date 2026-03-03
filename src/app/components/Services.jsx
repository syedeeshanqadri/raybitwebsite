"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import BookAppointment from "../components/BookAppoinment";
export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Business Consultation",
      description:
        "Business consultation offers expert guidance to help companies grow, solve challenges, and improve performance. From strategy to execution, consultants provide tailored solutions that drive success and efficiency.",
    },
    {
      title: "Software Development",
      description:
        "Software development delivers custom-built digital solutions to help businesses grow, streamline operations, and stay competitive. From concept to deployment, expert developers craft scalable, user-friendly software that drives innovation and efficiency.",
    },
    {
      title: "Business Consultation",
      description:
        "Business consultation offers expert guidance to help companies grow, solve challenges, and improve performance. From strategy to execution, consultants provide tailored solutions that drive success and efficiency.",
    },
    {
      title: "Business Consultation",
      description:
        "Business consultation offers expert guidance to help companies grow, solve challenges, and improve performance. From strategy to execution, consultants provide tailored solutions that drive success and efficiency.",
    },
  ];

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

  return (
    <div className="text-black lg:container lg:mx-auto">
      <div className="mx-auto grid custom930:grid-cols-2 gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center md:text-left"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-primary font-[500] font-poppins mb-9 flex flex-row gap-2 items-center justify-center md:justify-start"
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
              <span className="absolute md:-top-6 -top-2 -left-8 transform scale-100 md:text-[70px] text-[35px] leading-none pointer-events-none select-none z-0 whitespace-nowrap outlined-text">
                Services
              </span>
              <h3 className="relative text-[24px] z-10 -mt-2">Services</h3>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[24px] md:text-3xl font-[600] font-poppins mb-12 max-w-3xl mx-auto md:mx-0"
            style={{ lineHeight: "2.5rem" }}
          >
            We Build Innovative Solutions and Redefine Existing Ones Using
            Next-Gen Technologies to Future-Proof Your Business
          </motion.h2>

          {/* Image Banner with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-lg object-fill"
          >
            <Image
              src="/images/Group 131.svg"
              alt="Tech Chaos"
              width={600}
              height={350}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center sm:space-y-5 px-4">
              <h4 className="text-white text-sm md:text-[17px] xl:text-[23px] mb-2 font-poppins border border-white px-4 py-2 rounded-[8px]">
                Is Tech Chaos Hurting Your Business?
              </h4>
              <h2 className="text-[16px] md:text-[24px] xl:text-[35px] font-poppins font-[600] lg:leading-[48px] text-white mb-4">
                You Grow, We Handle the Tech Innovation.
              </h2>
              {/* <button className="bg-primary text-white px-5 py-2 rounded-[8px] transition hover:bg-white hover:text-primary hover:border-primary hover:border">
                Get a Service Now
              </button> */}
              <div className="  ">
                <div className="">
                  <button
                    className="bg-primary text-white px-5 py-2 rounded-[8px] transition hover:bg-white hover:text-primary hover:border-primary hover:border"
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
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-[63px] h-[59px] rounded-[4px] border flex items-center justify-center border-[#D6D6D6] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  >
                    <circle cx="24" cy="12" r="8" />
                    <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
                    <path d="m24 44l4-5l-4-13l-4 13z" />
                  </g>
                </svg>
              </div>
              <div className="border-b border-[#D6D6D6] w-full">
                <h4 className="font-[500] mb-1 text-[21px] font-poppins">
                  {service.title}
                </h4>
                <p className="text-[14px] text-[#5F5F5F] font-[400] font-poppins leading-normal md:pb-10 pb-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
