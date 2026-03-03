"use client";

import React from "react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import analysis1 from "../../assets/images/analysis1.svg";
import Execution from "../../assets/images/execution.svg";
import Planning from "../../assets/images/planning1.svg";

export default function ServiceCard() {
  const [activeSection, setActiveSection] = useState(1);
  const handleToggle = (sectionNumber) => {
    setActiveSection((prev) => (prev === sectionNumber ? null : sectionNumber));
  };

  const cardDataSection1 = [
    {
      id: 1,
      title: "In-Depth Business Analysis",
      desc: "We start by thoroughly analyzing your operations, competition, and market trends. This foundation helps us uncover growth opportunities and areas of improvement.",
      icon: analysis1,
    },
    {
      id: 2,
      title: "Tailored Strategic Planning",
      desc: "Based on our findings, we craft customized, goal-oriented strategies that align with your business vision—no off-the-shelf solutions, just what fits best.",
      icon: Execution,
    },
    {
      id: 3,
      title: "Execution & Growth",
      desc: "We turn strategies into action. From team alignment to rollout, we support execution with precision to ensure tangible business outcomes.",
      icon: Planning,
    },
  ];

  const cardDataSection2 = [
    {
      id: 1,
      title: "Market Penetration Strategy",
      desc: "We help you create a powerful market entry or expansion plan to gain a competitive edge and grow effectively.",
      icon: analysis1,
    },
    {
      id: 2,
      title: "Customer-Centric Design",
      desc: "Our solutions prioritize user needs, ensuring seamless experiences that drive satisfaction and loyalty.",
      icon: Execution,
    },
    {
      id: 3,
      title: "Operational Efficiency",
      desc: "We streamline your workflows and optimize processes to boost productivity and reduce costs.",
      icon: Planning,
    },
  ];

  const cardDataSection3 = [
    {
      id: 1,
      title: "Sustainable Growth",
      desc: "We focus on long-term strategies that ensure your growth is scalable, sustainable, and future-ready.",
      icon: analysis1,
    },
    {
      id: 2,
      title: "Innovation Acceleration",
      desc: "We assist in rapid product development, enabling faster time-to-market and continuous innovation.",
      icon: Execution,
    },
    {
      id: 3,
      title: "Risk Mitigation",
      desc: "We proactively identify potential risks and build robust strategies to minimize business exposure.",
      icon: Planning,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section className="flex flex-col justify-center items-start pb-20 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins space-y-6">
        {" "}
        <h1 className="text-[24px] md:text-[28px] font-semibold text-[#212529] mt-7">
          The Method Behind Our Impact
        </h1>
        <div className="w-full space-y-10 border border-[#D6D6D6] p-6 md:p-10 rounded-lg shadow">
          {[1, 2, 3].map((sectionNumber) => {
            const currentData =
              sectionNumber === 1
                ? cardDataSection1
                : sectionNumber === 2
                ? cardDataSection2
                : cardDataSection3;

            return (
              <div
                key={sectionNumber}
                className={`space-y-4 ${
                  sectionNumber !== 1 ? "border-t pt-6" : "space-y-6"
                }`}
              >
                {/* Header */}
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => handleToggle(sectionNumber)}
                >
                  <div className="space-y-4">
                    <h2 className="font-[500] text-[18px]">
                      {sectionNumber}. Strategic, Insight-Driven Consulting
                    </h2>
                    <p className="text-[#5F5F5F] text-sm">
                      Our consulting approach is grounded in understanding your
                      unique business context, goals, and industry. We focus on
                      delivering actionable strategies that lead to measurable,
                      long-term impact.
                    </p>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border border-primary rounded-full flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </div>

                {/* Animated Cards */}
                <AnimatePresence initial={sectionNumber === 1}>
                  {activeSection === sectionNumber && (
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      key={`section-${sectionNumber}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                      {currentData.map((card) => (
                        <motion.div
                          key={card.id}
                          className="border border-[#D6D6D6] rounded-[20px] p-4 space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex justify-center bg-primary w-14 h-14 rounded-full">
                            <card.icon
                              className="w-[33px] "
                              aria-label={card.title}
                            />
                          </div>
                          <h3 className="font-[500] text-[#212529] text-[16px]">
                            {card.title}
                          </h3>
                          <p className="text-[#5F5F5F] text-sm leading-6 pb-9">
                            {card.desc}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
