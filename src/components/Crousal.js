import React, { Component } from "react";
import firstImage from "../static/images/AllProduct.png";
import secondImage from "../static/images/AddProduct.png";
import thirdImage from "../static/images/Cart.png";

export default class Crousal extends Component {
  render() {
    return (
      <div>
        <div className="crousal-container">
          <div className="crousal fade">
            <img src={firstImage} alt="first-img" />
          </div>
          <div className="crousal fade">
            <img src={secondImage} alt="second-img" />
          </div>
          <div className="crousal fade">
            <img src={thirdImage} alt="third-img" />
          </div>
          <a onClick={() => this.slideShow(-1)} className="prev-btn">
            &#10094;
          </a>
          <a onClick={() => this.slideShow(1)} className="next-btn">
            &#10095;
          </a>
        </div>
      </div>
    );
  }
}
