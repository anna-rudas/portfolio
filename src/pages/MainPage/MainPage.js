import React from "react";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/features/Footer";
import Header from "../../components/features/Header";
import MyProjects from "../../components/sections/MyProjects";
import { mainPageNavigationLinks } from "../../data/constants";
import HeroMain from "../../components/sections/HeroMain/HeroMain";
import PageWrapper from "../../components/templates/PageWrapper";

function MainPage() {
  return (
    <PageWrapper>
      <Header navigationLinks={mainPageNavigationLinks} />
      <HeroMain />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </PageWrapper>
  );
}

export default MainPage;
