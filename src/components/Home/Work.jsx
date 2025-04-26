import React from "react";

const data = [
  {
    id: 1,
    content: "Submit intake Form",
  },
  {
    id: 2,
    content: "We do the search and curation for list of jobs",
  },
  {
    id: 3,
    content: "You approve, we do the tedious part (applying)",
  },
  {
    id: 4,
    content: "You get the interviews",
  },
];

const Work = () => {
  return (
    <div className="flex items-center justify-center bg-white py-10 ">
      <div>
        <h1 className="text-3xl font-medium text-[#0649E7] mb-16">
          How we work?
        </h1>
        <div className="flex items-center justify-center gap-22">
          {data.map((item) => (
            <div key={item.id} className="w-[200px] h-[150px]">
              <div className="rounded-full border-2 w-14 h-14 p-3 flex items-center justify-center border-[#022183]">
                <h2 className="text-3xl font-medium">{item.id}</h2>
              </div>
              <div className="h-[1.5px] w-26 bg-[#0649E7] mt-3 mb-4"></div>
              <p className="text-[#0649E7]">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
