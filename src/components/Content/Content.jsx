import React from "react";

import "./ContentStyle.css"

export const Content = () => {
  return (
    <main className="main">
      <div className="main__title">
        <h1>Referenzen</h1>
        <p>Von unseren Designern gestaltet, von unseren Entwicklern programmiert, von rnserem Team realisiert - in enger Abstimmung mit dem Kunden. Zum Festpreis.</p>
      </div>
      <section className="main__section">
        <div>
          <img src={require('../../img/')} alt="Food" />
          <h2>Webdesing Agentur</h2>
        </div>
        <article className="main__article">
          <h2>Webdesing Agentur</h2>
          <p>Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
        </article>
      </section>
      <section className="main__section">
          <article className="main__article">
            <h2>Webdesing Agentur</h2>
            <p>Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
          </article>
          <div>
            <img src="" alt="Girl" />
            <h2>Webdesing Agentur</h2>
          </div>
      </section>
      <section className="main__section">
          <div>
            <img src="" alt="planet" />
            <h2>Webdesing Agentur</h2>
          </div>
          <article className="main__article">
            <h2>Webdesing Agentur</h2>
            <p>Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
          </article>
      </section>
      <section className="main__section">
          <article className="main__article">
            <h2>Webdesing Agentur</h2>
            <p>Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
          </article>
          <div>
            <img src="" alt="Spring" />
            <h2>Webdesing Agentur</h2>
          </div>
       </section>
    </main>
  )
}