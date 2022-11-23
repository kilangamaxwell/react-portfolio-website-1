import React from "react";
import "./about.css";
import hoody from "../../assets/roberto.jpg";
import { FaAward } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={hoody} alt="hoody" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Accomplishments</h5>
              <small>2 client projects deployed</small>
            </article>

            <article className="about__card">
              <BsFillGearFill className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Bonus</h5>
              <small>Continuous site maintenance</small>
            </article>
          </div>

          <p>
            Junior Fullstack Software Developer with competencies in design,
            development, testing and database management of software systems.
            Professional experience with working in various platforms and
            programming languages. Conversant with modern development tools and
            procedures. Highly capable of effective self-management as well as
            in collaboration with productive teams.
          </p>

          <a href="#contact" className="btn about-btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
