import React from "react";

const data = [
  { id: 1, content: "Submit intake Form" },
  { id: 2, content: "We do the search and curation for list of jobs" },
  { id: 3, content: "You approve, we do the tedious part (applying)" },
  { id: 4, content: "You get the interviews" },
];

export default function Work() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0649E7] mb-8">
          How we work?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center sm:text-left sm:items-start"
            >
              {/* number */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border-2 border-[#022183] rounded-full">
                <span className="text-xl sm:text-2xl font-semibold text-[#0649E7]">
                  {item.id}
                </span>
              </div>

              {/* Divider */}
              <div className="w-16 sm:w-24 h-[2px] bg-[#0649E7] my-4" />

              {/* Description */}
              <p className="text-[#0649E7] text-sm sm:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
