import React from "react";
import Profile from "../assets/Profile_Pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <div className="info">
      <img src={Profile} alt="Udeepa Sandakal" className="info--image" />
      <h1 className="info--fullname">Udeepa Sandakal</h1>
      <h5 className="info--role">Self Learn Full-Stack Developer</h5>
      <a className="info--link" href="" target="blank">
        KeeDev.io
      </a>

      <div className="info--buttons">
        <address>
          <a href="udeepasd@gmail.com">
            <button className="btn btn--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>

        <a href="https://lk.linkedin.com/in/udeepa-sandakal" target="blank">
          <button className="btn btn--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
