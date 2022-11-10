import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../App.css";

const PropertiesBar = ({closePropertiesBar}) => {
  return (
    <div className={`propertiesBar ${window.innerWidth > 1175 ? "slide-in-top" : "" }`}>
      <RiCloseFill className="closeIcon" color="#fff" size={30} onClick={closePropertiesBar} />
      <div className="firstSection">
        <h2>YOUR AREA</h2>
        <p>
          <Link to="/">Properties For Sale</Link>
        </p>
        <p>
          <Link to="/">Properties For Rent</Link>
        </p>
        {/* <h2>LOCAL</h2>
        <p>
          <Link to="/">Properties Near Me</Link>
        </p> */}
      </div>
      <div className="secondSection">
        <h2>CUSTOM PROPERTIES VIEW </h2>
        <p>
          <Link to="/">Properties by Destination</Link>
        </p>
        <p>
          <Link to="/">Properties with Videos</Link>
        </p>
        <p>
          <Link to="/">Properties with Virtual Reality</Link>
        </p>
      </div>
      <div className="thirdSection">
        <h2>NEW DEVELOPMENTS</h2>
        <p>
          <Link to="/">Discover Project</Link>s
        </p>
        <p>
          <Link to="/">Contact the Team</Link>
        </p>
      </div>
    </div>
  );
};

export default PropertiesBar;
