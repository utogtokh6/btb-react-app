import React from "react";
import css from "./style.module.css"
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";
import "../../styles/variables.module.css";

const Sidebar = (props) =>{

let classes = [css.Sidebar, css.Close];
if (props.showSidebar){
    classes = [css.Sidebar, css.Open];
}

 return   (
<div>
<Shadow show = {props.showSidebar} onClick = {props.toggleSideBar}/>
 <div onClick={props.toggleSideBar} className={classes.join(" ")}>
    <div className={css.Logo}>
        <Logo/>
    </div>
    <Menu className={css.Menu}/>

  </div>
 </div>
 )

}

export default Sidebar;
