import React from "react";
import { className } from "../../helpers";
import style from "./Hero.module.css";
import shared from "../shared.module.css";

function Hero() {
  return (
    <div {...className(style.hero)}>
      <span {...className(shared.paragraphHero)}>Hello, my name is</span>
      <h1 {...className(shared.title, shared.titleHero)}>Anna Rudas</h1>
      <span {...className(shared.paragraphHero, shared.sectionText)}>
        I am a junior frontend developer based in Germany, who doesn&apos;t mind
        making mistakes because she knows she can learn from them.
      </span>
      <button {...className(shared.btn, shared.btnLight)}>
        Download my CV
      </button>
    </div>
  );
}

export default Hero;
