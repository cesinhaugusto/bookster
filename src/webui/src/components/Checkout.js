import React, { useState, useEffect } from "react";
import { checkout } from "../services/BookstoreService";
import get from "lodash/get";

export function Checkout() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    checkout().then((o) => setOrder(o));
  }, []);

  return (
    <div className="container mt-2">
      <ul className="list-group">
        <li className="list-group-item active">Order summary</li>
        {get(order, "items", []).map((item) => (
          <li className="list-group-item ml-2" key={item.book.bookId}>
            <div className="row">
              <div className="col-6">{item.book.title}</div>
              <div className="col">Qty: {item.quantity}</div>
              <div className="col">
                CAD {(item.book.price * item.quantity).toFixed(2)}
              </div>
            </div>
          </li>
        ))}
        <li className="list-group-item active">
          <div className="row">
            <div className="col-6">Order Total:</div>
            <div className="col"></div>
            <div className="col">
              <strong>CAD {get(order, "totalPrice", 0).toFixed(2)}</strong>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
