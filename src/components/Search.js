import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (

        <div className="pa2">

            <input 

            type="search"
            className ="pa3 b--green  ba bg-lightest-blue"
            placeholder="Search Here"
            onChange={searchChange} 
            
            />

        </div>

    )

}

export default SearchBox;