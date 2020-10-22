import React from 'react';
import classes from './../InputSurname/InputSurname.module.css';

const InputSuname = function (props) {
    return (
        <div className={classes.inputBlock}>
            <span>{props.label}</span>
            <input type="text" name='name' required placeholder={props.surname}/>
        </div>
    )
}

export default InputSuname;