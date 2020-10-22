import React from 'react';
import classes from './Content.module.css';
import Navlink from './Navlink/Navlink';

const Content = function ()  {
    return (
        <div>
            <div className={classes.nav}>
                <Navlink />
            </div>
        </div>
    )
}

export default Content;