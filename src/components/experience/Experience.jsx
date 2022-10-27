import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiSvelte } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiFigma } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { BsKanbanFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience_container">
				<div className="experience_frontend">
					<h3>Frontend Development</h3>
					<div className="experience_content">
						<article className="experience_details">
							<div>
								<ImHtmlFive className="experience_details-icon" />
								<h4>HTML</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<SiCss3 className="experience_details-icon" />
								<h4>CSS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<FaBootstrap className="experience_details-icon" />
								<h4>Bootstrap</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<IoLogoJavascript className="experience_details-icon" />
								<h4>JavaScript</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<IoLogoVue className="experience_details-icon" />
								<h4>Vue</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<FaReact className="experience_details-icon" />
								<h4>React</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<SiSvelte className="experience_details-icon" />
								<h4>Svelte</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<SiTypescript className="experience_details-icon" />
								<h4>TypeScript</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience_backend">
					<h3>Backend Development</h3>
					<div className="experience_content">
						<article className="experience_details">
							<div>
								<FaNodeJs className="experience_details-icon" />
								<h4>Node.JS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<AiOutlineConsoleSql className="experience_details-icon" />
								<h4>SQL</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<AiOutlineConsoleSql className="experience_details-icon" />
								<h4>NoSQL</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<SiSvelte className="experience_details-icon" />
								<h4>SvelteKit</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience_backend">
					<h3>Other</h3>
					<div className="experience_content">
						<article className="experience_details">
							<div>
								<SiFigma className="experience_details-icon" />
								<h4>Figma</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<FaGit className="experience_details-icon" />
								<h4>Version control with Git</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<div>
								<DiScrum className="experience_details-icon" />{" "}
								<BsKanbanFill className="experience_details-icon" />
								<h4>Scrum and Kanban</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
