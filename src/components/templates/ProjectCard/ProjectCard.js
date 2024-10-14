import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./ProjectCard.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

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
          <span {...className(textStyles.subtitleText)}>{title}</span>
          <span {...className(textStyles.normalText)}>{intro}</span>
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
        <PrimaryButton extraButtonStyle={style.button}>
          Go to website
        </PrimaryButton>
      </div>
    </a>
  );
}

export default ProjectCard;
