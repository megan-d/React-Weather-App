import React from 'react';
import classes from './Search.module.css';

const Search = (props) => {
    return (
        <div class={classes.Searchbox}>
            <p className={classes.Heading}>Enter location...</p>
            <form onSubmit={props.submit}>
                 <input 
                    type='search'
                    placeholder='Search city/town'
                    />
            <input type="submit" value="submit"></input>
            </form>
        </div>
        
    );
}


export default Search;