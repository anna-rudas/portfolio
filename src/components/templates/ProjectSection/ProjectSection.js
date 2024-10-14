import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./ProjectSection.module.css";
import * as textStyles from "../../../assets/styles/text-styles.css";
import * as shared from "../../../assets/styles/shared.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

function ProjectSection({
  projectName,
  text,
  mobileScn,
  desktopScn,
  github,
  website,
}) {
  return (
    <SectionWrapper sectionId={projectName} sectionTitle={projectName}>
      <div {...className(style.projectDetailsCon)}>
        <div {...className(style.details)}>
          <p {...className(textStyles.normalText)}>
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
            <PrimaryButton
              extraButtonStyle={style.button}
              buttonLinkExternal={github}
            >
              Github
            </PrimaryButton>

            <PrimaryButton
              extraButtonStyle={style.button}
              buttonLinkExternal={website}
            >
              Website
            </PrimaryButton>
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
    </SectionWrapper>
  );
}

export default ProjectSection;
