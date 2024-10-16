import React from "react";
import { Link } from "react-router-dom";
import { className } from "../../../utilities/helpers";
import * as style from "./PrimaryButton.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";

function PrimaryButton({
  buttonLinkInternal,
  buttonLinkExternal,
  children,
  isDarkButtonStyle = true,
  extraButtonStyle,
  onButtonClick,
  isButtonToDownload = false,
  isButtonDisabled,
}) {
  if (buttonLinkInternal) {
    return (
      <Link
        download={isButtonToDownload}
        target={isButtonToDownload ? "_blank" : ""}
        to={buttonLinkInternal}
        {...className(
          style.button,
          textStyles.primaryButtonText,
          isDarkButtonStyle ? style.buttonDark : style.buttonLight,
          extraButtonStyle
        )}
        onClick={onButtonClick}
      >
        {children}
      </Link>
    );
  }

  if (buttonLinkExternal) {
    return (
      <a
        href={buttonLinkExternal}
        target="_blank"
        rel="noreferrer"
        {...className(
          style.button,
          textStyles.primaryButtonText,
          isDarkButtonStyle ? style.buttonDark : style.buttonLight,
          extraButtonStyle
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      disabled={isButtonDisabled}
      type="submit"
      {...className(
        style.button,
        textStyles.primaryButtonText,
        isDarkButtonStyle ? style.buttonDark : style.buttonLight,
        extraButtonStyle
      )}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
