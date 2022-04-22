/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Link } from "react-router-dom";

import "./FooterStyle.css"

export const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer__menu">
            <nav className="footer__menu__navigation">
              <ul className="footer__menu__ul">
                <li className="footer__menu__li">
                  <Link className="footer__menu__link" to="#">PREISE</Link>
                </li>
                <li className="footer__menu__li">
                  <Link className="footer__menu__link" to="#">REFERENZEN</Link>
                </li>
                <li className="footer__menu__li">
                  <Link className="footer__menu__link" to="#">KONTAKT</Link>
                </li>
              </ul>
            </nav>
          </div>
        <div className="footer__box__adress">
        <div className="footer__box__contact">
          <div className="footer__box__contect__opacity">
          <a href="#">Psotsrt, 45, 44890</a>
          <a href="#">hello@tratata.de</a>
          <a href="#">040380-33-44</a>
          </div>
         </div> 
        <div className="footer__box__email">
              <h2>SCHREIBEN SIE UNS!</h2>
            <form action="">
              <input className="footer__box__input__firma footer__placeholder" type="text" placeholder="Firma/Organisation" />
            <br />
            <div className="footer__box__email_telefon">
              <input className="footer__box__input footer__placeholder" type="text" placeholder="E-mail" />
              <input className="footer__box__input footer__placeholder" type="text" placeholder="Telefon" />
            </div>
              <br />
              <textarea className="footer__placeholder" name="textinput" id="" cols="30" rows="10" placeholder="Was ist Ihr Anliegen?"></textarea>
              <br />
              <button>SENDEN</button>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <p>2019 Cenius Web Agentur.Alle Rchte vorbehalten</p>
        </div>
    </footer>
  )
}
