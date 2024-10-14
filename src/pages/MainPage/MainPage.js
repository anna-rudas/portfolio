import React from "react";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/features/Footer";
import Header from "../../components/features/Header";
import MyProjects from "../../components/sections/MyProjects";
import { navLinksMain } from "../../data/constants";
import HeroMain from "../../components/sections/HeroMain/HeroMain";

function MainPage() {
  return (
    <div className="wrapper">
      <Header navLinks={navLinksMain} />
      <HeroMain />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
