import React, { useReducer } from "react";
import { GoSettings, GoPlus, GoDash } from "react-icons/go";
import { Link } from "react-router-dom";
import PropertiesBar from "./PropertiesBar";
import AgentsBar from "./AgentsBar";
import StoriesBar from "./StoriesBar";
import "../App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "propertiesBar":
      return {
        ...state,
        displayPropertiesBar: !state.displayPropertiesBar,
        displayAgentsBar: false,
        displayStoriesBar: false,
      };
    case "agentsBar":
      return {
        ...state,
        displayAgentsBar: !state.displayAgentsBar,
        displayPropertiesBar: false,
        displayStoriesBar: false,
      };
    case "storiesBar":
      return {
        ...state,
        displayStoriesBar: !state.displayStoriesBar,
        displayPropertiesBar: false,
        displayAgentsBar: false,
      };
    default:
      throw new Error();
  }
};

const NavMenu = ({ setDisplayAuth, setToggleMenu }) => {
  const [state, dispatch] = useReducer(reducer, {
    displayPropertiesBar: false,
    displayAgentsBar: false,
    displayStoriesBar: false,
  });

  const Menu = () => (
    <>
      <div>
        <div
          className="link-container"
          onClick={() => dispatch({ type: "propertiesBar" })}
        >
          <span>PROPERTIES</span>
          {state.displayPropertiesBar ? (
            <GoDash color="#FDFDFE" size={20} />
          ) : (
            <GoPlus color="#FDFDFE" size={20} />
          )}
        </div>
        {state.displayPropertiesBar && <PropertiesBar />}
      </div>
      <div>
        <div className="link-container" onClick={() => dispatch({ type: "agentsBar" })}>
          <span>AGENTS</span>
          {state.displayAgentsBar ? (
            <GoDash color="#FDFDFE" size={20} />
          ) : (
            <GoPlus color="#FDFDFE" size={20} />
          )}
        </div>
        {state.displayAgentsBar && <AgentsBar />}
      </div>
      <div>
        <div className="link-container" onClick={() => dispatch({ type: "storiesBar" })}>
          <span>TESTIMONIES</span>
          {state.displayStoriesBar ? (
            <GoDash color="#FDFDFE" size={20} />
          ) : (
            <GoPlus color="#FDFDFE" size={20} />
          )}
        </div>
        {state.displayStoriesBar && <StoriesBar />}
      </div>
      <div className="link">
        <span className="sellWithUs">
          <Link id="a" to="/">
            SELL WITH US
          </Link>
          <Link id="b" to="/">
            GOOD CHOICE
          </Link>
        </span>
      </div>
    </>
  );

  return (
    <div
      className="navMenu slide-in-fwd-center"
    >
      <div className="navbar-menu-signin">
        <p
          onClick={() => {
            setDisplayAuth(true);
            setToggleMenu(false);
          }}
        >
          Join / Login
        </p>

        <p>
          <Link to="/">
            {" "}
            <GoSettings /> Settings
          </Link>
        </p>
      </div>
      <div className="navbar-menu-links">
        <Menu />
      </div>
    </div>
  );
};

export default NavMenu;
