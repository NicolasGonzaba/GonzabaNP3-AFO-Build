using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using myapi.Services;

namespace myapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SayHelloController : ControllerBase
    {
        private readonly SayHelloService _sayHelloService;
        public SayHelloController(SayHelloService sayHelloService)
        {
            _sayHelloService=sayHelloService;
        }

        [HttpGet("HelloName/{name}")]
        public string HelloName(string name)
        {
            return _sayHelloService.HelloName(name);
        }

    }
}