import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { heroProjects, navLinksProjects } from "./constants";

function Projects() {
  return (
    <div className="wrapper">
      <Header navLinks={navLinksProjects} />
      <Hero {...heroProjects} btnLink="/" />
    </div>
  );
}

export default Projects;
