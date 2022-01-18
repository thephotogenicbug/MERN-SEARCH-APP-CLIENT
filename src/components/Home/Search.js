import React from 'react'
import './Search.css'
const Search = () => {
    return (
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search course"
        />
        <button className="submitButton" >
          Search
        </button>
      </div>
    );
}

export default Search
