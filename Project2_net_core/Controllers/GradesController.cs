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
        List<int> grades = new List<int>();

        private void SnimiUBazu()
        {
            using GradesContext grades = new GradesContext();
            GradesEF pera = new GradesEF()
            {
                No = "2",
                name = "Mita Mitic",
                math = 3,
                serb = 4,
                phys = 5,
                chem = 3,
                bio = 3,
                rule = 2
            };
            grades.Add(pera);
            grades.SaveChanges();

        }

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
        public IEnumerable<Grades> Get()
        {
            


            Console.WriteLine("Start CSV File Reading...");
            var _studentService = new GradesService();
            var path = "wwwroot/Dnevnik1.csv";

            //Here We are calling function to read CSV file
            var resultData = _studentService.ReadCSVFile(path);
           

            //Create an object of the Student class
            Grades grade = new Grades();
            grade.rb= "12";
            grade.ime_i_prezime = "Natalija";
            grade.matematika = 2;
            grade.srpski = 3;
            grade.fizika = 1;
            grade.hemija = 2;
            grade.biologija = 2;
            grade.vladanje = 2;

            resultData.Add(grade);
            //Here We are calling function to write file

            _studentService.WriteCSVFile("wwwroot/average.csv", resultData);
            //Here D: Drive and Tutorials is the Folder name, and CSV File name will be "NewStudentFile.csv"

            Console.WriteLine("New File Created Successfully.");
            SnimiUBazu();
            return resultData;
        }
    }
}
