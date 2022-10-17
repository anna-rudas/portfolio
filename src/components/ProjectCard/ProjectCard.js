import React from "react";
import { className } from "../../helpers";
import style from "./ProjectCard.module.css";
import shared from "../shared.module.css";
import projectImgVoyage from "../../images/projects/voyage.png";
import { skillTagsVoyage } from "../../constants";

function ProjectCard() {
  return (
    <div {...className(style.cardCon)}>
      <div {...className(style.projectName)}>
        <div {...className(style.name)}>Voyage</div>
      </div>
      <div {...className(style.projectBody)}>
        <div {...className(style.projectDesc)}>
          <span {...className(shared.title, shared.titleSecondary)}>
            Landing page
          </span>
          <span {...className(shared.paragraph)}>
            A landing page for the fictional travel business Voyage.
          </span>
          <ul {...className(shared.tagsCon)}>
            {skillTagsVoyage.map((currentTag) => {
              return (
                <li key={currentTag} {...className(shared.skillTags)}>
                  {currentTag}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{ backgroundImage: "url(" + projectImgVoyage + ")" }}
          {...className(style.projectImg)}
        ></div>
      </div>
    </div>
  );
}

export default ProjectCard;
