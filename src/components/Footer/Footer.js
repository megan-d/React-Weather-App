import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Footer}>
                <hr></hr>
                <p>Weather Application ©2019</p>
                <a target="_blank" href="/icons/set/chance-of-storm">Stormy Weather icon</a> by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        </React.Fragment>
        
    );
}


export default Footer;