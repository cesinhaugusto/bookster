import React, { useState, useEffect } from "react";
import { checkout } from "../services/DataServices";
import get from "lodash/get";

export function Checkout() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    checkout().then((o) => setOrder(o));
  }, []);

  return (
    <ul className="list-group">
      <li className="list-group-item active">Order summary</li>
      {get(order, "items", []).map((item) => (
        <li className="list-group-item active" key={item.book.bookId}>
          {item.book.title} - Qty: {item.book.quantity} - {item.book.price}
        </li>
      ))}
      <li className="list-group-item active">{order.totalQuantity}</li>
      <li className="list-group-item active">{order.totalPrice}</li>
    </ul>
  );
}
