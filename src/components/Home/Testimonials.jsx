import React from "react";
import play from "../../assets/play.png";

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
    <div className="px-40 py-20">
      <h1 className="text-[#0649E7] text-3xl font-medium mb-10">
        What our clients have to say
      </h1>
      <div className="flex gap-10 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-col bg-[#0649E7] w-[300px] border-[#0649E7] border-2 rounded-2xl overflow-hidden h-auto pb-5"
          >
            <div className="bg-white rounded-b-2xl h-[200px] flex items-center justify-center">
              <div className="bg-[#0649E7] size-10 rounded-full flex items-center justify-center">
                <img src={play} alt="Play Button" className="h-5 w-5" />
              </div>
            </div>
            <p className="text-lg text-white pl-2 pr-5 mt-5">{item.content}</p>
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
    </div>
  );
};

export default Testimonials;
