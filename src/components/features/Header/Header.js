import React, { useState } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Header.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import HamburgerIcon from "../../../assets/icons/HamburgerIcon";
import { Link } from "react-router-dom";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import PrimaryLink from "../../buttons/PrimaryLink/PrimaryLink";

function Header({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div {...className(style.header)}>
      <div {...className(style.navList)}>
        <Link
          to="/"
          {...className(textStyles.headerInitialsText)}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          AR
        </Link>
        <nav {...className(style.nav, isMenuOpen && style.mobileMenu)}>
          <ul {...className(style.linksCon)}>
            {navLinks.map((current) => {
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
            extraButtonStyle={`${style.button} ${style.buttonMobile}`}
            buttonLinkInternal="/CV-annarudas.pdf"
            isButtonToDownload={true}
            isDarkButtonStyle={false}
          >
            My CV
          </PrimaryButton>
        </nav>

        <PrimaryButton
          extraButtonStyle={style.button}
          buttonLinkInternal="/CV-annarudas.pdf"
          isButtonToDownload={true}
          isDarkButtonStyle={false}
        >
          My CV
        </PrimaryButton>
        <button
          {...className(style.btnHamburger)}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <HamburgerIcon {...className(style.iconHamburger)} />
        </button>
      </div>
    </div>
  );
}

export default Header;
