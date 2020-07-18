using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper;
using CsvHelper.Configuration;

namespace NWT_2.Mappers
{
    public class GradesMap:ClassMap<Grades>
    {
        public GradesMap()
        {
            Map(x => x.No).Name("rb");
            Map(x => x.name).Name("ime_i_prezime");
            Map(x => x.math).Name("matematika");
            Map(x => x.serb).Name("srpski");
            Map(x => x.phys).Name("fizika");
            Map(x => x.chem).Name("hemija");
            Map(x => x.bio).Name("biologija");
            Map(x => x.rule).Name("vladanje");
        }
    }
}
