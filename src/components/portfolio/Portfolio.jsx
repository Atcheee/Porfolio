import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src="#" alt="Screenshot From Project" />
          </div>
          <h3>Sinus</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Atcheee/Sinus"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src="#" alt="Screenshot From Project" />
          </div>
          <h3>E-Wallet</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Atcheee/E-Wallet"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
