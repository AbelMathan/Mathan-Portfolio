import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import IMAGES from "../images/Images";

function Home() {
  return (
    <section
      id="hero"
      name="home"
      style={{ backgroundImage: `URL(${IMAGES.homeBg})` }}
      className="Home w-full h-auto md:flex  md:py-28 md:pb-0 md:px-10 md:justify-center md:justify-items-center  md:items-center"
    >
      <article className="text-center p-5 pb-0 md:w-[55%] pt-28 md:pt-0 md:p-0">
        <h1 className="text-5xl font-black mb-4">
          Hello, I'm{" "}
          <span className="italic text-[#006782] .meow-script-regular">
            MATHAN
          </span>
        </h1>
        <h2 className="text-2xl font-bold ">
          Frontend Developer | UI/UX Enthusiast
        </h2>
        <div className="pt-6 justify-start font-semibold">
          <a href="#">
            <button className="bg-[#006782] hover:bg-[#1c4c58] p-2 px-3  text-white  rounded-l-full">
              Download CV
            </button>
          </a>
          <Link
            to="contact"
            spy={true}
            duration={1000}
            delay={100}
            smooth="easeInOutQuint"
            activeClass="active"
          >
            <button className="text-[#006782] hover:text-[#1c4c58] p-[6.5px] px-3 ml-1 border-2 border-[#006782] rounded-r-full ">
              Get In Touch
            </button>
          </Link>
        </div>
      </article>

      <article className="w-full flex justify-center p-5 md:w-[30%] ">
        <div className="">
          <img
            className=" relative w-60 sm:w-96 rounded-full bg-[#006782]"
            src={IMAGES.sample}
            alt="image here "
          />
        </div>
      </article>

      <article className=" text-4xl flex  gap-6 w-full justify-center md:justify-items-center md:flex-col md:items-center md:w-[15%] ">
        <a href="https://www.linkedin.com/in/mathan-r-00803a242/">
          <FaLinkedin className=" hover:text-[#006782] cursor-pointer hover:scale-125" />
        </a>
        <a href="https://github.com/AbelMathan">
          <FaGithub className=" hover:text-[#006782] cursor-pointer hover:scale-125" />
        </a>
        <a href="mailto:rsmathan2@gmail.com">
          <TfiEmail className=" hover:text-[#006782] cursor-pointer hover:scale-125" />
        </a>
        <a href="tel:+919384989216">
          <FaPhone className=" bg-black  rounded-full text-white p-1 hover:bg-[#006782] cursor-pointer hover:scale-125" />
        </a>
      </article>
    </section>
  );
}

export default Home;
