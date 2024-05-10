import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="footer--icon" />
      </a>

      <a href="https://lk.linkedin.com/in/udeepa-sandakal" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} className="footer--icon" />
      </a>
    </div>
  );
}

export default Footer;
