import React from "react";
import { useRef } from "react";
import IMAGES from "../images/Images";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoHome } from "react-icons/io5";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendMsg = (e) => {
    e.preventDefault();

    const name = form.current["name"].value.trim();
    const email = form.current["email"].value.trim();
    const subject = form.current["subject"].value.trim();
    const message = form.current["message"].value.trim();

    var regname = /^[a-zA-Z\s]*$/;
    var regemail = /^\S+@\S+\.\S+$/;

    // alert Messages
    if (name === "" || email === "" || subject === "" || message === "") {
      Swal.fire({
        title: "Oops..",
        text: "Please, Fill all the Fields!  ",
        icon: "error",
      });
      return;
    } else if (name.trim() === "" || regname.test(name) === false) {
      Swal.fire({
        title: "Oops..",
        text: "Please, Enter the Correct Name!",
        icon: "error",
      });
      return;
    } else if (email.trim() === "" || regemail.test(email) === false) {
      Swal.fire({
        title: "Oops..",
        text: "Please, Enter the Valid Email!",
        icon: "error",
      });
      return;
    } else if (subject.trim() === "") {
      Swal.fire({
        title: "Oops..",
        text: "Please Enter the Subject!",
        icon: "error",
      });
      return;
    } else if (message === "") {
      Swal.fire({
        title: "Oops..",
        text: "Please, Enter the Message!",
        icon: "error",
      });
      return;
    }

    emailjs
      .sendForm("service_c2det58", "template_3xchrmy", form.current, {
        publicKey: "Xw10f8q8cpjoVzSOe",
      })
      .then(
        () => {
          console.log("message sent!");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email Sent Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email not Sent!, Please try again",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );

    form.current.reset();
  };
  return (
    <section
      name="contact"
      style={{
        backgroundImage: `URL(${IMAGES.contactBg})`,
      }}
      className={`contact  w-full  lg:h-screen p-10  lg:p-20 `}
    >
      <h2 className="text-3xl font-bold pb-3 pt-5 inline-block border-b-4 border-b-[#006782] ">
        Contact Me
      </h2>
      <p>
        If you'd like to{" "}
        <span className="font-black text-[#000000] text-[22px]">
          Get in touch{" "}
        </span>
        feel free to reach out:
      </p>
      <main className="md:flex justify-items-center p-5 xl:p-20 lg:mt-28 xl:mt-10 ">
        <article className="w-full xl:w-[40%]">
          <div className=" flex gap-5 xl:text-2xl  mb-4">
            <FaPhone className="w-7 md:w-10 h-full text-[#006782]" />
            <p>
              <span className="font-black">Call Me </span> <br /> +91 9384989216
            </p>
          </div>
          <div className="flex gap-5 xl:text-2xl  mb-4 ">
            <TfiEmail className="w-7 md:w-10 h-full text-[#006782] " />
            <p>
              <span className="font-black">Email </span> <br />{" "}
              rsmathan2@gmail.com
            </p>
          </div>
          <div className="flex gap-5 xl:text-2xl  mb-4 ">
            <IoHome className="w-7 md:w-10 h-full text-[#006782]" />
            <p>
              <span className="font-black">Location </span> <br />
              5/56, Church street, Maruthamputhur, <br /> Alangulam, Tenkasi
            </p>
          </div>
        </article>

        <article className="w-full xl:w-[60%] ">
          <form
            ref={form}
            onSubmit={sendMsg}
            className="flex flex-col justify-center justify-items-center items-center gap-3"
          >
            <div className="lg:flex lg:gap-3 min-[321px]:px-10 ">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="lg:w-[264px] mb-3 lg:mb-0 h-10 px-10 border-2 border-gray-500 bg-transparent"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="lg:w-[264px] h-10 px-10 border-2 border-gray-500 bg-transparent"
              />
            </div>
            <input
              type="text-area"
              placeholder="Subject"
              name="subject"
              className="lg:w-[540px] h-10 px-10 border-2 border-gray-500 bg-transparent"
            />
            <input
              type="text-area"
              placeholder="Message"
              name="message"
              className="lg:w-[540px] h-10 px-10 pb-28  pt-4 border-2 border-gray-500 bg-transparent"
            />
            <button
              type="submit"
              value={"Send Message"}
              className="lg:w-40 p-2 lg:ml-96 bg-[#006782] hover:bg-[#1c4c58] text-white cursor-pointer rounded-full   "
            >
              Send Message
            </button>
          </form>
        </article>
      </main>
    </section>
  );
}

export default Contact;
