import React from 'react';
import classes from './Header.module.css';
import weatherLogo from '../../assets/images/icons8-stormy-weather-48.png';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.Navbar}>
                <img src={weatherLogo} alt='Weather Icon'/>
                <h1>Weather App</h1>
            </header>
        </React.Fragment>
        
    );
}


export default Header;