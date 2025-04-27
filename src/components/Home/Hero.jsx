import React from "react";
import hero from "../../assets/hero.png";
import Button from "../common/Button";
import book from "../../assets/book.png";

const Hero = () => {
  return (
    <main
      className="
        bg-gradient-to-r
          from-[#E0D7FF]
          via-[#3B82F6]
          to-[#020B3A]
        flex flex-col-reverse md:flex-row
        justify-between items-center
        px-4 sm:px-10 md:px-20 py-16 md:py-20
        gap-10 md:gap-44
      "
    >
      {/* Text block */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-bold leading-tight">
          Land job interviews
          <br />
          <span className="text-blue-700">10x</span> faster
        </h1>

        <p className="mx-auto md:mx-0 mt-4 mb-6 w-full sm:w-[460px] text-white text-base sm:text-lg font-light">
          Custom-built resumes that match your goals, keywords, and recruiter
          expectations.
        </p>

        <Button className="text-[#022183] bg-white" arrow>
          Get Started
        </Button>
      </div>

      {/* Graphic block */}
      <div className="relative w-full sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 mb-6 md:mb-0">
        <img
          src={hero}
          alt="hero graphic"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />

        {/* blurred circle */}
        <div
          className="
            absolute
            -bottom-6 sm:-bottom-10
            right-6 sm:right-10
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            backdrop-blur-sm
            border-2 border-white
            z-10
          "
        />

        {/* book icon */}
        <img
          src={book}
          alt="ebook"
          className="
            absolute
            w-10 h-10 sm:w-12 sm:h-12
            -bottom-3 sm:-bottom-6
            right-9 sm:right-14
            z-20
          "
        />

        {/* download text */}
        <span
          className="
            absolute
            text-xs sm:text-sm
            text-white
            -bottom-6 sm:-bottom-10
            left-4 sm:left-14
            z-20
          "
        >
          Download Free E-Book
        </span>
      </div>
    </main>
  );
};

export default Hero;
