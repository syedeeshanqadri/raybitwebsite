import { motion } from "framer-motion";

import TechImage from "/public/images/Frame 26086855.svg";
import Reputaion from "/public/images/reputation 1.svg";
import Relationship from "/public/images/relationship 1.svg";
export default function TechStats() {
  return (
    <div className="max-w-6xl flex flex-col md:flex-row gap-10">
      {/* Mobile Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="md:hidden text-center"
      >
        <h2
          className="text-2xl font-[600] font-poppins"
          style={{ lineHeight: "2.7rem" }}
        >
          Embracing the Latest in <br className="lg:block hidden" />
          Cutting-Edge Technologies <br className="lg:block hidden" />
          with RayBit
        </h2>
        <p className="text-base leading-relaxed">
          Empowering Businesses to Thrive with Premium, High-End Automation
          Solutions That Drive Efficiency, Innovation, and Growth
        </p>
      </motion.div>

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-[58%] md:w-2/3 rounded-xl overflow-hidden"
      >
        <TechImage
          className="w-full h-auto rounded-xl object-cover"
          aria-label="Consultation"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 space-y-5"
      >
        {/* Desktop Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:block hidden"
        >
          <h2
            className="text-2xl md:text-3xl font-[600] font-poppins"
            style={{ lineHeight: "2.7rem" }}
          >
            Embracing the Latest in <br className="lg:block hidden" />
            Cutting-Edge Technologies <br className="lg:block hidden" />
            with RayBit
          </h2>
          <p className="text-base leading-relaxed">
            Empowering Businesses to Thrive with Premium, High-End Automation
            Solutions That Drive Efficiency, Innovation, and Growth
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Customers Served */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 border-b border-b-[#D6D6D6] pb-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:text-[48px] text-[35px] font-bold text-gray-900"
            >
              5,000 +
            </motion.span>
            <div>
              <p className="md:text-[24px] text-[18px] font-[400] flex items-center gap-4">
                <Reputaion
                  className=" w-[30px] h-[30px]  bg-primary     p-[3px]"
                  aria-label="Consultation"
                />
                Customers Served
              </p>
            </div>
          </motion.div>

          {/* Customer Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 border-b border-b-[#D6D6D6] pb-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:text-[48px] text-[35px] font-bold"
            >
              100%
            </motion.span>
            <div>
              <p className="md:text-[24px] text-[18px] font-[400] flex items-center gap-4">
                <Relationship
                  className="  bg-primary  w-[35px] h-[35px]  p-[3px]"
                  aria-label="Consultation"
                />
                Customer Satisfaction
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
