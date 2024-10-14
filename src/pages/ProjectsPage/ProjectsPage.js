import React from "react";
import Header from "../../components/features/Header";
import ProjectSection from "../../components/templates/ProjectSection";
import Footer from "../../components/features/Footer";
import { navLinksProjects, projectDetails } from "../../data/constants";
import HeroProjects from "../../components/sections/HeroProjects/HeroProjects";

function ProjectsPage() {
  return (
    <div className="wrapper">
      <Header navLinks={navLinksProjects} />
      <HeroProjects />
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

export default ProjectsPage;
