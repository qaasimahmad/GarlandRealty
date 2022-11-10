import React from "react";
import { RiCloseLine } from "react-icons/ri";

const BedAndBathsRange = ({ close }) => {
  return (
    <div className="bed-bath-range slide-in-bck-center">
      <div className="firstSection">
        <RiCloseLine
          onClick={close}
          className="closeIcon"
          size={27}
          color={"#FFF"}
        />
      </div>
      <div className="secondSection">
        <h3>Bedrooms</h3>
        <p>Any</p>
      </div>
      <hr />
      <div className="secondSection">
        <h3>Bathrooms</h3>
        <p>Any</p>
      </div>
      <hr />
      <div className="bed-bath-range-buttons">
        <button>Clear</button>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default BedAndBathsRange;
