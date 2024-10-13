import React from "react";
import { className } from "../../utilities/helpers";
import * as shared from "../../assets/styles/shared.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";

function NotFound() {
  return (
    <div className="wrapper">
      <div {...className(shared.section, shared.notFound)}>
        <h2 {...className(shared.title, shared.titlePrimary)}>oops!</h2>
        <p {...className(shared.sectionText, shared.paragraph)}>
          Looks like that page doesn&apos;t exist!
        </p>
        <PrimaryButton buttonLinkInternal={"/"}>
          Back to home page
        </PrimaryButton>
      </div>
    </div>
  );
}

export default NotFound;
