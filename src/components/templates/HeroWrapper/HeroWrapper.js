import React, { useEffect } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./HeroWrapper.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
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
          <span {...className(shared.paragraphHero)}>{textBeforeTitle}</span>
        )}
        <h1 {...className(shared.title, shared.titleHero)}>{title}</h1>
        <span {...className(shared.paragraphHero, shared.sectionText)}>
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
