import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        isActive ? `${css.active} ${css.link}` : css.link
      }
    >
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
