import React, { Component } from "react";
import { NavBar, Crousal } from "../components";
import "../styles/app.scss";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Crousal />
      </div>
    );
  }
}
