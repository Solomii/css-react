/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { FiChevronDown } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./HeaderStyle.css"

export const Header= () => {
  return (
    <header className="header">
      <div className="header__box">
        <div className="header__logo"><span className="header__logo__span" href="/">GENIUS</span></div>
        <div className="header__menu">
          <nav className="header__menu__list">
            <ul className="header__menu__list__ul">
              <li className="header__menu__list__li">
                <Link className="header__link" to="#">PREISE</Link>
              </li>
              <li className="header__menu__list__li">
                <Link className="header__link" to="#">REFERENZEN</Link>
              </li>
              <li className="header__menu__list__li">
                <Link className="header__link" to="#">KONTAKT</Link>
              </li>
            </ul>
            </nav>
          <div className="header__dropdown">
            <button className="header__dropbtn">EN <FiChevronDown/></button>
            <div className="header__dropdown__content">
             <a href="#">1</a>
             <a href="#">2</a>
             <a href="#">3</a>
          </div>
         </div>
        </div>
      </div>
    </header>
  )
}
