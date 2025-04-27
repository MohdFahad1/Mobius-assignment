import React from "react";
import Button from "../common/Button";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 flex-shrink-0 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
      clipRule="evenodd"
    />
  </svg>
);

const services = [
  {
    title: "Resume Rebuild",
    price: "$1000",
    note: "one time",
    features: [
      "3× 30-min coaching",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co-founder (ex-Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ yrs experience",
      "Resume Rebuild portfolio available upon request",
    ],
  },
  {
    title: "Interview Prep",
    price: "$500",
    note: "one time",
    features: [
      "2× 45-min live coaching with our co-founder",
      "Real-time, practical feedback",
      "Build clarity, empathy & executive presence",
      "For senior and leadership roles – technical & non-technical",
    ],
  },
];

export default function ResumeCoaching() {
  return (
    <section className="px-4 sm:px-6 md:px-32 py-20 bg-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0649E7]">
          Resume Building & Coaching
        </h2>
        <p className="mt-2 text-base text-[#0649E7]">
          Let’s talk about where you’re headed — and how your resume can get you
          there. Schedule a call to get started.
        </p>
      </div>

      {/* Two service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {services.map((s) => (
          <div
            key={s.title}
            className="border-2 border-[#0649E7] rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-[#022183]">{s.title}</h3>
            <div className="mt-4 mb-6 flex items-baseline">
              <span className="text-4xl font-bold text-[#0649E7]">
                {s.price}
              </span>
              <span className="ml-2 text-base text-gray-600">{s.note}</span>
            </div>
            <ul className="space-y-4 flex-1">
              {s.features.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-gray-700">{feat}</span>
                </li>
              ))}
            </ul>
            <Button
              arrow
              className="mt-8 bg-[#0649E7] text-white font-medium w-fit rounded-full py-3 px-6  hover:bg-white hover:border-[#0649E7] border-2 hover:text-[#0649E7] duration-200"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#0649E7] rounded-2xl px-4 sm:px-6 md:px-32 py-10 flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left">
        <div className="text-white uppercase text-xl sm:text-2xl">
          STILL HAVE DOUBTS?
        </div>
        <span className="text-white text-2xl sm:text-3xl font-bold">
          Contact Us
        </span>
        <Button
          arrow
          className="bg-white text-[#0649E7] rounded-full h-14 w-14 text-2xl flex hover:bg-[#0649E7] hover:text-white duration-200 items-center justify-center cursor-pointer hover:border-white border-2"
        />
      </div>
    </section>
  );
}
