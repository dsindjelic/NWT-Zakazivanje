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
using System.Windows;


namespace NWT_2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GradesController : ControllerBase
    {
        private static void WriteToDatabase(int ind, Grades student)
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
        //https://localhost:44315/grades?filename=dnevnik.csv
        [HttpGet]
        public IEnumerable<Grades> Get(string? filename)
        {
            int i=1, tempi = 0;     
            var _gradesService = new GradesService();
            var path = "wwwroot/"+filename;
            
            //pozivamo  funkciju koja cita  CSV fajl
            if (System.IO.File.Exists(path))
            {
                 var resultData = _gradesService.ReadCSVFile(path);
            

            using (GradesContext grade = new GradesContext())
            {
                if (grade.SGradesEF.Any())
                {
                    IOrderedQueryable<int> gr = (IOrderedQueryable<int>)grade.SGradesEF.Select(s => Convert.ToInt32( s.No));
                    i = gr.ToArray().Max()+1;
                }
                else
                {
                    i = 1;
                }

            }
            //Kreiramo   objekat  Grades klase
            foreach (Grades result in resultData)
            {     
                tempi = result.serb + result.math + result.phys + result.chem + result.bio+ result.rule;
                result.averageGrade = tempi / 6F;

                //Pozivamo funkciju za upisivanje rezultata
                WriteToDatabase(i, result);
                i++;
            }             
            //definisanje  CSV File name   "average.csv", u koji ce biti izvrsen upis u csv file          
            _gradesService.WriteCSVFile("wwwroot/average.csv", resultData);             
           
            return resultData;
            }
            else
            {
                return null;
            }
        }
    }
}
