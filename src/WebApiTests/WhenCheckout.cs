using AutoFixture;
using Bookster.WebApi.Controllers;
using Bookster.WebApi.Entities;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net;
using Xunit;

namespace Bookster.WebApiTests
{
    public class WhenCheckout
    {
        [Fact]
        public void ShouldReturnOrder()
        {
            // Arrange
            var fixture = new Fixture();
            var controller = new CheckoutController();
            var cart = fixture.CreateMany<CartItem>();

            // Act
            var order = controller.Checkout(cart);

            // Assert
            order.Should().NotBeNull();
            order.TotalQuantity.Should().Be(cart.Count());
            order.TotalPrice.Should().Be(cart.Sum(item => item.Book.Price));
        }
    }
}
