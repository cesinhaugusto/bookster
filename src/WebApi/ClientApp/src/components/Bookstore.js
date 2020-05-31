import React, { useState, useEffect } from "react";
import { getBooks } from "../services/DataServices";
import BookList from "./BookList";

function Bookstore() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  return (
    <>
      <h2>Books</h2>
      <BookList books={books} />
    </>
  );
}

export default Bookstore;
