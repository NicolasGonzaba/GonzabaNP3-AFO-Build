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
    public class AdditionController : ControllerBase
    {
        private readonly AdditionService _additionService;
        public AdditionController(AdditionService additionService)
        {
            _additionService=additionService;
        }
        [HttpGet("TwoNumbers/{num1}/{num2}")]
        public string TwoNumbers(int num1, int num2)
        {
            return _additionService.AddTwo(num1, num2);
        }
    }
}