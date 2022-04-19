import React from "react";

import { Link } from "react-router-dom";

import "./HeaderStyle.css"

export const Header= () => {
  return (
    <header className="genius__header">
      <div className="genius__header__box">
        <div className="genius__header__logo"><a className="genius__header__logo__a" href="/">GENIUS</a></div>
        <div className="genius__header__menu">
          <nav className="genius__header__menu__list">
            <ul className="genius__header__menu__list__ul">
              <li className="genius__header__menu__list__li">
                <Link className="genius__header__link" to="#">PREISE</Link>
              </li>
              <li className="genius__header__menu__list__li">
                <Link className="genius__header__link" to="#">REFERENZEN</Link>
              </li>
              <li className="genius__header__menu__list__li">
                <Link className="genius__header__link" to="#">KONTAKT</Link>
              </li>
            </ul>
          </nav>
          <button>EN</button>
        </div>
      </div>
    </header>
  )
}
