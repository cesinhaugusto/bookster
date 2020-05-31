import React from "react";

const cartCookieName = "bookster-cart";

export function getBooks() {
  return fetch("api/books")
    .then((response) => response.json())
    .catch(console.log);
}

export function addToCart(book) {
  // Checks if the cart exists
  let cart = getCart();

  if (cart) {
    // If the book is already in the cart
    let cartItem = cart.find((i) => i.book.bookId === book.bookId);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({
        book: book,
        quantity: 1,
      });
    }
  } else {
    cart = [
      {
        book: book,
        quantity: 1,
      },
    ];
  }

  localStorage.setItem(cartCookieName, JSON.stringify(cart));
}

export function removeFromCart(book) {
  let cart = getCart();
  let cartItem = cart.find((item) => item.book.bookId === book.bookId);

  if (cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    cart = cart.filter((item) => item.book.bookId !== book.bookId);
  }

  localStorage.setItem(cartCookieName, JSON.stringify(cart));
}

export function getCart() {
  let cart = localStorage.getItem(cartCookieName);

  cart = !cart ? (cart = []) : JSON.parse(cart);

  return cart;
}

export function updateCartItem(item, quantity) {
  let cart = getCart();
  let cartItem = cart.find((i) => i.book.bookId === item.book.bookId);

  cartItem.quantity = quantity;
  localStorage.setItem(cartCookieName, JSON.stringify(cart));
}

export const checkout = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getCart()),
  };
  let response;

  try {
    response = await fetch("api/checkout", requestOptions);
  } catch (error) {
    console.log(error);
  }

  if (response.status === 201) {
    localStorage.removeItem(cartCookieName);
  }

  return response.json();
};
