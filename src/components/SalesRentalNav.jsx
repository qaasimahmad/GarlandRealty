import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
import PriceRange from "./PriceRange";
import BedAndBathsRange from "../BedAndBathsRange";
import HomeTypesNav from "./HomeTypesNav";
import FiltersRange from "./FiltersRange";

const SalesRentalNav = () => {
  const [locationSelect, setLocationSelect] = useState(false);
  const [priceRangeNav, setPriceRangeNav] = useState(false);
  const [bedAndBathRangeNav, setBedAndBathRangeNav] = useState(false);
  const [homeTypesNav, setHomeTypesNav] = useState(false);
  const [filtersRange, setFiltersRange] = useState(true);
  let locationBarRef = useRef();
  const location = useLocation();
  const minWidth = window.innerWidth <= 1175;
  console.log(minWidth);

  useEffect(() => {
    const handler = (e) => {
      if (!locationBarRef.current.contains(e.target)) {
        setLocationSelect(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [locationBarRef]);

  return (
    <div
      className={`salesRentalNav ${filtersRange ? "active-filters-range" : ""}`}
    >
      <div className="input">
        <IoIosSearch size={22} className="searchIcon" color="#0A2C3D" />
        <input
          onClick={() => setLocationSelect(true)}
          type="text"
          placeholder="State, LGA, and Popular Towns"
        />
        {locationSelect && (
          <div className="locationSelect scale-in-ver-top" ref={locationBarRef}>
            <p>
              <BiCurrentLocation size={20} />{" "}
              <span>Search My Current Location</span>
            </p>
          </div>
        )}
      </div>
      <div className="filters">
        <div className="buyRent">
          <Link to="/sales">
            <span
              className={`buy ${
                location.pathname === "/sales" ? "activeBuySellBar" : ""
              }`}
            >
              buy
            </span>
          </Link>
          <Link to="/rental">
            <span
              className={`rent ${
                location.pathname === "/rental" ? "activeBuySellBar" : ""
              }`}
            >
              rent
            </span>
          </Link>
        </div>
        <span
          onClick={() => setPriceRangeNav(!priceRangeNav)}
          className={`${priceRangeNav ? "price activeFilter" : ""}`}
        >
          price range
        </span>
        <span
          onClick={() => setBedAndBathRangeNav(!bedAndBathRangeNav)}
          className={`${bedAndBathRangeNav ? "bed activeFilter" : ""}`}
        >
          bed & baths
        </span>
        <span
          onClick={() => setHomeTypesNav(!homeTypesNav)}
          className={`${homeTypesNav ? "type activeFilter" : ""}`}
        >
          home types
        </span>
        <span
          onClick={() => setFiltersRange(!filtersRange)}
          className={`${filtersRange ? "filter activeFilter" : ""}`}
        >
          filter
        </span>
        {priceRangeNav && <PriceRange close={() => setPriceRangeNav(false)} />}
        {bedAndBathRangeNav && (
          <BedAndBathsRange close={() => setBedAndBathRangeNav(false)} />
        )}
        {homeTypesNav && <HomeTypesNav close={() => setHomeTypesNav(false)} />}
        {filtersRange && <FiltersRange close={() => setFiltersRange(false)} minWidth={minWidth} />}
      </div>
    </div>
  );
};

export default SalesRentalNav;
