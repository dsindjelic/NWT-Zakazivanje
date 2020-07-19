using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CsvHelper;
using NWT_2.Services;
using NWT_2.Data;
using NWT_2.Models;
using System.Xml.Serialization;
using System.Net;

namespace NWT_2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AllGradesController: ControllerBase
    {
        private IActionResult GetAllGrades()
        {
            IList<GradesEF> students = null;

            using (var grd = new GradesContext())
            {
                students = grd.SGradesEF
                            .Select(s => new GradesEF()
                            {
                                No = s.No,
                                name = s.name,
                                math = s.math,
                                serb = s.serb,
                                phys = s.phys,
                                chem = s.chem,
                                bio = s.bio,
                                rule = s.rule,
                                averageRating = s.averageRating
                            }).ToList();
            }

            if (students.Count == 0)
            {
                return NotFound();
            }

            return Ok(students);
        }
    
        private readonly ILogger<AllGradesController> _logger;

        public AllGradesController(ILogger<AllGradesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<GradesEF> Get()
        {
            List<GradesEF> gradeList = new List<GradesEF>();
            using (GradesContext grd = new GradesContext())
            {
                gradeList= grd.SGradesEF.ToList();
                return gradeList;
            }
             
        }




            
            
        
    }
}
