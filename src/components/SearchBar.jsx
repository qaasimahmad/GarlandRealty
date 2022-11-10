import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import "../App.css";

const SearchBar = ({ closeSearchBar }) => {
  const [isActiveLink, setIsActiveLink] = useState("buy");

  return (
    <div className="searchBar slide-in-top">
      <RiCloseFill
        className="closeIcon"
        color="#fff"
        size={30}
        onClick={closeSearchBar}
      />
      <div className="links">
        <p
          onClick={() => setIsActiveLink("buy")}
          className={`${isActiveLink === "buy" ? "activeLink" : ""}`}
        >
          buy
        </p>
        <p
          onClick={() => setIsActiveLink("rent")}
          className={`${isActiveLink === "rent" ? "activeLink" : ""}`}
        >
          rent
        </p>
        <p>
          <Link to="/sell">sell</Link>
        </p>
        <p
          onClick={() => setIsActiveLink("agents")}
          className={`${isActiveLink === "agents" ? "activeLink" : ""}`}
        >
          agents
        </p>
        <p
          onClick={() => setIsActiveLink("blogs")}
          className={`${isActiveLink === "blogs" ? "activeLink" : ""}`}
        >
          blogs
        </p>
      </div>
      <div className="input">
        <IoIosSearch size={22} className="searchIcon" color="#FDFDFE" />
        <input
          type="text"
          placeholder={`${
            isActiveLink === "buy" || isActiveLink === "rent"
              ? "State, LGA, and Popular Towns"
              : isActiveLink === "agents"
              ? "Person's name or location"
              : isActiveLink === "blogs"
              ? "Keyword"
              : ""
          }`}
        />
        <button>
          <CgArrowLongRight className="submitIcon" size={27} color="#FDFDFE" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
