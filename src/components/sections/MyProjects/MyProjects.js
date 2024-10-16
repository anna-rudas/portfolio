import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./MyProjects.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import ProjectCard from "../../templates/ProjectCard";
import { projectSummaries, githubLink } from "../../../data/constants";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import SecondaryLink from "../../buttons/SecondaryLink/SecondaryLink";
import SectionWrapper from "../../templates/SectionWrapper/SectionWrapper";

function MyProjects() {
  return (
    <SectionWrapper sectionId="projects" sectionTitle="My Projects">
      <p {...className(textStyles.sectionText, textStyles.normalText)}>
        Here are some of the projects I have developed. You can find out more
        about them by clicking the link below, or check out my{" "}
        <SecondaryLink to={githubLink}>Github</SecondaryLink> to see what
        I&apos;m currently working on.
      </p>

      <PrimaryButton
        buttonLinkInternal={"/projects"}
        onButtonClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        More about my projects
      </PrimaryButton>
      <div {...className(style.projectSummariesContainer)}>
        {projectSummaries.map((currentProject) => {
          return <ProjectCard {...currentProject} key={currentProject.name} />;
        })}
      </div>
    </SectionWrapper>
  );
}

export default MyProjects;
