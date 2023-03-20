import React from "react";
import "./about.css";
import ME from "../../assets/zoomed-in.jpg";
import { FiUsers } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img src={ME} alt="About Me Img" />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<article className="about_card">
							<FiUsers className="about_icon" />
							<h5>School</h5>
							<small>IT-Högskolan, Stockholm</small>
						</article>
						<article className="about_card">
							<BsBook className="about_icon" />
							<h5>Learning</h5>
							<small>
								Currently, <br></br> TypeScript & SvelteKit
							</small>
						</article>
					</div>
					<p>
						I'm a 20 y/o guy who loves everything computer related. I spend most
						of my free time doing anything from programming for school or a
						project I'm making my self to playing video games with my friends
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
