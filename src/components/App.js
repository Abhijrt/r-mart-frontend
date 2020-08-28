import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  NavBar,
  Crousal,
  Cart,
  Login,
  SignUp,
  Footer,
  ProductItem,
} from "../components";
import "../styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Crousal} />
            <Route path="/login" exact component={Login} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
          <div className="app-container"></div>
          <ProductItem />
          <Footer />
        </div>
      </Router>
    );
  }
}
