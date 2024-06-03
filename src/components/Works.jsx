import React from "react";
import IMAGES from "../images/Images";
import { FaGithub } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

const projects = [
  {
    id: 1,
    image: IMAGES.Todo,
    description: "TODO List With React js and Tailwind CSS",
    githubLink: "https://github.com/AbelMathan/ToDo-List",
    liveDemoLink: "https://react-todo-list-ls.vercel.app/",
  },
  {
    id: 2,
    image: IMAGES.Portfolio,
    description: "Porfolio with React js and Tailwind CSS",
    githubLink: "https://github.com/AbelMathan/Mathan-Portfolio",
    liveDemoLink: "#",
  },
];

function Works() {
  return (
    <section
      name="works"
      className="w-full h-auto overflow-hidden bg-gradient-to-r from-[#000000] via-[#0D1F23] to-[#006883] p-10 md:p-20"
    >
      <h2 className="text-3xl font-bold mb-4 text-white pt-10 inline-block border-b-4 border-b-[#ffffff] ">
        Works
      </h2>
      <p className="text-white">
        Here are some of the{" "}
        <span className="font-black text-[#ffffff] text-[22px]">projects </span>
        I have worked on:
      </p>
      <div className="grid items-center justify-center justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-4 pt-5 ">
        {projects.map((project) => (
          <article
            key={project.id}
            className=" bg-[#69818D] w-[300px]  lg:w-96 lg:h-80 rounded-3xl border-gray-500 border-2  "
          >
            <img
              src={project.image}
              alt="project"
              className="p-2 rounded-3xl border-b-4 border-black"
            />
            <p className="px-2 text-white">{project.description}</p>
            <div className="flex justify-center gap-[5px] p-2 md: font-semibold">
              <a href={project.githubLink} target="new">
                <button className="px-8 lg:px-10 py-1 rounded-2xl bg-black text-white flex gap-1 items-center hover:scale-105">
                  <FaGithub />
                  <p className="">GitHub</p>
                </button>
              </a>
              <a href={project.liveDemoLink} target="new">
                <button className="px-10 lg:px-12 py-1 rounded-2xl text-black bg-white flex gap-1 items-center hover:scale-105">
                  <TbWorldSearch />
                  <p className="">Live</p>
                </button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Works;
