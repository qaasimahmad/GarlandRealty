import React, { useState, useReducer, createContext } from "react";
import { barReducer } from "../reducer/barReducer";

const OverlayContext = createContext();

const OverlayProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayValidationMessage, setDisplayValidationMessage] =
    useState(false);
  const [signupData, setSignupData] = useState({});

  const [barType, dispatch] = useReducer(barReducer, {
    displaySearchBar: false,
    displayPropertiesBar: false,
    displayAgentsBar: false,
    displayStoriesBar: false,
  });

  return (
    <OverlayContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        displayAuth,
        setDisplayAuth,
        displayValidationMessage,
        setDisplayValidationMessage,
        signupData,
        setSignupData,
        barType,
        dispatch,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayContext, OverlayProvider };
