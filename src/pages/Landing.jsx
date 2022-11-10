import React, { useContext } from "react";
import {
  Footer,
  Header,
  ImageCarousel,
  Navbar,
  Services,
  Stats,
} from "../components";
import { OverlayContext } from "../hooks/context/OverlayContext";
import "../App.css";

// barType toggleMenu
const Landing = () => {
  const { displayAuth } = useContext(OverlayContext);

  return (
    <div className={displayAuth ? "overlayHeight" : ""}>
      <Navbar />
      <section>
        <Header />
        <ImageCarousel />
        <Stats />
        <Services customClass="ltn__feature-area pt-120 pb-90 mb-120---" />
        <Footer />
      </section>
    </div>
  );
};

export default Landing;
