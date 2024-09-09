import React from "react";
import MenuItem from "../Menuitem";
import css from "./style.module.css"
const Menu = () => (
<div>
    <ul className={css.Menu}>
        <li><MenuItem active link='/Home'>Home</MenuItem></li>
        <li><MenuItem link='/Products'>Products</MenuItem></li>
        <li><MenuItem link='/Services'>Services</MenuItem></li>
        <li><MenuItem link='/About'>About</MenuItem></li>
        <li><MenuItem link="/Contact">Contact</MenuItem></li>
        <li><MenuItem link="/Join">Join Us</MenuItem></li>
    </ul>

</div>
);
export default Menu;
