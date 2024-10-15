import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./ProjectCard.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import InfoTags from "../InfoTags/InfoTags";

function ProjectCard({ name, title, intro, skillTags, projectImg, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      {...className(style.cardCon)}
    >
      <div {...className(style.projectName)}>
        <div {...className(style.name, textStyles.primaryButtonText)}>
          {name}
        </div>
      </div>
      <div {...className(style.projectBody)}>
        <div {...className(style.projectDesc)}>
          <span {...className(textStyles.subtitleText)}>{title}</span>
          <span {...className(textStyles.normalText)}>{intro}</span>
          <InfoTags tagList={skillTags} />
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
