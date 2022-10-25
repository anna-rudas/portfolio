import React, { useEffect } from "react";
import { className } from "../../helpers";
import * as style from "./Hero.module.css";
import * as shared from "../shared.module.css";
import { Link } from "react-router-dom";
import ArrowIcon from "../../icons/ArrowIcon";

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
      <span {...className(shared.paragraphHero)}>{before}</span>
      <h1 {...className(shared.title, shared.titleHero)}>{main}</h1>
      <span {...className(shared.paragraphHero, shared.sectionText)}>
        {intro}
      </span>
      {isItMain ? (
        <a
          href={btnLink}
          download="CV-annarudas.pdf"
          {...className(shared.btn, shared.btnLight)}
        >
          {btnText}
        </a>
      ) : (
        <Link to={btnLink} {...className(shared.btn, shared.btnLight)}>
          {btnText}
        </Link>
      )}
      <div {...className(style.iconCon)}>
        <a href={arrowLink} {...className(style.arrowLink)}>
          <ArrowIcon {...className(style.icon)} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
