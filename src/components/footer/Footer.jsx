import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
      <footer>
        <span className="footer_logo">Footer</span>

        <ul className="permalinks">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/erik-hammarqvist-610aa7231/" aria-label="LinkedIn">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Atcheee" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </footer>
  );
};

export default Footer;
