import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./PrimaryLink.module.css";

function PrimaryLink({ to, onLinkClick, children }) {
  return (
    <a {...className(style.link)} href={to} onClick={onLinkClick}>
      {children}
    </a>
  );
}

export default PrimaryLink;
