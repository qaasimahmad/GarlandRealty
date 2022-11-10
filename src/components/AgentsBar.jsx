import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../App.css";

const AgentsBar = ({closeAgentBar}) => {
  return (
    <div className={`agentsBar ${window.innerWidth > 1175 ? "slide-in-top" : "" }`}>
      <RiCloseFill className="closeIcon" color="#fff" size={30} onClick={ closeAgentBar} />
      <div className="firstSection">
        <h2>NEAR YOU</h2>
        <p>
          <Link to="/">Your Local Agents</Link>
        </p>
        <p>
          <Link to="/">Your Local Offices</Link>
        </p>
      </div>
      <div className="secondSection">
        <h2>NATIONWIDE</h2>
        <p>
          <Link to="/">Search Agents</Link>
        </p>
        <p>
          <Link to="/">Search Offices</Link>
        </p>
      </div>
    </div>
  );
};

export default AgentsBar;
