using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookster.WebApi.Controllers
{
    [ApiController]
    [Route("/")]
    public class OkController : ControllerBase
    {
        private readonly ILogger<OkController> _logger;

        public OkController(ILogger<OkController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok("Oi");
        }
    }
}