import React from "react";
import Button from "./common/Button";

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

const plans = [
  {
    title: "April Promo",
    price: "$35",
    note: "/week",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
  },
  {
    title: "Starter",
    price: "$50",
    note: "/week",
    badge: "Popular",
    features: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story-focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
  },
  {
    title: "Plus",
    price: "$100",
    note: "/week",
    features: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="px-4 sm:px-6 md:px-20 lg:px-32 py-20 bg-white">
      <h2 className="text-3xl font-semibold text-[#0649E7] mb-12 text-center lg:text-left">
        Job Application Service Plans
      </h2>

      {/* Top three plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="relative w-full sm:w-[300px] border border-[#0649E7] rounded-2xl p-6 sm:p-8 flex flex-col h-full"
          >
            {plan.badge && (
              <span className="absolute top-0 right-6 sm:right-8 transform -translate-y-1/2 bg-[#e5edfe] border-[#0649E7] border-2 text-[#0649E7] text-xs font-bold uppercase px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            )}

            <h3 className="text-xl font-medium text-[#022183]">{plan.title}</h3>
            <div className="mt-4 mb-6 flex items-baseline">
              <span className="text-4xl font-bold text-[#0649E7]">
                {plan.price}
              </span>
              <span className="ml-1 text-lg text-gray-600">{plan.note}</span>
            </div>

            <ul className="space-y-4 flex-1">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon />
                  <p className="ml-3 text-gray-700">{feat}</p>
                </li>
              ))}
            </ul>

            <Button
              arrow
              className="mt-8 bg-[#0649E7] text-white font-medium rounded-lg hover:bg-blue-700 flex items-center justify-center py-2"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>

      {/* Advance plan banner */}
      <div className="mt-16 bg-[#0649E7] text-white rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-2xl mb-6 lg:mb-0 text-center lg:text-left">
          <h3 className="text-2xl font-semibold">Advance</h3>
          <p className="mt-1 text-gray-200">
            Top-tier support for serious job hunters:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start">
              <CheckIcon />
              <span className="ml-3">Everything in Plus</span>
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <span className="ml-3">
                20 fully customized applications/week
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <span className="ml-3">Custom Resumes & Cover Letters</span>
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <span className="ml-3">Help with complex job searches</span>
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <span className="ml-3">
                Access to senior resume experts, Founder & Exec Coaches
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">$150</div>
          <div className="text-lg mb-4">/week</div>
          <Button
            arrow
            className="bg-white text-[#0649E7] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
