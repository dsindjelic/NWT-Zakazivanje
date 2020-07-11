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
            Map(x => x.rb).Name("rb");
            Map(x => x.ime_i_prezime).Name("ime_i_prezime");
            Map(x => x.matematika).Name("matematika");
            Map(x => x.srpski).Name("srpski");
            Map(x => x.fizika).Name("fizika");
            Map(x => x.hemija).Name("hemija");
            Map(x => x.biologija).Name("biologija");
            Map(x => x.vladanje).Name("vladanje");
        }
    }
}
