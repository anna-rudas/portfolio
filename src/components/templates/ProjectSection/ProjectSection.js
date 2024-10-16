import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./ProjectSection.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

function ProjectSection({
  projectName,
  projectDetails,
  mobileScreenshot,
  desktopScreenshot,
  githubLink,
  websiteLink,
}) {
  return (
    <SectionWrapper sectionId={projectName} sectionTitle={projectName}>
      <div {...className(style.projectSectionContainer)}>
        <div {...className(style.projectDetailsContent)}>
          <p {...className(textStyles.normalText)}>
            {projectDetails.map((currentParagraph, index) => {
              return (
                <React.Fragment key={index}>
                  {currentParagraph}
                  <br />
                </React.Fragment>
              );
            })}
          </p>
          <div {...className(style.projectLinksContainer)}>
            <PrimaryButton
              extraButtonStyle={style.projectLink}
              buttonLinkExternal={githubLink}
            >
              Github
            </PrimaryButton>

            <PrimaryButton
              extraButtonStyle={style.projectLink}
              buttonLinkExternal={websiteLink}
            >
              Website
            </PrimaryButton>
          </div>
        </div>
        <div {...className(style.mobileScreenshotContainer)}>
          <img
            {...className(
              style.mobileScreenshotContent,
              shared.frame,
              shared.frameRight
            )}
            src={mobileScreenshot}
            alt=""
          />
        </div>
      </div>
      <div {...className(style.desktopScreenshotContainer)}>
        <img
          {...className(
            style.desktopScreenshotContent,
            shared.frame,
            shared.frameLeft
          )}
          src={desktopScreenshot}
          alt=""
        />
      </div>
    </SectionWrapper>
  );
}

export default ProjectSection;
