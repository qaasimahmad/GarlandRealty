import React, { useState } from "react";
import Product from "./Product";
import Select from "./select/Select";
import { useLocation } from "react-router-dom";
import { FaListUl, FaMapMarkerAlt, FaRegStar } from "react-icons/fa";

const SalesRentalDisplay = ({ path }) => {
  const sortItems = [
    {
      id: 1,
      value: "Exclusive (Default)",
    },
    {
      id: 2,
      value: "Price High-Low",
    },
    {
      id: 3,
      value: "Price Low-High",
    },
    {
      id: 4,
      value: "New Listings First",
    },
    {
      id: 5,
      value: "Sq Foot High-Low",
    },
    {
      id: 6,
      value: "Acreage High-Low",
    },
    {
      id: 7,
      value: "Distance",
    },
  ];

  const location = useLocation();
  const [sort, setSort] = useState(sortItems[0].value);
  const [map, setMap] = useState(true);

  return (
    <div
      className={`salesRentalDisplay ${map ? "salesRentalDisplayWithMap" : ""}`}
    >
      <div className="toggle-map">
        <div onClick={() => setMap(!map)}>
          {map ? (
            <span className="toggle-map-btn">
              <FaListUl /> <span>List</span>
            </span>
          ) : (
            <span className="toggle-map-btn">
              <FaMapMarkerAlt /> <span>Map</span>
            </span>
          )}
        </div>
        <div className="starSearch">
          <FaRegStar /> <span>SAVE SEARCH</span>
        </div>
      </div>

      <div className="list listNotShow">
        <div className="list-header">
          <h4>{`Viewing 24 of 513,714 Homes for ${
            location.pathname === "/sales" ? "Sale" : "Rent"
          } in All locations`}</h4>
          <p>Showing listings marketed by all brokers in the searched area.</p>
          <Select
            title="SORT:"
            selectItems={sortItems}
            selected={sort}
            setSelected={setSort}
          />
          <div
            className={`products ${!map ? "salesRentalDisplayWithoutMap" : ""}`}
          >
            <Product
              route={path}
              imgUrl="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1188i215%2Fynstgac2rjr5mj2egs6yxy6sg6i215&option=N&h=472&permitphotoenlargement=false"
              name="Royal Style Mansion"
              location="Caesarea, IL, Israel"
              price="$149,500,000"
              importantDetails={[
                "5 Bedrooms",
                "15 Bathrooms",
                "75,347 Sq Ft.",
                "2.72 Acre(s)",
              ]}
            />
            <Product
              route={path}
              imgUrl="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Ft8x5kxv6t2ez4ht76vvg6zj5p3i215&option=N&h=472&permitphotoenlargement=false"
              name="Royal Style Mansion"
              location="Caesarea, IL, Israel"
              price="$149,500,000"
              importantDetails={[
                "5 Bedrooms",
                "15 Bathrooms",
                "75,347 Sq Ft.",
                "2.72 Acre(s)",
              ]}
            />
            <Product
              route={path}
              imgUrl="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1194i215%2Fx0aqpcye9dn8mqeksfjc3gfvr7i215&option=N&h=472&permitphotoenlargement=false"
              name="Royal Style Mansion"
              location="Caesarea, IL, Israel"
              price="$149,500,000"
              importantDetails={[
                "5 Bedrooms",
                "15 Bathrooms",
                "75,347 Sq Ft.",
                "2.72 Acre(s)",
              ]}
            />
            <Product
              route={path}
              imgUrl="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1247i215%2Fkqnqakz557bwmwtcspyatrpfh5i215&option=N&h=472&permitphotoenlargement=false"
              name="Royal Style Mansion"
              location="Caesarea, IL, Israel"
              price="$149,500,000"
              importantDetails={[
                "5 Bedrooms",
                "15 Bathrooms",
                "75,347 Sq Ft.",
                "2.72 Acre(s)",
              ]}
            />
          </div>
        </div>
      </div>
      {map && (
        <div className="map-container">
          <div className="map">Map</div>
        </div>
      )}
    </div>
  );
};

export default SalesRentalDisplay;
