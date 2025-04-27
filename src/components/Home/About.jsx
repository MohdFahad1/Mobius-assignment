import React from "react";
import ashwin from "../../assets/ashwin.png";
import nicole from "../../assets/nicole.png";

const About = () => {
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
        {/* ASHWIN */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-32 px-4 sm:px-20 md:px-20 mt-10 items-center">
          <div className="bg-white rounded-full relative w-[200px] h-[200px] md:w-[270px] md:h-[270px] overflow-hidden p-3">
            <img
              src={ashwin}
              alt="Ashwin"
              className="absolute sm:bottom-0 left-1/2 transform -translate-x-1/2 object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-white flex flex-col">
            <p className="mb-8">
              Ashwin is the founder of mobiusengine.ai. He is an accomplished
              senior executive with over 20 years of experience in cloud
              infrastructure and financial services. With over 2 decades of
              experience at Google and JP Morgan, Ashwin held various product
              and GTM roles. Ashwin is an MBA holder from Yale University.
            </p>
            <p>
              Ashwin's vision with Mobius is to give job seekers a significant
              advantage in securing the roles of their dreams.
            </p>
          </div>
        </div>

        {/* NICOLE */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-32 px-4 sm:px-20 md:px-20 mt-10 md:mt-20 items-center">
          <div className="bg-white rounded-full relative w-[200px] h-[200px] md:w-[270px] md:h-[270px] overflow-hidden p-3">
            <img
              src={nicole}
              alt="Nicole"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-white flex flex-col">
            <p className="mb-8">
              Nicole is an Executive coach at Mobius specializing in resume
              builds and career advisory.
            </p>
            <p>
              With a B.S. in Business Administration from UC Berkeley and 7+
              years of experience in AI-driven product strategy, she has seen
              firsthand how the proper positioning opens doors. She takes a
              targeted, results-driven approach to help clients confidently
              stand out and land roles that truly match their skills and
              potential.
            </p>
          </div>
        </div>
      </div>

      {/* Footer links */}
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
};

export default About;
