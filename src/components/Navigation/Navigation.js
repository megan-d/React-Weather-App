import React from 'react';
import classes from './Navigation.module.css';
import weatherLogo from '../../assets/images/icons8-stormy-weather-48.png';

const Navigation = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Navbar}>
                <img src={weatherLogo} alt='Weather Icon'/>
                <h1>Weather App</h1>
            </div>
        </React.Fragment>
        
    );
}


export default Navigation;