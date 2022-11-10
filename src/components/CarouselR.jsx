import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import "../App.css";

class CarouselR extends Component {
  state = {};
  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        stopOnHover={true}
        showStatus={false}
        useKeyboardArrows={true}
        interval={3000}
        autoFocus={true}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
      >
        <div className="carousel">
          <div className="details">
            <h2>Lekki</h2>
            <p>
              <span>Lagos</span> <span className="dot"></span>{" "}
              <span>$2,158,416</span>
            </p>
            <Link>
              <span>SEE DETAILS</span>{" "}
              <CgArrowLongRight className="icon" size={25} />{" "}
            </Link>
          </div>
          <img
            className="carousel-item"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="carousel-img"
          />
        </div>
        <div className="carousel">
          <div className="details">
            <h2>Lekki</h2>
            <p>
              <span>Lagos</span> <span className="dot"></span>{" "}
              <span>$2,158,416</span>
            </p>
            <Link>
              <span>SEE DETAILS</span>{" "}
              <CgArrowLongRight className="icon" size={25} />{" "}
            </Link>
          </div>
          <img
            className="carousel-item"
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="carousel-img"
          />
        </div>
        <div className="carousel">
          <div className="details">
            <h2>Ikeja</h2>
            <p>
              <span>Lagos</span> <span className="dot"></span>{" "}
              <span>$2,158,416</span>
            </p>
            <Link>
              <span>SEE DETAILS</span>{" "}
              <CgArrowLongRight className="icon" size={25} />{" "}
            </Link>
          </div>
          <img
            className="carousel-item"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="carousel-img"
          />
        </div>
        <div className="carousel">
          <div className="details">
            <h2>Gariki</h2>
            <p>
              <span>Abuja</span> <span className="dot"></span>{" "}
              <span>$2,158,416</span>
            </p>
            <Link>
              <span>SEE DETAILS</span>{" "}
              <CgArrowLongRight className="icon" size={25} />{" "}
            </Link>
          </div>
          <img
            className="carousel-item"
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="carousel-img"
          />
        </div>
        <div className="carousel">
          <div className="details">
            <h2>Ogudu</h2>
            <p>
              <span>Lagos</span> <span className="dot"></span>{" "}
              <span>$2,158,416</span>
            </p>
            <Link>
              <span>SEE DETAILS</span>{" "}
              <CgArrowLongRight className="icon" size={25} />{" "}
            </Link>
          </div>
          <img
            className="carousel-item"
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="carousel-img"
          />
        </div>
        <div className="carousel">
          <div className="details">
            <h2>Bodija Estate</h2>
            <p>
              <span>Oyo</span> <span className="dot"></span>{" "}
              <span>$2,158,416</span>
            </p>
            <Link>
              <span>SEE DETAILS</span>{" "}
              <CgArrowLongRight className="icon" size={25} />{" "}
            </Link>
          </div>
          <img
            className="carousel-item"
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="carousel-img"
          />
        </div>
      </Carousel>
    );
  }
}

export default CarouselR;
