import React, { useState } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Header.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import HamburgerIcon from "../../../assets/icons/HamburgerIcon";
import { Link } from "react-router-dom";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import PrimaryLink from "../../buttons/PrimaryLink/PrimaryLink";

function Header({ navigationLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div {...className(style.headerContainer)}>
      <div {...className(style.headerContent)}>
        <Link
          to="/"
          {...className(textStyles.headerInitialsText)}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          AR
        </Link>
        <nav
          {...className(
            style.navigationContainer,
            isMenuOpen && style.mobileNavigationContainer
          )}
        >
          <ul {...className(style.navigationLinksContainer)}>
            {navigationLinks.map((current) => {
              return (
                <li key={current}>
                  <PrimaryLink
                    to={`#${current}`}
                    onLinkClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {current}
                  </PrimaryLink>
                </li>
              );
            })}
          </ul>
          <PrimaryButton
            extraButtonStyle={`${style.headerButton} ${style.mobileHeaderButton}`}
            buttonLinkInternal="/CV-annarudas.pdf"
            isButtonToDownload={true}
            isDarkButtonStyle={false}
          >
            My CV
          </PrimaryButton>
        </nav>

        <PrimaryButton
          extraButtonStyle={`${style.headerButton} ${style.desktopHeaderButton}`}
          buttonLinkInternal="/CV-annarudas.pdf"
          isButtonToDownload={true}
          isDarkButtonStyle={false}
        >
          My CV
        </PrimaryButton>
        <button
          {...className(style.hamburgerButton)}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <HamburgerIcon {...className(style.hamburgerIcon)} />
        </button>
      </div>
    </div>
  );
}

export default Header;
