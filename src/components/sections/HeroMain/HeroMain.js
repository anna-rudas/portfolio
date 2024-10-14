import React from "react";
import HeroWrapper from "../../templates/HeroWrapper/HeroWrapper";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

function HeroMain() {
  return (
    <HeroWrapper
      textBeforeTitle="Hello, my name is"
      title="Anna Rudas"
      textAfterTitle="I am a software developer based in Germany."
      arrowIconLink="#about"
    >
      <PrimaryButton
        buttonLinkInternal={"CV-annarudas.pdf"}
        isDarkButtonStyle={false}
        isButtonToDownload={true}
      >
        Download my CV
      </PrimaryButton>
    </HeroWrapper>
  );
}

export default HeroMain;
