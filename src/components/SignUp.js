import React, { Component } from "react";
import loginImg from "../static/images/login-iocn.png";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
      <div className="main-sign-component">
        <div className="container">
          <div className="style-container">
            <h1>Looks like you're new here!</h1>
            <br />
            <p>Sign up with your mobile number to get started</p>
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
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
              />
              <button className="sign-btn" type="submit">
                SignUp
              </button>
            </form>
            <div className="sign-details">
              <span>OR</span>
              <button className="sign-btn">SignUp with Google</button>
            </div>
            <div className="another-link">
              <Link to="/login" className="link">
                Existing User? Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
