import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./SectionWrapper.module.css";
import * as textStyles from "../../../assets/styles/text-styles.css";

function SectionWrapper({
  children,
  sectionId,
  sectionTitle,
  extraSectionWrapperStyle,
}) {
  return (
    <div
      {...className(style.sectionWrapper, extraSectionWrapperStyle)}
      id={sectionId}
    >
      <h2 {...className(textStyles.titleText)}>{sectionTitle}</h2>
      {children}
    </div>
  );
}

export default SectionWrapper;
