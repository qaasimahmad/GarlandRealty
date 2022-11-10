import React from "react";
import {
  Footer,
  Navbar,
  SalesRentalDisplay,
  SalesRentalNav,
} from "../components";
import { useLocation } from "react-router-dom";
// import {Sugar} from 'react-preloaders';

const Sales = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <SalesRentalNav />
      {/* <Sugar /> */}
      <SalesRentalDisplay path={location.pathname} />
      <Footer />
    </div>
  );
};

export default Sales;
