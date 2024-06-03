import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className=" w-full h-auto m-0 p-0 ">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
