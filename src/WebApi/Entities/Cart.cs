using System.Collections.Generic;

namespace Bookster.WebApi.Entities
{
    public class Cart
    {
        public IEnumerable<CartItem> Items { get; set; }
    }

    public class CartItem
    {
        public Book Book { get; set; }
        public int Quantity { get; set; }
    }
}