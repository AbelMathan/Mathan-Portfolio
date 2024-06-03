import React from "react";
import IMAGES from "../images/Images";
import { IoPersonOutline, IoFilmOutline } from "react-icons/io5";
import { FaPhone, FaHeadphonesAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { DiPhotoshop } from "react-icons/di";
function About() {
  return (
    <section
      name="about"
      className=" h-[80%] lg:h-screen w-full  bg-gradient-to-r from-[#000000] via-[#0D1F23] to-[#006883] text-white overflow-hidden "
    >
      <img src={IMAGES.wave} alt="wave" className="rotate-180 w-full" />

      <div className="relative  lg:bottom-24 xl:bottom-40 flex place-content-center items-center justify-center ">
        <img
          src={IMAGES.aboutBg}
          alt="about-image"
          className=" relative w-[500px] xl:w-[600px] lg:left-10 xl:left-0 hidden lg:block  "
        />
        <main className=" relative w-full lg:w-[600px] p-10 ">
          <p className=" font-bold text-3xl mb-5 inline-block border-b-4 border-b-[#ffffff] ">
            About Me
          </p>
          <article className="  mb-5">
            <p className=" text-justify">
              Passionate frontend developer dedicated to crafting exceptional
              web experiences. With expertise in HTML, CSS, JavaScript, ReactJS,
              and Tailwind CSS, I prioritize user satisfaction through dynamic
              and visually stunning interfaces. My journey began with a
              curiosity for impactful digital experiences, and I'm committed to
              pushing the boundaries of web development with innovation.
            </p>
          </article>

          <article className=" mb-5 md:text-[20px] flex ">
            <ul>
              <li className="flex gap-3 items-center">
                <IoPersonOutline />
                <div className="flex w-96 gap-3 md:gap-10 ">
                  <p>Name</p> <p>:</p> <p>Mathan R</p>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <FaPhone />
                <div className="flex w-96 gap-3 md:gap-10 ">
                  <p>Phone</p>
                  <p>:</p>
                  <a href="tel:+919384989216" className="hover:border-b-[1px]">
                    <p>+91 9384989216</p>
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <TfiEmail />
                <div className="flex w-96 gap-3 md:gap-10 ">
                  <p>Email</p>
                  <p>:</p>
                  <a
                    href="mailto:rsmathan2@gmail.com"
                    className="hover:border-b-[1px]"
                  >
                    <p>rsmathan2@gmail.com</p>
                  </a>
                </div>
              </li>
            </ul>
          </article>

          <article className="">
            <p className="text-2xl font-semibold text-gray-400">My Interests</p>
            <ul className="md:flex  gap-10 justify-items-center items-center   ">
              <li className="flex gap-4 items-center">
                <MdOutlineTravelExplore />
                <p className="">Travel </p>
              </li>
              <li className="flex gap-4 items-center">
                <IoFilmOutline />
                <p className=""> Movies </p>
              </li>
              <li className="flex gap-4 items-center">
                <FaHeadphonesAlt />
                <p className=""> Music </p>
              </li>
              <li className="flex gap-4 items-center">
                <DiPhotoshop />
                <p className="">Designing</p>
              </li>
            </ul>
          </article>
        </main>
      </div>
    </section>
  );
}

export default About;
