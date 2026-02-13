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
    public class GreaterOrLessController : ControllerBase
    {
        private readonly GreaterOrLessService _greaterOrLessService;
        public GreaterOrLessController(GreaterOrLessService greaterOrLessService)
        {
            _greaterOrLessService=greaterOrLessService;
        }

        [HttpGet("EasyMode/{Guess}")]
    public string EasyMode(int Guess)
    {
        return _greaterOrLessService.EasyMode(Guess);
    }

    [HttpGet("MediumMode/{Guess}")]
    public string MediumMode(int Guess)
    {
        return _greaterOrLessService.MediumMode(Guess); 
    }

    [HttpGet("HardMode/{Guess}")]
    public string HardMode(int Guess)
    {
       return _greaterOrLessService.HardMode(Guess); 
    }
    }
}