import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./SecondaryLink.module.css";

function SecondaryLink({ to, children }) {
  return (
    <a {...className(style.link)} target="_blank" rel="noreferrer" href={to}>
      {children}
    </a>
  );
}

export default SecondaryLink;
