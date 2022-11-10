import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isActiveLink, setIsActiveLink] = useState("buy");

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/sales', {replace: true});
  };

  return (
    <div className="header">
      <div className="title">
        <h1>Find a home that suits your lifestyle. </h1>
      </div>
      <div className="searchSection">
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
          <p
            onClick={() => setIsActiveLink("sell")}
            className={`${isActiveLink === "sell" ? "activeLink" : ""}`}
          >
            <Link to="/sell">sell</Link>
          </p>
          <p
            onClick={() => setIsActiveLink("agents")}
            className={`${isActiveLink === "agents" ? "activeLink" : ""}`}
          >
            agents
          </p>
        </div>
        <div className="input">
          <form>
            <IoIosSearch size={22} className="searchIcon" color="#0A2C3D" />
            <input
              type="text"
              placeholder={`${
                isActiveLink === "buy" || isActiveLink === "rent"
                  ? "State, LGA, and Popular Towns"
                  : isActiveLink === "agents"
                  ? "Person's name or location"
                  : ""
              }`}
            />
            <button>
              <CgArrowLongRight
                className="submitIcon"
                onClick={onSubmit}
                size={27}
                color="#0A2C3D"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
