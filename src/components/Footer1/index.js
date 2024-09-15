import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import css from './style.module.css';
import "../../../src/styles/variables.module.css";

const Footer1 = () => {
  return (
    <footer className={css.footer1}>
      <div className={css.footer1container}>
        <div className={css.footer1links}>
          <a href="/Home" className={css.footer1link}>Home</a>
          <a href="/Products" className={css.footer1link}>Products</a>
          <a href="/Services" className={css.footer1link}>Services</a>
          <a href="/about" className={css.footer1link}>About Us</a>
          <a href="/contact" className={css.footer1link}>Contact</a>
          <a href="/Join" className={css.footer1link}>Join Us</a>
        </div>

        <div className={css.footer1social}>
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

        <div className={css.footer1copyright}>
          <p>© 2024 BTB STEEL WORKS PTY LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
