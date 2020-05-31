using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bookster.WebApi.Entities;
using Bookster.WebApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Bookster.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly ILogger<BooksController> _logger;

        public BooksController(ILogger<BooksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<Book>> Get()
        {
            return BookService.GetBooks();
        }
    }
}
