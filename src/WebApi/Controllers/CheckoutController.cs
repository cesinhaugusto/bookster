using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bookster.WebApi.Entities;
using Bookster.WebApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApi.Entities;

namespace Bookster.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CheckoutController : ControllerBase
    {
        private readonly ILogger<CheckoutController> _logger;

        public CheckoutController(ILogger<CheckoutController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> Checkout(IEnumerable<CartItem> cart)
        {
            var order = CreateOrder(cart);

            return CreatedAtAction("Order", order);
        }

        Order CreateOrder(IEnumerable<CartItem> cart)
        {
            var order = new Order();

            order.Items = cart;

            return order;
        }
    }
}
