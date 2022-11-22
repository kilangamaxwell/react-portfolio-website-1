import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/ips-projects.jpg";
import IMG2 from "../../assets/lit_rfid.png";
import IMG3 from "../../assets/pgmt.jpg";
import IMG4 from "../../assets/ecomm.jpg";
import IMG5 from "../../assets/socNet.jpg";
import IMG6 from "../../assets/hotelApp.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              GitHub
            </a>
            <a
              href="https://lit-rfid.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" className="img1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              GitHub
            </a>
            <a
              href="https://ips-globalprojects.ca/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/krmaxwell88/e-comm-app" className="btn">
              GitHub
            </a>
            <a
              href="https://kilangamaxwell.me/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/krmaxwell88/merng" className="btn">
              GitHub
            </a>
            <a
              href="https://kilangamaxwell.me/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/krmaxwell88/PROJECTMGMTAPP"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://kilangamaxwell.me/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              GitHub
            </a>
            <a
              href="https://kilangamaxwell.me"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
