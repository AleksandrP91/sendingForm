import React from 'react';
import classes from './Input.module.css';
import InputName from './InputName/InputName';
import InputSuname from './InputSurname/InputSurname';
import InputPatronymic from './InputPatronymic/InputPatronymic';

const Input = function () {
    return (
        <div >
            <div className={classes.input}>
                <InputName label='Имя' name='Имя'/>
            </div>
            <div className={classes.input}>
                <InputSuname label='Фамилия' surname='Фамилия'/>
            </div>
            <div className={classes.input}>
                <InputPatronymic label='Отчество' patronymic='Отчество'/>
            </div>
        </div>
    )
}

export default Input;