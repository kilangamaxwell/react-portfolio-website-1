import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck />
              <p>
                Implementation of design systems, standardized UI frameworks and
                iterative product development.
              </p>
            </li>
            <li>
              <BiCheck />
              <p>
                Adoption of established best practices around user testing and
                research to ensure that user needs are understood and
                communicated
              </p>
            </li>
            <li>
              <BiCheck />
              <p>
                Interpretation of abstract descriptions or concepts into
                meaningful solutions.
              </p>
            </li>
            <li>
              <BiCheck />
              <p>
                Facilitation of product vision through researching, conceiving,
                sketching, prototyping and user testing experiences.
              </p>
            </li>
            <li>
              <BiCheck />
              <p>
                Collaboration with stakeholders to develope strategic design and
                UX decisions related to new and existing functions and features.
              </p>
            </li>
          </ul>
        </article>

        {/** END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck />
              <p>
                Profficient with SASS/SCSS/LESS and other CSS pre-processors.
              </p>
            </li>
            <li>
              <BiCheck />
              <p>
                Experience with content management systems and content
                management frameworks (CMS/CMF) primarily PHP-based.
              </p>
            </li>
            <li>
              <BiCheck />
              <p>Design, development and implementation of web applications</p>
            </li>
            <li>
              <BiCheck />
              <p>
                Development of efficient, accurate, and smart usable front-ends
                to interface with back-end web services for large data queries.
              </p>
            </li>
            <li>
              <BiCheck />
              <p>
                Design of Website architecture and determination of hardware and
                software requirements
              </p>
            </li>
            <li>
              <BiCheck />
              <p>
                Troubleshooting of issues relating to customized applications
              </p>
            </li>
            <li>
              <BiCheck />
              <p>Application of SEO methodologies for site visibility.</p>
            </li>
          </ul>
        </article>

        {/** END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
