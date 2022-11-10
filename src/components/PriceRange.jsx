import React from "react";
import { RiCloseLine } from "react-icons/ri";

const PriceRange = ({close}) => {
  return (
    <div className="price-range slide-in-bck-center">
      <div className="firstSection">
        <h3>Price</h3>
        <RiCloseLine onClick={close} className="closeIcon" size={27} color={"#FFF"} />
      </div>
      <p>Any</p>
      <hr />
      <div className="price-range-buttons">
        <button>Clear</button>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default PriceRange;
