using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace NWT_2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GradesController : ControllerBase
    {
        List<int> values = new List<int>();
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<GradesController> _logger;

        public GradesController(ILogger<GradesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<int> Get()
        {
            int temp1, temp2;
            string tempstr;


            using (StreamReader reader = new StreamReader("wwwroot/log_11-10-2014.txt"))
            {
                while (!reader.EndOfStream)
                {
                    tempstr = reader.ReadLine();
                    temp1 = tempstr.IndexOf("level");
                    temp2 = tempstr.IndexOf("frequency");
                    if ((temp1 != -1) && (temp2 != -1))
                    {
                        tempstr = tempstr.Substring(temp1 + 8, ((temp2 - 3) - (temp1 + 8)));
                        values.Add(Convert.ToInt16(tempstr));
                        //return tempstr;

                    }

                }
                return values;
            }
        }
    }
}
