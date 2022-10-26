import React from "react";
import { className } from "./helpers";
import * as shared from "./components/shared.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="wrapper">
      <div {...className(shared.section, shared.notFound)}>
        <h2 {...className(shared.title, shared.titlePrimary)}>oops!</h2>
        <p {...className(shared.sectionText, shared.paragraph)}>
          Looks like that page does&apos;nt exist!
        </p>
        <Link to="/" {...className(shared.btn, shared.btnDark)}>
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
