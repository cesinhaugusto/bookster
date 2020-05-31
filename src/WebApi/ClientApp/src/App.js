import React from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Bookstore from "./components/Bookstore";
import "./custom.css";
import Cart from "./components/Cart";
import { Checkout } from "./components/Checkout";

function App() {
  // static displayName = App.name;

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/bookstore" component={Bookstore} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </Layout>
  );
}

export default App;
