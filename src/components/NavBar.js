import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartImage from "../static/images/carts.png";
import smiley from "../static/images/smiley.png";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="main-navbar-container">
        <div className="project-name">
          <Link className="nav-link" to="/">
            R Mart
            <br />
            <img src={smiley} alt="smiley" />
          </Link>
        </div>
        <div className="search-bar">
          <input placeholder="Search for products,brand and more" />
          <i className="fa fa-search"></i>
        </div>
        <div className="sign-in">
          Hello,
          <Link className="login-link" to="/login">
            Sign in
          </Link>
        </div>
        <div className="cart-icon">
          <Link className="nav-link" to="/cart">
            <span className="cart-count">0</span>
            <img src={cartImage} alt="cart" />
            {/* <i className="fa fa-shopping-cart"></i> */}
            <span>Cart</span>
          </Link>
        </div>
      </nav>
    );
  }
}
