using System.Collections.Generic;
using Bookster.WebApi.Entities;
using System.Linq;

namespace Bookster.WebApi.Services
{
    public static class BookService
    {
        static List<Book> _books = new List<Book> {
            new Book
            {
                BookId = 1,
                Title = "Harry Potter and the Prisioner of Azkaban",
                Author = "J.K. Rowling",
                Price = 10.5m
            },
            new Book
            {
                BookId = 2,
                Title = "Art of War",
                Author = "Sun Tzu",
                Price = 5m
            },
            new Book
            {
                BookId = 3,
                Title = "The Lord of The Rings: The Fellowship of the Ring",
                Author = "J.R.R. Tolkien",
                Price = 7.5m
            },
            new Book
            {
                BookId = 4,
                Title = "Becoming",
                Author = "Michele Obama",
                Price = 12.5m
            },
            new Book
            {
                BookId = 5,
                Title = "The Shining",
                Author = "Stephen King",
                Price = 8m
            }
        };

        public static List<Book> GetBooks()
        {
            return _books;
        }

        public static Book GetBook(int bookId)
        {
            return _books.First(b => b.BookId == bookId);
        }
    }
}