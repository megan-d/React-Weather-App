import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    let icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    
    return (
        <div className={classes.Card}>
            <h1>{props.city}</h1>
            <img alt='weather-icon' src={icon}></img>
            <p>{props.weather}</p>
            <p>{props.temp}</p>
        </div>
        
    );
}


export default Card;