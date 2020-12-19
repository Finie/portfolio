import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaNode,
  FaJava,
  FaBuromobelexperte,
} from "react-icons/fa";
import { SiMysql, SiDjango } from "react-icons/si";
import { MdAndroid } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <hr style={{color:"white" ,height: 1, width:"100%"}}/>
      <section className="footer-subscription">
        <h2 className="footer-subscription-heading">Technologies</h2>
        <div class="technologies">
          <span>
            <div className="techdesc">
              <MdAndroid size={40} />
              <p>Android</p>
            </div>
          </span>
          <span>
            <div className="techdesc">
              <FaReact size={40} />
              <p>React</p>
            </div>
          </span>
          <span>
            <div className="techdesc">
              <FaNode size={40} />
              <p>Node</p>
            </div>
          </span>
          <span>
            <div className="techdesc">
              <SiDjango size={40} />
              <p>Django</p>
            </div>
          </span>

          <span>
            <div className="techdesc">
              <FaJava size={40} />
              <p>Java</p>
            </div>
          </span>

          <span>
            <div className="techdesc">
              <SiMysql size={40} />
              <p>MySQL</p>
            </div>
          </span>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About </h2>
            <a href="/">
              <FaBuromobelexperte /> Portfolio
            </a>
            <a href="/">
              <FaGithub /> Github
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Contacts</h2>
            <a href="/"><FaPhoneAlt /> +254715438186 </a>
            <a href="/">finiephenius@gmail.com</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="/">
              <FaInstagram /> Instagram
            </a>
            <a href="/">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">Phenius Muthomi</a>
          </div>
          <small className="website-rights"> Phenius Muthomi © 2020 all rights reserved  </small>
          <div className="social-icons">
           
            <a
              className="social-icon-link"
              href={"//github.com/Finie"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaGithub />
            </a>
            <a
              className="social-icon-link"
              href={"//www.linkedin.com/in/phenius-muthomi-558aa7142/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              className="social-icon-link"
              href={"//www.instagram.com/m_finie/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
