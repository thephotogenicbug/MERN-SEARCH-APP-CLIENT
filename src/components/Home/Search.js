import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
const Search = () => {
  const [keyword, setKeyword] = useState("");

  let navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/courses/${keyword}`);
    } else {
      navigate("/courses");
    }
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search course"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="submitButton" onClick={searchSubmitHandler}>Search</button>
    </div>
  );
};

export default Search;
