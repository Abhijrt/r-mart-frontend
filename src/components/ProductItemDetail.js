import React, { Component } from "react";
import img from "../static/images/login-iocn.png";

export default class ProductItemDetail extends Component {
  // handleAddCartClick = (product) => {
  //   this.props.onAddToCart(product);
  // };

  render() {
    const ratingArray = [1, 2, 3, 4, 5];
    // const { product } = this.props;
    return (
      <div>
        <div className="main-container-item">
          <div className="left-block">
            <img src={img} alt="product-img" />
          </div>
          <div className="middle-block">
            <div className="product-name">Red cahir</div>
            <p className="description">
              It is a man.It is a man.It is a manIt is a manIt is a manIt is a
              manIt is a manIt is a manIt is a manIt is a manIt is a man.It is a
              man.It is a man.It is a manIt is a man.It is a man.It is a man.It
              is a man.It is a man.It is a man.It is a man.It is a man.It is a
              man.It is a man.It is a man.It is a man.It is a man
            </p>
            <div className="product-rating">
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
            {/* 
            <div className="edit-icon">
              <i className="fa fa-pencil"></i>
              <i className="fas fa-trash"></i>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
