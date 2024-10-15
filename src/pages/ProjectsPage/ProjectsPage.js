import React from "react";
import Header from "../../components/features/Header";
import ProjectSection from "../../components/templates/ProjectSection";
import Footer from "../../components/features/Footer";
import { navLinksProjects, projectDetails } from "../../data/constants";
import HeroProjects from "../../components/sections/HeroProjects/HeroProjects";
import PageWrapper from "../../components/templates/PageWrapper";

function ProjectsPage() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}

export default ProjectsPage;
