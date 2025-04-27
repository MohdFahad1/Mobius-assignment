import React from "react";
import play from "../../assets/play.png";
import Button from "../common/Button";

const data = [
  {
    id: 1,
    content:
      "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 2,
    content:
      "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 3,
    content:
      "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-40 py-20">
      <h1 className="text-[#0649E7] text-3xl font-medium mb-10 text-center lg:text-left">
        What our clients have to say
      </h1>

      {/* cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#0649E7] w-full sm:w-[300px] border-[#0649E7] border-2 rounded-3xl overflow-hidden h-auto pb-5"
          >
            <div className="bg-white rounded-b-3xl h-[200px] flex items-center justify-center">
              <div className="bg-[#0649E7] w-10 h-10 rounded-full flex items-center justify-center">
                <img src={play} alt="Play Button" className="h-5 w-5" />
              </div>
            </div>
            <p className="text-lg text-white px-5 mt-5">{item.content}</p>
            <div className="flex justify-end px-5">
              <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 mt-5">
                <button className="text-[#0649E7] rounded-full text-3xl">
                  ↗
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* bottom buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4 sm:gap-20">
        <Button
          arrow
          className="border-2 border-[#0649E7] text-[#0649E7] w-full sm:w-auto text-center flex items-center justify-center"
        >
          More customer testimonials
        </Button>
        <Button
          arrow
          className="bg-[#0649E7] text-white w-full sm:w-auto text-center flex items-center justify-center"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
