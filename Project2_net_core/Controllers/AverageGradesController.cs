using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CsvHelper;
using NWT_2.Services;

namespace NWT_2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AverageGradesController : ControllerBase
    {
       

        private readonly ILogger<AverageGradesController> _logger;

        public AverageGradesController(ILogger<AverageGradesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public AverageGrades Get(string rb)
        {
            var response = new AverageGrades()
            {
                rb = rb,
                ime_i_prezime = "Pera Mitic",
                averageRating = 3.43F
            };
            return response;
        }
    }
}
