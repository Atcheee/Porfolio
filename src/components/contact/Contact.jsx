import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pivshjh",
      "template_23fqird",
      form.current,
      "vy8sDrDcbVyn7ky2-"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option.icon" />
            <h4>Email</h4>
            <h5>erik.hammarqvist@iths.se</h5>
            <a href="mailto:erik.hammarqvist@iths.se">Send a message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option.icon" />
            <h4>LinkedIn</h4>
            <h5>Erik Hammarqvist</h5>
            <a href="https://www.linkedin.com/in/erik-hammarqvist-610aa7231/">
              View my profile
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
