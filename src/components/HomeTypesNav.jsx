import React from "react";
import { RiCloseLine } from "react-icons/ri";

const HomeTypesNav = ({ close }) => {
  return (
    <div className="home-types-nav slide-in-bck-center">
      <div className="firstSection">
        <h3>Home Type</h3>
        <RiCloseLine
          onClick={close}
          className="closeIcon"
          size={27}
          color={"#FFF"}
        />
      </div>
      <hr />
      <div className="home-types-nav-buttons">
        <button>Clear</button>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default HomeTypesNav;
