import React from 'react';
import classes from './Forms.module.css';
import Download from './Download/Download';
import Input from './Input/Input';

const Forms = function () {

    return (
        <form>
            <Input/>
            <Download/>
            <div>
                <button type='submit' className={classes.btn}>Сохранить</button>
            </div>
            <div className={classes.block}>
                <span>Response</span>
                <textarea className={classes.response}></textarea>
            </div>
        </form>
    )
}

export default Forms;