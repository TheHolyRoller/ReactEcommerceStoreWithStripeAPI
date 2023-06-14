import React from "react";
import { FaSearch } from "react-icons/fa";

// Import the stylesheet here 
import '../Styles/SearchBar.css'; 





function SearchContainer() {
  return (
    <div className="container" tabIndex="1">
      <div className="search-container" tabIndex="1">
        <input  style={{minHeight: "1rem"}}  type="text" placeholder="search" />
        <a href="my" className="button">
          <FaSearch />
          </a>
      </div>
    </div>
  );
}

export default SearchContainer;
