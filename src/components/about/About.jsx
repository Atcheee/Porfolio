import React from "react";
import "./about.css";
import ME from '../../assets/zoomed-in.jpg'
import { FaAward } from "react-icons/fa";
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
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year of studing</small>
            </article>
            <article className="about_card">
              <BsBook className="about_icon" />
              <h5>Learning</h5>
              <small>Still learning new stuff</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque nemo consectetur numquam perspiciatis corporis adipisci, ea ipsam, sequi autem error ratione repellat rerum quibusdam id aut eius exercitationem reprehenderit!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
