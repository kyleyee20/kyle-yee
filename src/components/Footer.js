import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footerSection">
        <div className="contactInfo">
          <div className="contact">
            <p className="info">
              Email_
              <FaEnvelope />
            </p>
            <p className="info">yeec327@gmail.com</p>
          </div>
          <div className="contact">
            <p className="info">
              Phone_
              <FaPhone />
            </p>
            <p className="info">(415) 734-1731</p>
          </div>
          <a
            href="https://www.linkedin.com/in/cam-yee/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact">
              <p className="info hover-scarlett">
                LinkedIn_
                <FaLinkedin />
              </p>
              <p className="info hover-scarlett">cam-yee</p>
            </div>
          </a>
          <a
            href="https://github.com/Cameron327"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact">
              <p className="info hover-scarlett">
                GitHub_
                <FaGithub />
              </p>
              <p className="info hover-scarlett">Cameron327</p>
            </div>
          </a>
        </div>

        <div className="copyright">
          <p className="text">© 2021 Cameron Yee</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
