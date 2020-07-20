using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CsvHelper;
using NWT_2.Services;
using NWT_2.Models;
using NWT_2.Data;

namespace NWT_2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AverageGradesController : ControllerBase
    {
        private readonly ILogger<AverageGradesController> _logger;
        private IOrderedQueryable<GradesEF> gr;

        public AverageGradesController(ILogger<AverageGradesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<GradesEF> Get(string no)
        {
            List<GradesEF> gradeList = new List<GradesEF>();
                        
            //read from localDB
            using (GradesContext grd = new GradesContext())
            {
                gradeList = grd.SGradesEF.ToList();               
            }
            if (no == null) 
            {
                return gradeList;
            }
            else
            {
                return new List<GradesEF>() { gradeList.Find(s => s.No == no)};
            }
                                    
        }
    }
}
