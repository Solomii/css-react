import React from "react";

import "./ContentStyle.css"

export const Content = () => {
  return (
    <main className="main">
      <div className="main__title">
        <div className="main__title__background"></div>
        <div>
          <h1>Referenzen</h1>
          <p>Von unseren Designern gestaltet, von unseren Entwicklern programmiert, von rnserem Team realisiert - in enger Abstimmung mit dem Kunden. Zum Festpreis.</p>
        </div>
      </div>

      <section className="main__section">
        <div>
          <img src={require("../../img/Screen Shot 2019-11-20 at 13.13 1.jpg")} alt="Food" />
          <h2>Webdesing Agentur</h2>
        </div>
        <article className="main__article">
           <div className="main__article__wrapper">
            <h2 className="main__article__title">Webdesing Agentur</h2>
            <p className="main__article__title__p">Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
          </div>  
        </article>
      </section>
      <section className="main__section">
        <article className="main__article">
          <div className="main__article__wrapper">
            <h2 className="main__article__title">Webdesing Agentur</h2>
            <p className="main__article__title__p">Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
          </div>
        </article>
        <div>
          <img src={require("../../img/Screen Shot 2019-11-20 at 13.14 1.png")} alt="Girl" />
          <h2>Webdesing Agentur</h2>
        </div>
      </section>
      <section className="main__section">
          <div>
            <img src={require("../../img/Screen Shot 2019-11-20 at 13.14 2.png")} alt="planet" />
            <h2>Webdesing Agentur</h2>
          </div>
          <article className="main__article">
            <div className="main__article__wrapper">
              <h2 className="main__article__title">Webdesing Agentur</h2>
              <p className="main__article__title__p">Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
            </div>
          </article>
      </section>
      <section className="main__section">
          <article className="main__article">
            <div className="main__article__wrapper">
             <h2 className="main__article__title">Webdesing Agentur</h2>
             <p className="main__article__title__p">Wir sind ein wirksames Team von Programmiern und Designer und bieten professionelle Dienstlei stungen rund um's Thema Webdesing und Online-Marketing an. Seint 2006 kultivieren wir</p>
            </div>
          </article>
          <div>
            <img src={require("../../img/Screen Shot 2019-11-20 at 13.15 1.png")} alt="Spring" />
            <h2>Webdesing Agentur</h2>
          </div>
       </section>
    </main>
  )
}