import React, { useState } from "react";
import { className } from "../../helpers";
import style from "./Header.module.css";
import shared from "../shared.module.css";
import { navLinksHome } from "../../constants";
import HamburgerIcon from "../../icons/HamburgerIcon";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div {...className(style.header)}>
      <div {...className(style.navList)}>
        <a href="." {...className(style.initials)}>
          AR
        </a>
        <nav {...className(style.nav, isMenuOpen && style.mobileMenu)}>
          <ul {...className(style.linksCon)}>
            {navLinksHome.map((current) => {
              return (
                <li key={current}>
                  <a
                    {...className(style.link)}
                    href={`#${current}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {current}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            {...className(
              shared.btn,
              shared.btnLight,
              style.btn,
              style.btnMobile
            )}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            My CV
          </button>
        </nav>
        <button {...className(shared.btn, shared.btnLight, style.btn)}>
          My CV
        </button>
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
