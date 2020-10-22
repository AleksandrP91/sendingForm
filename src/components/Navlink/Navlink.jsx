import React from 'react';
import classes from './Navlink.module.css';
import {NavLink} from "react-router-dom";

const Navlink = function () {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/forms" activeClassName={classes.activeLink}>Форма</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/palette" activeClassName={classes.activeLink}>Палитра</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navlink;