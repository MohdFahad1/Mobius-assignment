import React from "react";
import trust from "../../assets/trust.png";
import pfp from "../../assets/pfp.png";
import star from "../../assets/star.png";

const data = [
  {
    id: 1,
    heading: "Tried, Tested, Trusted",
    content:
      "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
    imgSrc: trust,
  },
  {
    id: 2,
    heading: "Real People, Real Help",
    content:
      "A hands-on team that actually cares — guiding you through every twist in your career path.",
    imgSrc: pfp,
  },
  {
    id: 3,
    heading: "Beat the Line",
    content:
      "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    imgSrc: star,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="px-4 sm:px-6 md:px-32 py-20">
      <div className="bg-[#F8FAFF] p-6 sm:p-10 rounded-2xl">
        <h1 className="text-[#0649E7] text-3xl sm:text-4xl font-medium mb-10 text-center md:text-left">
          Why Choose Us?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start w-full sm:w-[300px] border-2 border-[#0649E7] rounded-3xl overflow-hidden p-5"
            >
              <img src={item.imgSrc} alt={item.heading} className="h-12 w-12" />
              <h3 className="text-xl font-semibold text-[#022183] mt-5 mb-3">
                {item.heading}
              </h3>
              <p className="text-[#022183]">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
