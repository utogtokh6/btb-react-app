import React from "react";
import LogoImage from "../../assets/images/logo/white-text-logo.png";
import css from "./style.module.css";

const Logo = () => (
    <div className={css.Logo}>
        <img src={LogoImage} alt=""></img>
    </div>
);
 export default Logo;
