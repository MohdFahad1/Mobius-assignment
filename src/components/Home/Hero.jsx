import React from "react";
import hero from "../../assets/hero.png";
import Button from "../common/Button";
import book from "../../assets/book.png";

const Hero = () => {
  return (
    <main className="bg-linear-65 from-cyan-500 to-blue-500 flex justify-center items-center px-10 py-20 gap-44">
      <div>
        <h1 className="text-7xl text-white font-bold">
          Land job interviews
          <br />
          <span className="text-blue-700">10x</span> faster
        </h1>
        <p className="w-[460px] text-white text-lg font-light my-5">
          Custom-built resumes that match your goals, keywords, and recruiter
          expectations.
        </p>

        <Button className="text-[#022183] bg-white" arrow={true}>
          Get Started
        </Button>
      </div>
      <div className="relative h-96 w-96">
        <img src={hero} className="absolute object-cover" />
        <div className="absolute -bottom-10 right-10 size-28 rounded-full backdrop-blur-sm z-10 border-2 border-white"></div>
        <img
          src={book}
          className="absolute w-14 h-14 -bottom-3 right-17 z-20"
          alt="book"
        />
        <span className="absolute z-20 text-white -bottom-10 left-15">
          Download Free E-Book
        </span>
      </div>
    </main>
  );
};

export default Hero;
