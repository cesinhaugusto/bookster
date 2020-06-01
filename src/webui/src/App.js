import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Bookstore from "./components/Bookstore";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/bookstore" className="nav-link">
                Bookstore
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                My cart
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/bookstore">
            <Bookstore />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
