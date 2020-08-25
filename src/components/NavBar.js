import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="main-navbar-container">
        <div className="project-name">
          {/* <Link className="nav-link" to="/"> */}R Mart
          {/* </Link> */}
        </div>
        <div className="search-bar">
          <input placeholder="Search for products,brand and more" />
          <i className="fa fa-search"></i>
        </div>
        <div className="sign-in">
          Hello,
          {/* <Link className="nav-link" to="/login"> */}
          Sign in
          {/* </Link> */}
        </div>
        <div className="cart-icon">
          {/* <Link className="nav-link" to="/cart"> */}
          <i className="fa fa-shopping-cart"></i>
          <span>Cart</span>

          {/* </Link> */}
        </div>
      </nav>
    );
  }
}
