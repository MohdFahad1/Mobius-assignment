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
      "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    imgSrc: star,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="px-32 py-20 ">
      <div className="bg-[#F8FAFF] p-10 rounded-2xl">
        <h1 className="text-[#0649E7] text-3xl font-medium mb-10">
          Why Choose Us ?
        </h1>
        <div className="flex gap-10 justify-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-col w-[300px] border-[#0649E7] border-2 rounded-3xl overflow-hidden h-auto p-5"
            >
              <img
                src={item.imgSrc}
                alt={item.heading}
                height={45}
                width={45}
              />
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
