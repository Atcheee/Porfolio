import React from "react";
import "./portfolio.css";

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio_container">
				<article className="portfolio_item">
					<h3>
						Feel free to checkout my github profile to see what I'm currently
						working on.
					</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/Atcheee"
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
