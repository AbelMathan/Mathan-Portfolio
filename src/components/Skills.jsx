import React from "react";
import IMAGES from "../images/Images";

const skills = [
  {
    id: 1,
    name: "HTML",
    img: IMAGES.Html,
  },
  {
    id: 2,
    name: "CSS",
    img: IMAGES.Css,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    img: IMAGES.javascript,
  },
  {
    id: 4,
    name: "REACT",
    img: IMAGES.react,
  },
  {
    id: 5,
    name: "TAILWIND",
    img: IMAGES.tailwind,
  },
  {
    id: 6,
    name: "GIT",
    img: IMAGES.git,
  },
  {
    id: 7,
    name: "GITHUB",
    img: IMAGES.github,
  },
  {
    id: 8,
    name: "FIGMA",
    img: IMAGES.figma,
  },
  {
    id: 9,
    name: "PHOTOSHOP",
    img: IMAGES.photoshop,
  },
  {
    id: 10,
    name: "CANVA",
    img: IMAGES.canva,
  },
  {
    id: 11,
    name: "C",
    img: IMAGES.C,
  },
  {
    id: 2,
    name: "JAVA",
    img: IMAGES.java,
  },
];

function Skills() {
  return (
    <section
      name="skills"
      className=" skills bg-[#AFB3B7] lg:h-screen w-full p-10 pt-20 md:p-20 overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-4 inline-block border-b-4 border-b-[#006782] ">
        Skills
      </h2>
      <p>
        These are the{" "}
        <span className="font-black text-[22px]">Tools & Technologies </span> I
        have worked with
      </p>
      <article className="flex justify-center items-center justify-items-center sm:overflow-hidden pt-6 ">
        <div className=" w-72 sm:w-80 md:w-[700PX] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-5 ">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" bg-[rgba(255,255,255,0.2)] hover:scale-105 hover:bg-white p-2 px-10 text-center font-bold rounded-md shadow-md hover:shadow-slate-300 border-2 "
            >
              <img src={skill.img} alt="img" />
              <p className="text-[10px] md:text-[16px]">{skill.name}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Skills;
