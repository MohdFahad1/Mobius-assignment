import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "./Button";

const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Plans" },
  { id: 4, title: "Testimonials" },
  { id: 5, title: "Privacy Policy" },
  { id: 6, title: "More" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" z-50 bg-gradient-to-r from-[#E0D7FF] via-[#3B82F6] to-[#020B3A] px-6 md:px-10 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0 h-10 w-auto">
        <img src={logo} alt="MobiusEngine" className="h-full object-contain" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-white font-medium hover:text-gray-200 transition cursor-pointer"
          >
            {link.title}
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <Button
          className="bg-white text-[#022183] hover:bg-[#022183] hover:text-white duration-200"
          arrow
        >
          Get Started
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 text-white focus:outline-none"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 z-50 left-0 inset-x-0 bg-gradient-to-r from-[#E0D7FF] via-[#3B82F6] to-[#020B3A] shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="text-white font-medium hover:text-gray-200 transition cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </li>
            ))}
            <li className="pt-4">
              <Button
                className="w-full bg-white text-[#022183] justify-center hover:bg-[#022183] hover:text-white duration-200"
                arrow
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
