import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import { heroProjects, navLinksProjects, projectDetails } from "./constants";

function Projects() {
  return (
    <div className="wrapper">
      <Header navLinks={navLinksProjects} />
      <Hero {...heroProjects} btnLink="/" />
      {projectDetails.map((currentProject) => {
        return (
          <ProjectSection
            key={currentProject.projectName}
            {...currentProject}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Projects;
