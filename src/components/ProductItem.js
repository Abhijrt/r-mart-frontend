import React, { Component } from "react";
import img from "../static/images/login-iocn.png";

export default class ProductItem extends Component {
  render() {
    return (
      <div>
        <div className="productitem-main-container">
          <div className="left-block">
            <img src={img} alt="product-img" />
          </div>
          <div className="middle-block">
            <div className="product-name">Red Chair</div>
            <p className="description">It a big deal</p>
            <div className="product-rating">7</div>
          </div>
          <div className="right-block">
            <div className="product-price">
              Price:<br></br> Rs 39999
            </div>
            <div className="add-btn">Add to Cart</div>
          </div>
        </div>
      </div>
    );
  }
}
