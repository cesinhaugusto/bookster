using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Bookster.WebApi.Entities;

namespace Bookster.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CheckoutController : ControllerBase
    {
        [HttpPost]
        public Order Checkout(IEnumerable<CartItem> cart)
        {
            return CreateOrder(cart);
        }

        Order CreateOrder(IEnumerable<CartItem> cart)
        {
            var order = new Order();

            order.Items = cart;

            return order;
        }
    }
}
