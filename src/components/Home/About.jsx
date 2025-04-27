import React from "react";
import { motion } from "framer-motion";
import ashwin from "../../assets/ashwin.png";
import nicole from "../../assets/nicole.png";

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const profiles = [
  {
    id: 1,
    img: ashwin,
    alt: "Ashwin",
    bio1: "Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
    bio2: "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
  },
  {
    id: 2,
    img: nicole,
    alt: "Nicole",
    bio1: "Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.",
    bio2: "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
  },
];

export default function About() {
  return (
    <div
      className="
        bg-gradient-to-b from-[#010A26] via-[#0A1C44] to-[#0058FF]
        min-h-[80vh] flex flex-col items-start justify-start
        px-4 sm:px-20 lg:px-40 pb-24
      "
    >
      <h1 className="text-white text-3xl font-semibold mt-20 sm:mt-40">
        About Us
      </h1>

      <div className="space-y-16">
        {profiles.map((p) => (
          <div
            key={p.id}
            className="flex flex-col md:flex-row gap-10 md:gap-32 px-4 sm:px-20 md:px-20 mt-10 md:mt-20 items-center"
          >
            {/* Image */}
            <motion.div
              className="bg-white rounded-full relative w-[200px] h-[200px] md:w-[270px] md:h-[270px] overflow-hidden p-3"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={p.img}
                alt={p.alt}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 object-contain"
              />
            </motion.div>

            {/* Text  */}
            <motion.div
              className="w-full md:w-1/2 text-white flex flex-col"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-8">{p.bio1}</p>
              <p>{p.bio2}</p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="text-white mt-10 flex flex-col md:flex-row md:space-x-12 items-center">
        <p className="ml-0 md:ml-16 mb-3 md:mb-0 hover:underline cursor-pointer">
          Learn more about our Board of Advisors​ ↗
        </p>
        <p className="ml-0 md:ml-16 hover:underline cursor-pointer">
          Follow us on our Linkedin page ↗
        </p>
      </div>
    </div>
  );
}
