import React from 'react';
import classes from './Download.module.css';

const Download = function () {
    return (
        <div className={classes.block}>
            <span>Фото</span>
            <div className={classes.photo}>
                <label htmlFor="input-file">
                    <input type="file" name="file" id="file" className="inputfile"/>
                    < label htmlFor="file">
                        <div className={classes.download}></div>
                    </ label>
                </label>
            </div>
        </div>
    )
}

export default Download;