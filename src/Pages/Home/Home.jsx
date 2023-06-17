import React from "react";
import "./Home.css";
import { FiCode } from "react-icons/fi";
import { FaCode, FaGithubSquare } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

import profilPic from "../../assets/images/profilePic.jpg";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <>
      <heading className="top-nav">
        <div className="left-nav">
          <p>AMIT THAKUR</p>
        </div>
        <div className="right-nav">
          <div className="home">
            <AiFillHome />
            <p>
              <a href="/">Home</a>
            </p>
          </div>
          <div className="skils">
            <AiFillHome />
            <p>
              <a href="/">Skills</a>
            </p>
          </div>
          <div className="projects">
            <AiFillHome />
            <p>
              <a href="/projects">Projects</a>
            </p>
          </div>
          <div className="contact">
            <AiFillHome />
            <p>
              <a href="/contact">Contact</a>
            </p>
          </div>
        </div>
      </heading>

      <section id="side-bar-icons">
        <div className="social-icons">
          <FaGithubSquare size={50} color="#FF33E1" padding="0" />
          <ImLinkedin size={43} color="#4633FF" className="linkdin" />
          <RiInstagramFill size={54} color="#181615" />
        </div>
      </section>

      <section className="main-section">
        <div className="left-section">
          <p>Hi I' am </p>
          <p className="user-name">AMIT THAKUR</p>
          <p>& </p>
          <p></p>
          <p>I am a</p>
          <p className="user-work"> Web Developer</p>

          <div className="contact-btn">
            <a href="#">Contact Me</a>
          </div>
        </div>
        <div className="right-section">
          <div>
            <img src={profilPic} alt="" />
          </div>
        </div>
      </section>
      <Skills />
      <div className="footer"></div>
    </>
  );
};

export default Home;
