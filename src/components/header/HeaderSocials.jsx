import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiFreecodecamp } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/kilanga-maxwell-fullstackdeveloper/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/krmaxwell88" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.freecodecamp.org/fcc59af0dbe-37e4-49bd-b774-05b6e2518da7"
        target="_blank"
        rel="noreferrer"
      >
        <SiFreecodecamp />
      </a>
    </div>
  );
};

export default HeaderSocials;
