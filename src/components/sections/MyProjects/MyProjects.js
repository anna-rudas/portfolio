import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./MyProjects.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import ProjectCard from "../../templates/ProjectCard";
import { myProjects, githubLink } from "../../../data/constants";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

function MyProjects() {
  return (
    <div {...className(shared.section)} id="projects">
      <h2 {...className(shared.title, shared.titlePrimary)}>My Projects</h2>
      <p {...className(shared.sectionText, shared.paragraph)}>
        Here are some of the projects I have developed. You can find out more
        about them by clicking the link below, or check out my{" "}
        <a
          {...className(shared.links)}
          target="_blank"
          rel="noreferrer"
          href={githubLink}
        >
          {"Github"}
        </a>{" "}
        to see what I&apos;m currently working on.
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
    </div>
  );
}

export default MyProjects;
