import React from "react";
import { Link } from "react-router-dom";

const Product = ({ route, imgUrl, name, location, price, importantDetails }) => {
  return (
    <div className="product">
      <Link to={`${route}/details`}>
        <div className="product-image">
          <img
            src={imgUrl}
            alt="item"
          />
        </div>
        <div className="product-details">
          <h4>{ name }</h4>
          <h4>{ location }</h4>
          <p className="price">{ price }</p>
          <div className="important-details">
            {importantDetails.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
          <p className="product-footer">Marketed By The Grand Realty</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
