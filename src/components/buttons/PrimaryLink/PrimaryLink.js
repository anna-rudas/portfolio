import React from "react";
import { className } from "../../../utilities/helpers";
import * as textStyles from "../../../assets/styles/text-styles.module.css";

function PrimaryLink({ to, onLinkClick, children }) {
  return (
    <a {...className(textStyles.primaryLink)} href={to} onClick={onLinkClick}>
      {children}
    </a>
  );
}

export default PrimaryLink;
