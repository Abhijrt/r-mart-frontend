import React, { Component } from "react";
import img from "../static/images/login-iocn.png";

export default class ProductItem extends Component {
  render() {
    const ratingArray = [1, 2, 3, 4, 5];
    return (
      <div>
        {/* <div className="productitem-main-container">
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
        </div> */}
        <div className="main-container-item">
          <div className="left-block">
            <img src={img} alt="product-img" />
          </div>
          <div className="middle-block">
            <div className="product-name">Red cahir</div>
            <p className="description">It is a man</p>
            <div className="product-rating">
              5
              {ratingArray.map((item) => {
                // if (item <= product.rating) {
                return <i id="star-container" className="fa fa-star"></i>;
                // }
              })}
            </div>
          </div>
          <div className="right-block">
            <div className="product-price">
              Price:<br></br> Rs 3235234
            </div>
            <div className="add-btn">Add To Cart</div>

            <div className="edit-icon">
              <i className="fa fa-pencil"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
