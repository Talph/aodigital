import React from 'react';

import './search.styles.scss';

const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className="search"
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}
    />
)

export default SearchBox;

//add below to where the search form whoud appear
//-> import SearchBox from '../search-box/search.component';
//-> <SearchBox placeholder="Search website"handleChange={this.handleChange}/> 
