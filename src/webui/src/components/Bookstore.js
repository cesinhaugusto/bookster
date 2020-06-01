import React, { useState, useEffect } from "react";
import { getBooks } from "../services/BookstoreService";
import { addToCart } from "../services/BookstoreService";
import defaultTo from "lodash/defaultTo";

function Bookstore() {
  const [books, setBooks] = useState([]);

  const AddItemToCart = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    getBooks().then((b) => setBooks(b));
  }, []);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Bookster</h1>
          <p className="lead">
            Your friendly neighbor bookstore. Enjoy our collection!
          </p>
        </div>
      </div>
      <div className="container">
        {defaultTo(books, []).map((book) => (
          <div className="card mb-2 shadow-sm" key={book.bookId}>
            <div className="card-header">{book.title}</div>
            <div className="card-body">
              <p className="card-text">{book.author}</p>
              <h5 className="card-title">CAD {book.price}</h5>
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
    </>
  );
}

export default Bookstore;
