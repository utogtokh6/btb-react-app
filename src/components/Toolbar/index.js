import React from "react";
import css from "./style.module.css"
import Logo from "../Logo"
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";
const Toolbar = (props) =>(
<header className={css.Toolbar}>
    <div><HamburgerMenu/></div>
    <div><Logo /></div>
    <nav className={css.HideOnMobile}><Menu /></nav>
</header>
);
export default Toolbar;
