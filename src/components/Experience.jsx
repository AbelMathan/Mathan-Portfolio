import React from "react";

const Experience = () => {
  return (
    <section
      name="experience"
      className="lg:h-screen w-full p-10 md:p-20 bg-[#AFB3B7]"
    >
      <h2 className="text-3xl font-bold pt-10 inline-block border-b-4 border-b-[#006782] ">
        Experience
      </h2>

      <main className="w-full flex flex-col lg:flex-row gap-5 items-strech pt-10 xl:pt-20">
        <article className="bg-white py-10 px-10 rounded-2xl shadow-lg ">
          <p className=" text-red-500 opacity-50"> Onsite</p>
          <p className="text-2xl font-bold ">WEB DEVELOPER(React JS)-Intern</p>
          <p className="font-semibold text-[#006782]">Digisailor- June 2023</p>
          <ul className="pt-5 list-disc pl-5">
            <li>
              Learned to design and implement responsive and user-friendly
              front-end interfaces using modern frameworks like React and
              Tailwind CSS.
            </li>
            <li>
              Gained hands-on experience in version control and project
              management tools. and User Interface Creation tools Like Figma and
              Photoshop for Designing Components.
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/12r-gM8nmFkLZe4rqxJaKppWPlN5lF7Tt/view?usp=drive_link"
            target="new"
          >
            <button className="mt-5 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full font-semibold text-white">
              View Certificate
            </button>
          </a>
        </article>

        <article className="bg-white py-10 px-10 rounded-2xl shadow-lg ">
          <p className=" text-red-500 opacity-50"> Online</p>
          <p className="text-2xl font-bold ">FULL STACK DEVELOPER-Intern</p>
          <p className="font-semibold text-[#006782]">
            EY-AICTE-EDUNET - Feb-Apr 2024
          </p>
          <ul className="pt-5 list-disc pl-5">
            <li>
              Throughout the internship, I embraced challenges head-on,
              troubleshooting bugs, and optimizing code performance
            </li>
            <li>
              Working with Python frameworks like Django and Flask, I gained
              hands-on experience in backend development, crafting robust APIs
              and database architectures.
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1qpX8_hUS_CHulxv4RA-FsATlmOUIZljP/view?usp=drive_link"
            target="new"
          >
            <button className="mt-5 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full font-semibold text-white">
              View Certificate
            </button>
          </a>
        </article>
      </main>
    </section>
  );
};

export default Experience;
