using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NWT_2;
using NWT_2.Data;
using NWT_2.Models;

namespace NWT_2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
            using GradesContext grades = new GradesContext();
            GradesEF pera = new GradesEF()
            {
                No = "1",
                name = "Pera Mitic",
                math = 3,
                serb = 4,
                phys = 5,
                chem = 3,
                bio = 4,
                rule = 5
            };
            grades.Add(pera);
            grades.SaveChanges();


        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
