import React from "react";
import HeroWrapper from "../../templates/HeroWrapper/HeroWrapper";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

function HeroProjects() {
  return (
    <HeroWrapper
      title="My Projects"
      textAfterTitle="To see what I'm currently working on, take a look around on my Github."
      arrowIconLink="#memery"
    >
      <PrimaryButton
        buttonLinkInternal="/"
        isDarkButtonStyle={false}
        onButtonClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Back to home page
      </PrimaryButton>
    </HeroWrapper>
  );
}

export default HeroProjects;
