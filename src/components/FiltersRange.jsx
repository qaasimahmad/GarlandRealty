import React from "react";
import { RiCloseLine } from "react-icons/ri";

const FiltersRange = ({ close, minWidth }) => {
  return (
    <div
      className={`filters-range ${
        minWidth ? "slide-in-bck-center" : "slide-in-right"
      }`}
    >
      <div className="firstSection">
        <h3>Filters</h3>
        <RiCloseLine
          onClick={close}
          className="closeIcon"
          size={35}
          color={"#FFF"}
        />
      </div>
      <div className="filters-container">
        <span><h4>Listing Type</h4></span>
        <span><h4>Price</h4></span>
        <span><h4>Square Feet</h4></span>
        <span><h4>Acreage</h4></span>
        <span><h4>Features</h4></span>
        <span><h4>Lifestyles</h4></span>
      </div>
      <div className="filters-range-buttons">
        <button>Clear</button>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default FiltersRange;
