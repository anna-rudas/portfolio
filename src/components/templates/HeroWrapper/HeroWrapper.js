import React, { useEffect } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./HeroWrapper.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

function HeroWrapper({
  textBeforeTitle,
  title,
  textAfterTitle,
  children,
  arrowIconLink,
}) {
  const convertStyle = () => {
    let height = window.innerHeight;
    document.documentElement.style.setProperty("--hero-height", `${height}px`);
  };

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
    <div {...className(style.heroWrapper)}>
      <div {...className(style.heroBackground)}></div>
      <div>
        {textBeforeTitle && (
          <span {...className(textStyles.heroNormalText)}>
            {textBeforeTitle}
          </span>
        )}
        <h1 {...className(textStyles.heroTitleText)}>{title}</h1>
        <span {...className(textStyles.heroNormalText, textStyles.sectionText)}>
          {textAfterTitle}
        </span>
        {children}
        <div {...className(style.iconContainer)}>
          <a href={arrowIconLink} {...className(style.arrowLink)}>
            <ArrowIcon {...className(style.icon)} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroWrapper;
