import React from "react";
import Header from "../../components/features/Header";
import Hero from "../../components/sections/Hero";
import ProjectSection from "../../components/templates/ProjectSection";
import Footer from "../../components/features/Footer";
import {
  heroProjects,
  navLinksProjects,
  projectDetails,
} from "../../data/constants";

function Projects() {
  return (
    <div className="wrapper">
      <Header navLinks={navLinksProjects} />
      <Hero
        {...heroProjects}
        btnLink="/"
        isItMain={false}
        arrowLink="#memery"
      />
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
