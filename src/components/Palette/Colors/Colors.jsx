import React from 'react';
import classes from './Colors.module.css';
import ColorsItem from './ColorsItem/ColorsItem';

const Colors = function () {
    return (
        <div className={classes.colors}>
           <div className={classes.colorsItem}>
                <ColorsItem />
                <ColorsItem />
                <ColorsItem />
                <ColorsItem />
                <ColorsItem />
                <ColorsItem />
                <ColorsItem />
                <ColorsItem />
           </div>
           <div className={classes.addColors}>
               <button>Добавить цвет</button>
           </div>
        </div>
    )
}

export default Colors;