import React from "react";

import { Link } from "react-router-dom";

import "./FooterStyle.css"

export const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="#">PREISE</Link>
                </li>
                <li>
                  <Link to="#">REFERENZEN</Link>
                </li>
                <li>
                  <Link to="#">KONTAKT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div>
          <h3>Psotsrt, 45, 44890</h3>
          <h3>hello@tratata.de</h3>
          <h3>040380-33-44</h3>
          </div>
          <div>
            <h2>SCHREIBEN SIE UNS!</h2>
            <form action="">
              <input type="text" placeholder="Firma/Organisation" />
              <br />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Telefon" />
              <br />
              <textarea name="textarea" id="" cols="30" rows="10"></textarea>
              <br />
              <button>SENDEN</button>
            </form>
          </div>
        </div>
        <article>
          <p>2019 Cenius Web Agentur.Alle Rchte vorbehalten</p>
        </article>
      </section>
    </footer>
  )
}

