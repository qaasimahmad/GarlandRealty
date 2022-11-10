import React from "react";
import {
  Footer,
  Navbar,
  SalesRentalDisplay,
  SalesRentalNav,
} from "../components";
import { useLocation } from "react-router-dom";

const Rental = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <SalesRentalNav />
      <SalesRentalDisplay path={location.pathname} />
      <Footer />
    </div>
  );
};

export default Rental;
