"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function JobDetails({ job, jobs, type }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="pt-4 pb-4 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto bg-[#F2F3F4] font-poppins mb-10 flex justify-between ">
        <h1 className="lg:text-[45px] md:text-[34px] text-[24px]  flex justify-center items-center  font-semibold text-primary">
          {job.title}
        </h1>
        <Link
          href={{
            pathname: `/Careers/${type}/${job.id}/privacy`,
            query: { title: job.title },
          }}
        >
          <button className="bg-primary text-white md:px-9 px-3 md:py-3 py-1 rounded-md flex items-center my-3 whitespace-nowrap">
            Apply Now
          </button>
        </Link>
      </div>

      <div className="pt-4 pb-10 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins text-[#2B2B2B]">
        <div className="flex flex-col md:flex-row mb-10">
          <motion.div
            className="md:w-[40%] w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }, // 👈 line-by-line
              },
            }}
          >
            <h3 className="font-[400] text-[24px] mb-4">Job details</h3>

            <motion.div className="space-y-4 md:text-[16px]">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[#5F5F5F] md:text-[20px] text-[16px] pb-4"
              >
                <span className="font-[400] text-[#2B2B2B] md:text-[24px] text-[18px]">
                  Work Location
                </span>
                <br />
                {job.location}
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[#5F5F5F] md:text-[20px] text-[16px] pb-4"
              >
                <span className="font-[400] text-[#2B2B2B] md:text-[24px] text-[18px]">
                  State / Region
                </span>
                <br />
                {job.region}
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[#5F5F5F] md:text-[20px] text-[16px] pb-4"
              >
                <span className="font-[400] text-[#2B2B2B] md:text-[24px] text-[18px] pb-1">
                  Country
                </span>
                <br />
                {job.country}
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[#5F5F5F] md:text-[20px] text-[16px] pb-4"
              >
                <span className="font-[400] text-[#2B2B2B] md:text-[24px] text-[18px]">
                  Company
                </span>
                <br />
                {job.company}
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-[60%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-[400] text-[24px] mb-4"
            >
              Job description
            </motion.h3>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 text-[#5F5F5F]"
            >
              Role — {job.title}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 text-[#5F5F5F]"
            >
              Technology — {job.tags.join(" , ")}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 text-[#5F5F5F]"
            >
              {job.description}
            </motion.p>

            <motion.h4
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-[400] text-[24px] mb-2"
            >
              Your Role
            </motion.h4>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 text-[#5F5F5F]"
            >
              {job.role}
            </motion.p>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-[500] text-[24px] mb-4"
            >
              Required Skills
            </motion.h3>

            <motion.ul
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="list-disc ml-6 text-[15px] leading-7 text-[#5F5F5F] mb-8"
            >
              {job.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </motion.ul>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-[500] text-[24px] mb-4"
            >
              Personal Attributes
            </motion.h3>

            <motion.ul
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="list-disc ml-6 text-[15px] leading-7 text-[#5F5F5F] mb-8"
            >
              {job.attributes.map((attr, idx) => (
                <li key={idx}>{attr}</li>
              ))}
            </motion.ul>

            <Link
              href={{
                pathname: `/Careers/${type}/${job.id}/privacy`,
                query: { title: job.title },
              }}
            >
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-primary text-white font-medium px-6 py-3 rounded-md transition"
              >
                Apply Now
              </motion.button>
            </Link>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="mt-12"
            >
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-[500] text-[24px] mb-4"
              >
                Similar jobs
              </motion.h3>

              <div className="space-y-3">
                {jobs
                  .filter((j) => j.id !== job.id)
                  .map((j) => (
                    <motion.div
                      key={j.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Link
                        href={`/Careers/${type}/${j.id}`}
                        className="block border border-gray-200 rounded-md p-4 hover:shadow transition"
                      >
                        <h4 className="text-green-600 font-semibold text-[16px]">
                          {j.title}
                        </h4>
                        <p className="text-gray-600">{j.tags?.join(" , ")}</p>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
