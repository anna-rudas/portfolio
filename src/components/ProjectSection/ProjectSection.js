import React from "react";
import { className } from "../../helpers";
import style from "./ProjectSection.module.css";
import shared from "../shared.module.css";

function ProjectSection({ projectName, text, mobileScn, desktopScn }) {
  return (
    <div {...className(shared.section)} id={projectName}>
      <h2 {...className(shared.title, shared.titlePrimary)}>{projectName}</h2>
      <div {...className(style.projectDetailsCon)}>
        <div {...className(style.details)}>
          <p {...className(shared.paragraph)}>
            {text.map((currentParagraph) => {
              return (
                <>
                  {currentParagraph}
                  <br />
                </>
              );
            })}
          </p>
          <div {...className(style.btnsCon)}>
            <button {...className(shared.btn, shared.btnDark, style.btn)}>
              Github
            </button>
            <button {...className(shared.btn, shared.btnDark, style.btn)}>
              Website
            </button>
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
