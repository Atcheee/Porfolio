import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <button
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineHome />
                <span>Home</span>
            </button>
            <button
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
                <span>About</span>
            </button>
            <button
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BiBook />
                <span>Experience</span>
            </button>
            <button
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <BsBriefcase />
                <span>Portfolio</span>
            </button>
            <button
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <BiMessageSquareDetail />
                <span>Contact</span>
            </button>
        </nav>
    );
};

export default Nav;
