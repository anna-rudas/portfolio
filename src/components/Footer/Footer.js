import React from "react";
import { className } from "../../helpers";
import style from "./Footer.module.css";
import { footerLinks } from "../../constants";

function Footer() {
  return (
    <div {...className(style.footer)}>
      <div {...className(style.iconCon)}>
        {footerLinks.map((current) => {
          return (
            <a
              key={current.ref}
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
      <span {...className(style.credit)}>Designed and built by Anna Rudas</span>
    </div>
  );
}

export default Footer;
