import React, { Component } from "react";
import { ProductsContext, Products } from "./productsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./cart";
import AppNav from "./AppBar";
import Home2 from "./home2";
import Details from "./details";

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Products>
            <AppNav />
            <Route path="/" exact component={Home2}></Route>
            <Route path="/details/:id" exact component={Details}></Route>
            <Route path="/my-cart" exact component={Cart}></Route>
          </Products>
        </Router>
      </div>
    );
  }
}

export default Home;
