import React from "react";
import { className } from "../../utilities/helpers";
import * as textStyles from "../../assets/styles/text-styles.module.css";
import * as style from "./PageNotFound.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";
import SectionWrapper from "../../components/templates/SectionWrapper/SectionWrapper";
import PageWrapper from "../../components/templates/PageWrapper";

function PageNotFound() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}

export default PageNotFound;
