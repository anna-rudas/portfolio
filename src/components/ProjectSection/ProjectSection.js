import React from "react";
import { className } from "../../utilities/helpers";
import * as style from "./ProjectSection.module.css";
import * as shared from "../../assets/styles/shared.module.css";

function ProjectSection({
  projectName,
  text,
  mobileScn,
  desktopScn,
  github,
  website,
}) {
  return (
    <div {...className(shared.section)} id={projectName}>
      <h2 {...className(shared.title, shared.titlePrimary)}>{projectName}</h2>
      <div {...className(style.projectDetailsCon)}>
        <div {...className(style.details)}>
          <p {...className(shared.paragraph)}>
            {text.map((currentParagraph, index) => {
              return (
                <React.Fragment key={index}>
                  {currentParagraph}
                  <br />
                </React.Fragment>
              );
            })}
          </p>
          <div {...className(style.btnsCon)}>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              {...className(shared.btn, shared.btnDark, style.btn)}
            >
              Github
            </a>
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              {...className(shared.btn, shared.btnDark, style.btn)}
            >
              Website
            </a>
          </div>
        </div>
        <div {...className(style.mobileScnCon)}>
          <img
            {...className(style.mobileScn, shared.frame, shared.frameRight)}
            src={mobileScn}
            alt=""
          />
        </div>
      </div>
      <div {...className(style.desktopScnCon)}>
        <img
          {...className(style.desktopScn, shared.frame, shared.frameLeft)}
          src={desktopScn}
          alt=""
        />
      </div>
    </div>
  );
}

export default ProjectSection;
