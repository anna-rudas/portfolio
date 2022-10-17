import React from "react";
import { className } from "../../helpers";
import style from "./MyProjects.module.css";
import shared from "../shared.module.css";
import ProjectCard from "../ProjectCard";
import { myProjects } from "../../constants";

function MyProjects() {
  return (
    <div {...className(shared.section)}>
      <h2 {...className(shared.title, shared.titlePrimary)}>My Projects</h2>
      <p {...className(shared.sectionText, shared.paragraph)}>
        Here are some of the projects I have developed. You can find out more
        about them by clicking the link below, or check out my github to see
        what I&apos;m currently working on.
      </p>
      <button {...className(shared.btn, shared.btnDark)}>
        More about my projects
      </button>
      <div {...className(style.cardsCon)}>
        {myProjects.map((currentProject) => {
          return <ProjectCard {...currentProject} key={currentProject.name} />;
        })}
      </div>
    </div>
  );
}

export default MyProjects;
