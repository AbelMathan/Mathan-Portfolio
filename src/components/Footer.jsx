import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <section className="bg-[#0D1F23] w-full h-44 text-white flex flex-col items-center">
      <h1 className="md:text-3xl p-5 font-black">Let's Connect! </h1>
      <article className=" w-72 md:w-96 flex justify-around">
        <a href="https://wa.me/9384989216">
          <IoLogoWhatsapp className="text-2xl opacity-70 hover:text-green-500 hover:opacity-100 cursor-pointer hover:scale-125" />
        </a>
        <a href="https://www.linkedin.com/in/mathan-r-00803a242/">
          <FaLinkedin className="text-2xl opacity-70 hover:text-blue-500 hover:opacity-100 cursor-pointer hover:scale-125" />
        </a>
        <a href="https://github.com/AbelMathan">
          <FaGithub className="text-2xl opacity-70  hover:opacity-100 cursor-pointer hover:scale-125" />
        </a>
        <a href="mailto:rsmathan2@gmail.com">
          <TfiEmail className="text-2xl opacity-70 hover:text-yellow-500 hover:opacity-100 cursor-pointer hover:scale-125" />
        </a>
        <a href="tel:+919384989216">
          <FaPhone className="text-2xl opacity-70 hover:text-red-500 hover:opacity-100 cursor-pointer hover:scale-125" />
        </a>
      </article>
      <p className="p-5 opacity-70">2024 &copy; Mathan. All Rights Reserved</p>
    </section>
  );
};

export default Footer;
