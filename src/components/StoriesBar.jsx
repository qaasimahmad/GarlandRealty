import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import "../App.css";

const StoriesBar = ({closeStoriesBar}) => {
  return (
    <div className={`storiesBar ${window.innerWidth > 1175 ? "slide-in-top" : "" }`}>
      <RiCloseFill className="closeIcon" color="#fff" size={30} onClick={closeStoriesBar} />
      <div className="firstSection">
        <h2>EXPLORE</h2>
        <p>
          <Link to="/">Luxury Outlook 2022</Link>
        </p>
        <p>
          <Link to="/">Blogs</Link>
        </p>
        <p>
          <Link to="/">Videos</Link>
        </p>
        <p>
          <Link to="/">Reside</Link>
        </p>
        <p>
          <Link to="/">Press</Link>
        </p>
      </div>
      <div className="secondSection">
        <h2>LATEST IN RESIDE</h2>
        <div className="latestResideContainer">
          <div className="latestReside">
            <img src="" alt="" />
            <h3>Luxury Outlook 2022</h3>
            <p>
              An ambitious exploration into high-end residential markets across
              the globe.
            </p>
            <button>
              <span>EXPLORE MORE</span>
              <CgArrowLongRight className="arrow" size={25} />
            </button>
          </div>
          <div className="latestReside">
            <img src="" alt="" />
            <h3>RESIDE Magazine - Summer 2022</h3>
            <p>
              Conceived in the belief that home and living in full are
              inextricably entwined.
            </p>
            <button>
              <span>EXPLORE MORE</span>
              <CgArrowLongRight className="arrow" size={25} />
            </button>
          </div>
          <div className="latestReside">
            <img src="" alt="" />
            <h3>What’s New in Art, Architecture & Design</h3>
            <p>
              Contemporary landscapes, party barns, and bespoke home cocktail
              bars are all the rage.
            </p>
            <button>
              <span>EXPLORE MORE</span>
              <CgArrowLongRight className="arrow" size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesBar;
