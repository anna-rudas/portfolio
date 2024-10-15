import React from "react";
import * as style from "./PageWrapper.module.css";
import { className } from "../../../utilities/helpers";

function PageWrapper({ children }) {
  return <div {...className(style.pageWrapper)}>{children}</div>;
}

export default PageWrapper;
