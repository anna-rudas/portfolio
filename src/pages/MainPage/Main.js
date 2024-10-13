import React from "react";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/features/Footer";
import Header from "../../components/features/Header";
import Hero from "../../components/sections/Hero";
import MyProjects from "../../components/sections/MyProjects";
import { heroMain, navLinksMain } from "../../data/constants";

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
