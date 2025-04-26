import React from "react";
import logo from "../assets/logo.png";

const navLniks = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About Us",
  },
  {
    id: 3,
    title: "Plans",
  },
  {
    id: 4,
    title: "Testimonials",
  },
  {
    id: 5,
    title: "Privacy Policy",
  },
  {
    id: 6,
    title: "More",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-linear-to-r from-cyan-500 to-blue-500 py-3 px-10 flex justify-between items-center">
      <div className="relative h-10 w-50">
        <img src={logo} className="absolute object-cover" />
      </div>

      <div>
        <ul className="flex gap-10 items-center">
          {navLniks.map((link) => (
            <li
              key={link.id}
              className="text-white font-medium hover:text-gray-500 duration-200 cursor-pointer"
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button className="bg-white text-blue-800 rounded-full py-2 px-5 cursor-pointer hover:bg-blue-500 hover:text-white duration-200">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
