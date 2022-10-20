import React from "react";
import { className } from "../../helpers";
import style from "./Footer.module.css";
import LinkedInIcon from "../../icons/LinkedInIcon";
import EnvelopeIcon from "../../icons/EnvelopeIcon";
import GithubIcon from "../../icons/GithubIcon";

function Footer() {
  return (
    <div {...className(style.footer)}>
      <div {...className(style.iconCon)}>
        <a href=".">
          <LinkedInIcon {...className(style.icons)} />
        </a>
        <a href=".">
          <EnvelopeIcon {...className(style.icons)} />
        </a>
        <a href=".">
          <GithubIcon {...className(style.icons)} />
        </a>
      </div>
      <span {...className(style.credit)}>Designed and built by Anna Rudas</span>
    </div>
  );
}

export default Footer;
