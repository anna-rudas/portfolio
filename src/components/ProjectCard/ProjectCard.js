import React from "react";
import { className } from "../../helpers";
import * as style from "./ProjectCard.module.css";
import * as shared from "../shared.module.css";

function ProjectCard({ name, title, intro, skillTags, projectImg, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      {...className(style.cardCon)}
    >
      <div {...className(style.projectName)}>
        <div {...className(style.name)}>{name}</div>
      </div>
      <div {...className(style.projectBody)}>
        <div {...className(style.projectDesc)}>
          <span {...className(shared.title, shared.titleSecondary)}>
            {title}
          </span>
          <span {...className(shared.paragraph)}>{intro}</span>
          <ul {...className(shared.tagsCon)}>
            {skillTags.map((currentTag) => {
              return (
                <li key={currentTag} {...className(shared.skillTags)}>
                  {currentTag}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{ backgroundImage: "url(" + projectImg + ")" }}
          {...className(style.projectImg)}
        ></div>
      </div>
      <div {...className(style.btnCon)}>
        <div {...className(shared.btn, style.btn)}>Go to website</div>
      </div>
    </a>
  );
}

export default ProjectCard;
