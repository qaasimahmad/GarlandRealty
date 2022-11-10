import React, { useReducer } from "react";
import "./footer.css";
import { CgArrowLongRight } from "react-icons/cg";
import { GiEarthAmerica } from "react-icons/gi";
import { GoPlus, GoDash } from "react-icons/go";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "company":
      return {
        ...state,
        company: !state.company,
        garland: false,
      };
    case "garland":
      return {
        ...state,
        garland: !state.garland,
        company: false,
      };
    default:
      throw new Error();
  }
};

const Footer = () => {
  const [state, dispatch] = useReducer(reducer, {
    company: false,
    garland: false,
  });

  const Menu = () => (
    <>
      <div className="company">
        <h4>COMPANY</h4>
        <p>
          <Link to="/">About Us</Link>
        </p>
        <p>
          <Link to="/">Join Us</Link>
        </p>
      </div>
      <div className="garland">
        <h4>GARLAND'S</h4>
        <p>
          <Link to="/">Gallery</Link>
        </p>
      </div>
    </>
  );

  return (
    <div className="footer">
      <div className="section1">
        <div className="popular">
          <div className="searches">
            <h2>Popular City Searches</h2>
            <h3>Find homes in these popular cities</h3>
            <div className="types">
              <p>
                <Link>Lekki</Link>
              </p>
              <p>
                <Link>Oworonshoki</Link>
              </p>
              <p>
                <Link>Ojota</Link>
              </p>
              <p>
                <Link>Ogudu</Link>
              </p>
              <p>
                <Link>London</Link>
              </p>
              <p>
                <Link>Los Angeles</Link>
              </p>
            </div>
            <button>
              SEE ALL CITIES{" "}
              <CgArrowLongRight className="icon" size={27} color="#FDFDFE" />
            </button>
          </div>
          <div className="lifestyles">
            <h2>Popular Lifestyles</h2>
            <h3>Find homes in these popular lifestyles</h3>
            <div className="types">
              <p>
                <Link>Waterfront</Link>
              </p>
              <p>
                <Link> Metropolitan</Link>
              </p>
              <p>
                <Link>Country</Link>
              </p>
              <p>
                <Link>LivingHistoric</Link>
              </p>
              <p>
                <Link> Ski</Link>
              </p>
              <p>
                <Link>Beachfront</Link>
              </p>
            </div>
            <button>
              SEE ALL LIFESTYLES{" "}
              <CgArrowLongRight className="icon" size={27} color="#FDFDFE" />
            </button>
          </div>
          <div className="destinations">
            <h2>Popular Destinations</h2>
            <h3>Find homes in these popular destinations</h3>
            <div className="types">
              <p>
                <Link>Lagos</Link>
              </p>
              <p>
                <Link>Port Harcourt</Link>
              </p>
              <p>
                <Link>Abuja</Link>
              </p>
              <p>
                <Link>Ogun</Link>
              </p>
              <p>
                <Link>Ibadan</Link>
              </p>
              <p>
                <Link>Delta</Link>
              </p>
              <p>
                <Link>Benin City</Link>
              </p>
            </div>
            <button>
              SEE ALL DESTINATIONS{" "}
              <CgArrowLongRight className="icon" size={27} color="#FDFDFE" />
            </button>
          </div>
        </div>
        <hr />
        <div className="aboutAffilates">
          <h3>About The Garland Realty LLC</h3>
          <p>
            Founded in 2022 to provide independent brokerages with a powerful
            marketing and referral program for luxury listings, the Garland's
            International Realty network was designed to connect the finest
            independent real estate companies to the most prestigious clientele
            in the world.
          </p>
        </div>
      </div>
      <div className="section2">
        <div className="contact">
          <h1>The Garland Realty</h1>
          <button>
            CONTACT US{" "}
            <CgArrowLongRight className="icon" size={27} color="#0A2C3D" />
          </button>
        </div>
        <div className="links-container">
          <div className="links">
            <Menu />
          </div>
          <div className="mv-links">
            <div className="company">
              <h4 onClick={() => dispatch({ type: "company" })}>
                <span>COMPANY</span>
                {state.company ? <GoDash /> : <GoPlus />}
              </h4>
              {state.company && (
                <div className="link">
                  <p>
                    <Link to="/">About Us</Link>
                  </p>
                  <p>
                    <Link to="/">Join Us</Link>
                  </p>
                </div>
              )}
            </div>
            <div className="garland">
              <h4 onClick={() => dispatch({ type: "garland" })}>
                <span>GARLAND'S</span>
                {state.garland ? <GoDash /> : <GoPlus />}
              </h4>
              {state.garland && (
                <div className="link">
                  <p>
                    <Link to="/">Gallery</Link>
                  </p>
                </div>
              )}
              ``
            </div>
          </div>
          <div className="socials">
            <span>
              <Link to="/">Facebook</Link>
            </span>
            <span>
              <Link to="/">Twitter</Link>
            </span>
            <span>
              <Link to="/">Instagram</Link>
            </span>
            <span>
              <Link to="/">LinkedIn</Link>
            </span>
            <span>
              <Link to="/">YouTube</Link>
            </span>
            <span>
              <Link to="/">Pinterest</Link>
            </span>
            <span>
              <Link to="/">TikTok</Link>
            </span>
          </div>
          <p className="caution">
            <Link>DO NOT SELL MY PERSONAL INFORMATION</Link>
          </p>
        </div>
      </div>
      <div className="section3">
        <p>
          The Garland Realty's commitment to <Link>fair housing laws</Link>,
          <Link>standard operating procedures</Link>, and{" "}
          <Link>reasonable accommodations</Link>.
        </p>
        <span className="lang">
          <GiEarthAmerica />
          <Link>English - United States</Link>
        </span>
        <hr />
        <div className="links">
          <span>
            <Link>PRIVACY POLICY</Link>
          </span>
          <span>
            <Link>TERMS OF USE</Link>
          </span>
          <span>
            <Link>ACCESSIBILITY STATEMENT</Link>
          </span>
          <span>
            <Link>CONTACT US</Link>
          </span>
          <span>
            <Link>SITEMAP</Link>
          </span>
        </div>
        <hr />
        <div className="copyright">
          <p>Copyright © 2022 The Garland Realty LLC. All Rights Reserved.</p>
          <p>Nigeria Real Estate Commission Consumer Protection Notice</p>
          <p>
            The Garland Realty, the Garland Realty logo, "For the Ongoing
            Collection of Life" and RESIDE are registered (or unregistered)
            service marks owned or licensed to The Garland Realty LLC.
          </p>
          <p>
            The information set forth on this site is based upon information
            which we consider reliable, but because it has been supplied by
            third parties to our franchisees (who in turn supplied it to us), we
            can not represent that it is accurate or complete, and it should not
            be relied upon as such. The offerings are subject to errors,
            omissions, changes, including price, or withdrawal without notice.
            All dimensions are approximate and have not been verified by the
            selling party and can not be verified by The Garland Realty LLC. It
            is recommended that you hire a professional in the business of
            determining dimensions, such as an appraiser, architect or civil
            engineer, to determine such information.
          </p>
          <p>
            Nigeria Real Estate Commission Information About Brokerage Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
