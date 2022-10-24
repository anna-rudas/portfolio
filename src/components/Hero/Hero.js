import React from "react";
import { className } from "../../helpers";
import * as style from "./Hero.module.css";
import * as shared from "../shared.module.css";
import { Link } from "react-router-dom";
import ArrowIcon from "../../icons/ArrowIcon";

function Hero({ before, main, intro, btnText, btnLink }) {
  return (
    <div {...className(style.hero)}>
      <span {...className(shared.paragraphHero)}>{before}</span>
      <h1 {...className(shared.title, shared.titleHero)}>{main}</h1>
      <span {...className(shared.paragraphHero, shared.sectionText)}>
        {intro}
      </span>
      <Link to={btnLink} {...className(shared.btn, shared.btnLight)}>
        {btnText}
      </Link>
      <div {...className(style.iconCon)}>
        <ArrowIcon {...className(style.icon)} />
      </div>
    </div>
  );
}

export default Hero;
