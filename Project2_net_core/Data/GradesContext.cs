using Microsoft.EntityFrameworkCore;
using NWT_2.Models;
using NWT_2.Data;
using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;




namespace NWT_2.Data
{
    public class GradesContext : DbContext
    {
        public DbSet<GradesEF> SGradesEF { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=GradesContext");
        }
    }

}
