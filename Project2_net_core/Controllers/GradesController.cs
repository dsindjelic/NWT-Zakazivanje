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


namespace NWT_2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GradesController : ControllerBase
    {
        

        private void WriteToDatabase(int ind, Grades student)
        {
            using GradesContext grades = new GradesContext();
            GradesEF newStudent = new GradesEF()
            {
                No = ind.ToString(),
                name = student.name,
                math = student.math,
                serb = student.serb,
                phys = student.phys,
                chem = student.chem,
                bio = student.bio,
                rule = student.rule,
                averageRating = Convert.ToDecimal (student.averageGrade)
            };
            grades.Add(newStudent);
            grades.SaveChanges();

        }

        

        private readonly ILogger<GradesController> _logger;

        public GradesController(ILogger<GradesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Grades> Get()
        {

            int i=15, tempi = 0;     
            var _gradesService = new GradesService();
            var path = "wwwroot/Dnevnik1.csv";

            //Here We are calling function to read CSV file
            var resultData = _gradesService.ReadCSVFile(path);
            //Create  objects of the Grades class
            foreach (Grades result in resultData)
            {
                tempi = result.serb + result.math + result.phys + result.chem + result.bio+ result.rule;
                result.averageGrade = tempi / 6F;

                //Here We are calling function to write result object
                WriteToDatabase(i, result);
                i++;
            } 
            
            //Here is the Folder name, and CSV File name will be "average.csv" , service to write in the csv file          
            _gradesService.WriteCSVFile("wwwroot/average.csv", resultData);
                      
           
            return resultData;
        }
    }
}
