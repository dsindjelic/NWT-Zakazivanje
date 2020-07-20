using Microsoft.AspNetCore.Mvc;
using NWT_2.Data;
using NWT_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NWT_2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeleteController:ControllerBase
    {
        [HttpGet]
        public IEnumerable<GradesEF> Get()
        {
            using GradesContext grades = new GradesContext();
            var all = from c in grades.SGradesEF select c;
            grades.SGradesEF.RemoveRange(all);
            grades.SaveChanges();
            return null;
        }
    }
}
