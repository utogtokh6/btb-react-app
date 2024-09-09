import React from "react";
import css from "./style.module.css"
import Logo from "../Logo"
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";
const Toolbar = (props) =>(
<header className={css.Toolbar}>
    <div className ={css.HanburgerMenu}><HamburgerMenu toggleSideBar = {props.toggleSideBar} /></div>
    <div><Logo /></div>
    <nav className={css.HideOnMobile}><Menu /></nav>
</header>
);
export default Toolbar;
