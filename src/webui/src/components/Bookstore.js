import React, { useState, useEffect } from "react";
import { getBooks, addToCart } from "../services/BookstoreService";
import defaultTo from "lodash/defaultTo";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Bookstore() {
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);

  const AddItemToCart = (item) => {
    addToCart(item);
    setShow(true);
  };

  const closeMessage = () => {
    setShow(false);
  };

  useEffect(() => {
    getBooks().then((b) => setBooks(b));
  }, []);

  return (
    <>
      <Snackbar open={show} autoHideDuration={2000} onClose={closeMessage}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={closeMessage}
          severity="success"
        >
          Your item was added to cart
        </MuiAlert>
      </Snackbar>
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
