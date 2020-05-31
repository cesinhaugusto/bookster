import React, { useState, useEffect } from "react";
import {
  getCart,
  addToCart,
  removeFromCart,
  updateCartItem,
} from "../services/DataServices";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  const IncreaseBookQty = (book) => {
    setCart([]);
    addToCart(book);
    setCart(getCart());
  };

  const DecreaseBookQty = (book) => {
    removeFromCart(book);
    setCart(getCart());
  };

  const updateItemQuantity = (cartItem, quantity) => {
    updateCartItem(cartItem, quantity);
    setCart(getCart());
  };

  useEffect(() => {
    setCart(getCart());
  }, []);

  return (
    <div>
      {cart.map((item) => (
        <div className="card" key={item.book.bookId}>
          <div className="card-header">{item.book.title}</div>
          <div className="card-body">
            <h5 className="card-title">CAD {item.book.price}</h5>
            <svg
              onClick={() => IncreaseBookQty(item.book)}
              className="bi bi-plus"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
              />
            </svg>
            <input
              type="text"
              style={{ width: 40 }}
              value={item.quantity}
              onChange={(e) => {
                updateItemQuantity(item, e.target.value);
              }}
            />
            <svg
              onClick={() => DecreaseBookQty(item.book)}
              className="bi bi-dash"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      ))}
      <Link to="/checkout" className="btn btn-primary">
        Checkout
      </Link>
    </div>
  );
}

export default Cart;
