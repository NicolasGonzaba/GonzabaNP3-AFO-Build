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
    public class RestaurantPickerController : ControllerBase
    {
        private readonly RestaurantPickerService _restaurantPickerService;
        public RestaurantPickerController(RestaurantPickerService restaurantPickerService)
        {
            _restaurantPickerService=restaurantPickerService;
        }
    [HttpGet("MexicanPizzaOrFastFood/{Category}")]
    public string Picker(string Category)
    {
        return _restaurantPickerService.Picker(Category);
    }
    }
}