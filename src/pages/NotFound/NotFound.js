import React from "react";
import { className } from "../../utilities/helpers";
import * as textStyles from "../../assets/styles/text-styles.css";
import * as style from "./NotFound.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";
import SectionWrapper from "../../components/templates/SectionWrapper/SectionWrapper";

function NotFound() {
  return (
    <div className="wrapper">
      <SectionWrapper
        extraSectionWrapperStyle={style.pageNotFoundContainer}
        sectionTitle="oops!"
      >
        <p {...className(textStyles.sectionText, textStyles.normalText)}>
          Looks like that page doesn&apos;t exist!
        </p>
        <PrimaryButton buttonLinkInternal={"/"}>
          Back to home page
        </PrimaryButton>
      </SectionWrapper>
    </div>
  );
}

export default NotFound;
