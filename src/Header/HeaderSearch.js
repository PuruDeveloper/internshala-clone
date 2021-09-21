import React from "react";
import "../styles/Header/HeaderSearch.css";

function HeaderSearch() {
  return (
    <div className="headersearch">
      <div className="search">
        <input type="text" placeholder="What are you looking for?" />
        <span>
          <button className="search__button">
            <i class="fas fa-search"></i>
          </button>
        </span>
      </div>
    </div>
  );
}

export default HeaderSearch;
