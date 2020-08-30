import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  NavBar,
  Crousal,
  Cart,
  Login,
  SignUp,
  Footer,
  ProductItemDetail,
} from "../components";
import "../styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <Crousal />
                  <ProductItemDetail />
                </div>
              )}
            />
            <Route path="/login" exact component={Login} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
          {/* <div className="app-container"></div> */}
          <Footer />
        </div>
      </Router>
    );
  }
}
