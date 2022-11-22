import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/kilaniCD.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Robert Maxwell</h1>
        <h5 className="text-light">Fullstack Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
