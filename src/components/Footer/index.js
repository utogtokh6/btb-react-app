import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import css from './style.module.css';
import "../../../src/styles/variables.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footercontainer}>
        <div className={css.footerlinks}>
          <a href="/#/Home" className={css.footerlink}>Home</a>
          <a href="#/Products" className={css.footerlink}>Products</a>
          <a href="/#/Services" className={css.footerlink}>Services</a>
          <a href="/about" className={css.footerlink}>About Us</a>
          <a href="/contact" className={css.footerlink}>Contact</a>
          <a href="/Join" className={css.footerlink}>Join Us</a>
        </div>

        <div className={css.footersocial}>
          <a href="https://www.facebook.com/profile.php?id=61556713550060" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/btb-steel-works" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/btbsteelworks" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        <div className={css.footercopyright}>
          <p>© 2024 BTB STEEL WORKS PTY LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
