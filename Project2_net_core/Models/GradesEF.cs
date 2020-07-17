using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NWT_2.Models
{
    public class GradesEF
    {
        [Key]
        public string No { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public int math { get; set; }
        [Required]
        public int serb { get; set; }
        [Required]
        public int phys { get; set; }
        [Required]
        public int chem { get; set; }
        [Required]
        public int bio { get; set; }
        [Required]
        public int rule { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal averageRating { get; set; }
    }
}
