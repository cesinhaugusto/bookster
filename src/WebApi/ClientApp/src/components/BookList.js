import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { addToCart } from "../services/DataServices";

function BookList(props) {
  // const [showConfirmation, setShowConfirmation] = useState(false);
  const AddItemToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      {props.books.map((book) => (
        <div className="card" key={book.bookId}>
          {/* <Toast
            onClose={setShowConfirmation(false)}
            show={showConfirmation}
            animation={false}
          >
            <Toast.Header>
              <strong className="mr-auto">Confirmation</strong>
            </Toast.Header>
            <Toast.Body>Product added to cart</Toast.Body>
          </Toast> */}
          <div className="card-header">{book.title}</div>
          <div className="card-body">
            <p className="card-text">{book.author}</p>
            <h5 className="card-title">CAD {book.price}</h5>
            {/* <a href="" className="btn btn-primary">
              Add to cart
            </a> */}
            <button
              onClick={() => AddItemToCart(book)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
