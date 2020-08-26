import React, { Component } from "react";
import { Link } from "react-router-dom";

import loginImg from "../static/images/login-iocn.png";

export default class Login extends Component {
  render() {
    return (
      <div className="main-login-component">
        <div className="container">
          <div className="style-container">
            <h1>Login</h1>
            <br />
            <p>Get access to your Orders, Wishlist and Recommendations</p>
            <img src={loginImg} alt="login-icon" />
          </div>
          <div className="form-container">
            <form method="POST">
              <input
                type="text"
                name="email"
                placeholder="Write your email or phone"
              />
              <input type="password" name="password" placeholder="Password" />
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
            <div className="login-details">
              <span>OR</span>
              <button className="login-btn">Login with Google</button>
            </div>
            <div className="another-link">
              <Link className="link">New to RMart? Create Account</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
