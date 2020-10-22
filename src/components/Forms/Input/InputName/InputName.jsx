import React from 'react';
import classes from './../InputName/InputName.module.css';

const InputName = function (props) {
    return (
        <div className={classes.inputBlock}>
            <span>{props.label}</span>
            <input type="text" name='name' required placeholder={props.name} />
        </div>
    )
}

export default InputName;