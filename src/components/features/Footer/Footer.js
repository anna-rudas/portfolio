import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Footer.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { footerLinks } from "../../../data/constants";

function Footer() {
  return (
    <div {...className(style.footerContainer)}>
      <div {...className(style.footerIconsContainer)}>
        {footerLinks.map((current) => {
          return (
            <a
              key={current.link}
              {...className(style.footerIcon)}
              target="_blank"
              href={current.link}
              rel="noreferrer"
            >
              {current.icon}
            </a>
          );
        })}
      </div>
      <span {...className(textStyles.footerText)}>
        Designed and built by Anna Rudas
      </span>
    </div>
  );
}

export default Footer;
