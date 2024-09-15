import React from "react";
import LogoImageWhite from "../../assets/images/logo/white-text-logo.png";
import LogoImageBlack from "../../assets/images/logo/black-text-logo.png";  // Assuming this should be the black version
import css from "./style.module.css";

const Logo = ({ color = 'white' }) => {
  // Choose the logo based on the color prop
  const logoSrc = color === 'white' ? LogoImageWhite : LogoImageBlack;

  return (
    <div className={css.Logo}>
      <img src={logoSrc} alt="Logo" />
    </div>
  );
};

export default Logo;
