using System.Collections.Generic;
using Bookster.WebApi.Entities;
using System.Linq;

namespace WebApi.Entities
{
    public class Order
    {
        public IEnumerable<CartItem> Items { get; set; }
        public int TotalQuantity { get { return Items.Count(); } }
        public decimal TotalPrice { get { return Items.Sum(item => item.Book.Price); } }
    }
}