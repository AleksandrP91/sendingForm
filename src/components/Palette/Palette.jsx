import React from 'react';
import classes from './Palette.module.css';
import Colors from './Colors/Colors';

const Palette = function (props) {
    return (
        <div className=''>
            <div className={classes.colors}>
                <Colors />
            </div>
        </div>
    )
}

export default Palette;