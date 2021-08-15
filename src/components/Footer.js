import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className="footerSection">
        <div className="contactInfo">
          <div className="contact">
            <p className="info">Email_<FaEnvelope/></p>
            <p className="info">yeec327@gmail.com</p>
          </div>
          <div className="contact">
            <p className="info">Phone_<FaPhone/></p>
            <p className="info">(415) 734-1731</p>
          </div>
          <div className="contact">
            <p className="info">LinkedIn_<FaLinkedin/></p>
            <p className="info">cam-yee</p>
          </div>
          <div className="contact">
            <p className="info">GitHub_<FaGithub/></p>
            <p className="info">Cameron327</p>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright (c) Cameron Yee</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
