import React, { useState } from "react";
import { className } from "../../helpers";
import * as style from "./Header.module.css";
import * as shared from "../shared.module.css";
import HamburgerIcon from "../../icons/HamburgerIcon";
import { Link } from "react-router-dom";

function Header({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div {...className(style.header)}>
      <div {...className(style.navList)}>
        <Link to="/" {...className(style.initials)}>
          AR
        </Link>
        <nav {...className(style.nav, isMenuOpen && style.mobileMenu)}>
          <ul {...className(style.linksCon)}>
            {navLinks.map((current) => {
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
          <a
            {...className(
              shared.btn,
              shared.btnLight,
              style.btn,
              style.btnMobile
            )}
            download="CV-annarudas.pdf"
            href="/CV-annarudas.pdf"
          >
            My CV
          </a>
        </nav>
        <a
          {...className(shared.btn, shared.btnLight, style.btn)}
          download="CV-annarudas.pdf"
          href="/CV-annarudas.pdf"
        >
          My CV
        </a>
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
