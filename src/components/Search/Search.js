import React from 'react';
import classes from './Search.module.css';

const Search = (props) => {
    return (
        <div>
            <p className={classes.Heading}>Enter location...</p>
            <form onSubmit={props.onSearchSubmit}  className={classes.Searchbox}>
            <input 
                type='search'
                placeholder='Search city/town'
            />
            <input 
                type='submit'
                value='Submit'
            />
            </form>
            
        </div>
        
    );
}


export default Search;