import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./MyProjects.module.css";
import * as textStyles from "../../../assets/styles/text-styles.css";
import ProjectCard from "../../templates/ProjectCard";
import { myProjects, githubLink } from "../../../data/constants";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import SecondaryLink from "../../buttons/SecondaryLink/SecondaryLink";
import SectionWrapper from "../../templates/SectionWrapper/SectionWrapper";

function MyProjects() {
  return (
    <SectionWrapper sectionId="projects">
      <h2 {...className(textStyles.titleText)}>My Projects</h2>
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
      <div {...className(style.cardsCon)}>
        {myProjects.map((currentProject) => {
          return <ProjectCard {...currentProject} key={currentProject.name} />;
        })}
      </div>
    </SectionWrapper>
  );
}

export default MyProjects;
