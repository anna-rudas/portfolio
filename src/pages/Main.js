import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MyProjects from "../components/MyProjects";
import { heroMain, navLinksMain } from "../data/constants";

function Main() {
  return (
    <div className="wrapper">
      <Header navLinks={navLinksMain} />
      <Hero
        {...heroMain}
        btnLink="CV-annarudas.pdf"
        isItMain={true}
        arrowLink="#about"
      />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
