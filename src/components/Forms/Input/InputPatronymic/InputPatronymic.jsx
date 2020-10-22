import React from 'react';
import classes from './../InputPatronymic/InputPatronymic.module.css';

const InputPatronymic = function (props) {
    return (
        <div className={classes.inputBlock}>
            <span>{props.label}</span>
            <input type="text" name='name' required placeholder={props.patronymic}/>
        </div>
    )
}

export default InputPatronymic;