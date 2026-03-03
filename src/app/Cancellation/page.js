"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Whatsapp from "../components/Whatsapp";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const text = "Refund  Policy";

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

export default function Cancellation() {
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
        <div className="w-full space-y-12">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-4"
          >
            <h1 className="text-[16px] text-[#5F5F5F] font-[500]">
              Raybit Technologies Private Limited <br />
              Effective Date: 20-10-2024
            </h1>

            <p className="text-sm text-[#5F5F5F]">
              At Raybit Technologies Private Limited, we strive to provide
              high-quality software development and consultation services.
              However, we understand that circumstances may arise that require
              our customers to request a refund or cancel a service. This policy
              outlines our terms for refunds and cancellations to ensure a clear
              and fair process for all parties involved.
            </p>
          </motion.div>

          {/* Refund Policy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-6"
          >
            <h2 className="text-[26px] font-[400]">Refund Policy</h2>

            <div className="space-y-2">
              <h3 className="font-[500] text-[16px]">
                1. Eligibility for Refunds
              </h3>
              <p className="text-sm text-[#5F5F5F] pl-4">
                Customers may apply for a refund within 7 days of the payment
                date. Refund requests received after this period will not be
                eligible for consideration.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-[500] text-[16px]">
                2. Refund Request Process
              </h3>
              <p className="text-sm text-[#5F5F5F] pl-4">
                To request a refund, customers must send an email to our support
                team at{" "}
                <a
                  href="mailto:support@raybittechnologies.com"
                  className="text-black hover:underline"
                >
                  support@raybittechnologies.com
                </a>
                . The request should include:
              </p>
              <ul className="text-sm text-[#5F5F5F] pl-8 list-disc space-y-1">
                <li>The reason for the refund.</li>
                <li>
                  Relevant project details (e.g. project name, invoice number).
                </li>
                <li>A copy of the payment receipt.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-[500] text-[16px]">3. Review and Approval</h3>
              <p className="text-sm text-[#5F5F5F] pl-4">
                Once we receive the refund request, our team will review it and
                may contact the customer for further information if necessary.
                We aim to process all refund requests within 14 business days
                after receipt of the request.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-[500] text-[16px]">4. Refund Method</h3>
              <p className="text-sm text-[#5F5F5F] pl-4">
                Approved refunds will be processed using the original payment
                method. Depending on the payment provider, it may take
                additional time for the refund to reflect in the customer’s
                account.
              </p>
            </div>
          </motion.div>

          {/* Cancellation Policy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-6"
          >
            <h2 className="text-[26px] font-[400]">Cancellation Policy</h2>

            <div className="space-y-2">
              <h3 className="font-[500] text-[16px]">
                1. Cancellation Requests
              </h3>
              <p className="text-sm text-[#5F5F5F] pl-4">
                Customers may request to cancel a service at any time; however,
                we encourage cancellation requests to be raised as soon as
                possible and within 24 hours of the payment date to minimize any
                charges incurred.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-[500] text-[16px]">
                2. Cancellation Request Process
              </h3>
              <p className="text-sm text-[#5F5F5F] pl-4">
                To initiate a cancellation, customers must send an email to{" "}
                <a
                  href="mailto:support@raybittechnologies.com"
                  className="text-black hover:underline"
                >
                  support@raybittechnologies.com
                </a>{" "}
                with the following details:
              </p>
              <ul className="text-sm text-[#5F5F5F] pl-8 list-disc space-y-1">
                <li>The reason for cancellation.</li>
                <li>
                  Relevant project details (e.g. project name, invoice number).
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-[500] text-[16px]">
                3. Cancellation Confirmation
              </h3>
              <p className="text-sm text-[#5F5F5F] pl-4">
                Upon receiving a cancellation request, our team will review it
                and confirm the cancellation via email. If the cancellation
                occurs after project work has begun, charges may be applied up
                to that point if any apply.
              </p>
            </div>
          </motion.div>

          {/* Changes to This Policy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-2"
          >
            <h2 className="text-[26px] font-[400]">Changes to This Policy</h2>
            <p className="text-sm text-[#5F5F5F] pl-4">
              Raybit Technologies Private Limited reserves the right to modify
              this Refunds and Cancellation Policy at any time. Any changes will
              be effective immediately upon posting the revised policy on our
              website. We encourage our customers to review this policy
              periodically for any updates.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-2"
          >
            <h2 className="text-[26px] font-[400]">Contact Us</h2>
            <p className="text-sm text-[#5F5F5F] pl-4">
              For any questions or concerns regarding our Refunds and
              Cancellation Policy, please contact us at:
            </p>
            <div className="text-sm text-[#5F5F5F] pl-4 space-y-1">
              <p>
                Email:{" "}
                <span className="text-black">
                  trainings@raybittechnologies.com
                </span>
              </p>
              <p>Phone: (+91) 600-5286-335 , (+91) 700-6597-966</p>
              <p>Address: 174, Rajbagh, Srinagar, 190008</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-sm text-[#5F5F5F] mt-4 pl-4"
          >
            Thank you for choosing Raybit Technologies Private Limited. We
            appreciate your business and look forward to serving you.
          </motion.p>
        </div>
      </section>
    </>
  );
}
