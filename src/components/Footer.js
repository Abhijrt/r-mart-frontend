import React, { Component } from "react";
import smily from "../static/images/smiley.png";
export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer-container">
        <div className="first-container">
          <div className="about">
            <ul>
              <li className="footer-heading">About</li>
              <li>
                <p>We are a #1 Seller of the grocery Items</p>
              </li>
            </ul>
          </div>
          <div className="policy">
            <ul>
              <li className="footer-heading">Policy</li>
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="contact-us">
            <ul>
              <li className="footer-heading">Contact us</li>
              <li>FaceBook</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Mail us</li>
            </ul>
          </div>
          <div className="register-office">
            <ul>
              <li className="footer-heading">Register Office</li>
              <li>
                <p>
                  RMart Private Limited,Building No. 89 At Post Bhatkhedi
                  Tehsil.MHOW Dist.Indore M.P. (453441)
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="extra-space">
          <h1>R Mart</h1>
          <img src={smily} alt="smily" />
        </div>
      </footer>
    );
  }
}
