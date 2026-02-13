using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myapi.Services
{
    public class SayHelloService
    {
    public string HelloName(string name)
        {
            
            return $"Hello,{name}!";
        }

    }
}