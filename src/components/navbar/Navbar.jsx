import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";
import SearchBar from "../SearchBar";
import NavMenu from "../NavMenu";
import PropertiesBar from "../PropertiesBar";
import AgentsBar from "../AgentsBar";
import StoriesBar from "../StoriesBar";
import { OverlayContext } from "../../hooks/context/OverlayContext";
import useScrollListener from "../../hooks/useScrollListener";
import ValidationMessage from "../ValidationMessage";

const Navbar = () => {
  const {
    toggleMenu,
    setToggleMenu,
    displayAuth,
    setDisplayAuth,
    displayValidationMessage,
    setDisplayValidationMessage,
    barType,
    dispatch,
    signupData
  } = useContext(OverlayContext);

  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // const minWidth = window.innerWidth < 1175;
  // const maxWidth = window.innerWidth > 1175;

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <div className={` navbar ${navClassList.join(" ")}`}>
        <div className="navbar-signin">
          <p onClick={() => setDisplayAuth(true)}>Join / Login</p>

          <p>
            <Link to="/">
              <GoSettings />
              <span>Settings</span>
            </Link>
          </p>
        </div>
        <div className="mainNav">
          <div className="navbar-links">
            <div className="navbar-logo">
              <Link to="/">The Garland Realty</Link>
            </div>
            <div className="navbar-links-container">
              <p
                className="searchBtn"
                onClick={() => {
                  dispatch({ type: "searchBar" });
                  setDisplayAuth(false);
                  setToggleMenu(false);
                }}
              >
                <IoIosSearch size={18} /> <span>SEARCH</span>
              </p>
              <div className="navbar-links-con">
                <p onClick={() => dispatch({ type: "propertiesBar" })}>
                  PROPERTIES
                </p>
                <p onClick={() => dispatch({ type: "agentsBar" })}>AGENTS</p>
                <p onClick={() => dispatch({ type: "storiesBar" })}>
                  TESTIMONIES
                </p>
                <span>
                  <Link id="a" to="/">
                    SELL WITH US
                  </Link>
                  <Link id="b" to="/">
                    GOOD CHOICE
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#0A2C3D"
                size={27}
                style={{ cursor: "pointer" }}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#0A2C3D"
                size={27}
                style={{ cursor: "pointer" }}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
      {toggleMenu && (
        <NavMenu
          setDisplayAuth={setDisplayAuth}
          setToggleMenu={setToggleMenu}
        />
      )}
      {displayAuth && <Auth setClose={setDisplayAuth} close={false} />}
      {displayValidationMessage && <ValidationMessage setClose={setDisplayValidationMessage} email={signupData.data.data.email} />}
      {barType.displaySearchBar && (
        <SearchBar closeSearchBar={() => dispatch({ type: "closeBar" })} />
      )}
      {barType.displayPropertiesBar && (
        <PropertiesBar
          closePropertiesBar={() => dispatch({ type: "closeBar" })}
        />
      )}
      {barType.displayAgentsBar && (
        <AgentsBar closeAgentBar={() => dispatch({ type: "closeBar" })} />
      )}
      {barType.displayStoriesBar && (
        <StoriesBar closeStoriesBar={() => dispatch({ type: "closeBar" })} />
      )}
    </>
  );
};

export default Navbar;
