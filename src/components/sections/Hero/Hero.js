import React, { useEffect } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Hero.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";

const convertStyle = () => {
  let height = window.innerHeight;
  document.documentElement.style.setProperty("--hero-height", `${height}px`);
};

function Hero({ before, main, intro, btnText, btnLink, isItMain, arrowLink }) {
  useEffect(() => {
    let width = null;

    const handleResize = () => {
      if (window.innerWidth !== width) {
        width = window.innerWidth;
        convertStyle();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div {...className(style.hero)}>
      <div {...className(style.heroBg)}></div>
      <div>
        <span {...className(shared.paragraphHero)}>{before}</span>
        <h1 {...className(shared.title, shared.titleHero)}>{main}</h1>
        <span {...className(shared.paragraphHero, shared.sectionText)}>
          {intro}
        </span>
        {isItMain ? (
          <PrimaryButton
            buttonLinkInternal={btnLink}
            isDarkButtonStyle={false}
            isButtonToDownload={true}
          >
            {btnText}
          </PrimaryButton>
        ) : (
          <PrimaryButton
            buttonLinkInternal={btnLink}
            isDarkButtonStyle={false}
            onButtonClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {btnText}
          </PrimaryButton>
        )}
        <div {...className(style.iconCon)}>
          <a href={arrowLink} {...className(style.arrowLink)}>
            <ArrowIcon {...className(style.icon)} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
