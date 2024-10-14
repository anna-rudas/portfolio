import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Footer.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { footerLinks } from "../../../data/constants";

function Footer() {
  return (
    <div {...className(style.footer)}>
      <div {...className(style.iconCon)}>
        {footerLinks.map((current) => {
          return (
            <a
              key={current.link}
              {...className(style.icons)}
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
