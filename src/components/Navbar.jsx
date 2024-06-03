import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile and Tablet Navbar */}
      <nav className="bg-[rgba(255,255,255,0.5)] p-4 flex justify-between items-center w-full z-50 fixed top-0 md:hidden">
        <h1 className="font-primary font-bold text-[#006782]">Mathan</h1>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Sidebar for Mobile and Tablet */}
      <div
        className={`md:hidden fixed w-full bg-[rgba(255,255,255,1)] text-black  rounded-2xl py-4 z-40 transition-all duration-300 ${
          isOpen ? "top-16" : "-top-full"
        }`}
      >
        <ul className="text-center text-[18px] font-semibold">
          <li className="my-2   border-b-[1px] ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li className="my-2   border-b-[1px] ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li className="my-2   border-b-[1px] ">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              activeClass="active"
            >
              Skills
            </Link>
          </li>
          <li className="my-2   border-b-[1px] ">
            <Link
              to="works"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              activeClass="active"
            >
              Works
            </Link>
          </li>
          <li className="my-2   border-b-[1px] ">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              activeClass="active"
            >
              Experience
            </Link>
          </li>
          <li className="my-2   border-b-[1px] ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Regular Navbar for Larger Screens */}
      <nav className="bg-[rgba(256,256,256,0.75)] p-4  justify-between items-center pl-20 pr-20 fixed w-full z-50 hidden md:flex top-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link
          to="logo"
          spy={true}
          duration={1000}
          delay={50}
          smooth="easeInOutQuint"
        >
          <p className=" font-primary font-bold text-[#006782] text-2xl">
            Mathan
          </p>
        </Link>
        <ul className="flex justify-end text-[18px] font-semibold">
          <li className="mx-4 cursor-pointer ">
            <Link
              to="home"
              spy={true}
              duration={1000}
              delay={50}
              smooth="easeInOutQuint"
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Link
              to="about"
              spy={true}
              duration={1000}
              delay={50}
              smooth="easeInOutQuint"
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Link
              to="skills"
              spy={true}
              duration={1000}
              delay={50}
              smooth="easeInOutQuint"
              activeClass="active"
            >
              Skills
            </Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Link
              to="works"
              spy={true}
              duration={1000}
              delay={50}
              smooth="easeInOutQuint"
              activeClass="active"
            >
              Works
            </Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Link
              to="experience"
              spy={true}
              duration={1000}
              delay={50}
              smooth="easeInOutQuint"
              activeClass="active"
            >
              Experience
            </Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Link
              to="contact"
              spy={true}
              duration={1000}
              delay={50}
              smooth="easeInOutQuint"
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
