import React from "react";
import logo from "../../assets/logo.png";
import Button from "./Button";

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
    <nav className="bg-transparent top-0 bg-gradient-to-r from-[#E0D7FF] via-[#3B82F6] to-[#020B3A]  py-3 px-10 flex justify-between items-center inset-x-0 z-50">
      <div className="flex justify-between w-full items-center">
        <div className="relative h-10 w-50">
          <img
            src={logo}
            className="absolute object-cover cursor-pointer"
            alt="logo"
          />
        </div>

        <div>
          <ul className="flex gap-10 items-center">
            {navLniks.map((link) => (
              <li
                key={link.id}
                className="text-white font-medium cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Button className="bg-white text-[#022183]">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
