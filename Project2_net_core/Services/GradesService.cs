using CsvHelper;
using NWT_2.Mappers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NWT_2.Services
{
    public class GradesService
    {
        public List<Grades> ReadCSVFile(string location)
        {
            try
            {
                using (var reader = new StreamReader(location, Encoding.Default))
                using (var csv = new CsvReader(reader, System.Globalization.CultureInfo.CurrentCulture))
                {
                    csv.Configuration.RegisterClassMap<GradesMap>();
                    var records = csv.GetRecords<Grades>().ToList();
                    return records;
                }
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public void WriteCSVFile(string path, List<Grades> grades)
        {
            using (StreamWriter sw = new StreamWriter(path, false, new UTF8Encoding(true)))
            using (CsvWriter cw = new CsvWriter(sw, System.Globalization.CultureInfo.CurrentCulture))
            {
                cw.WriteHeader<Grades>();
                cw.NextRecord();
                foreach (Grades grade in grades)
                {
                    cw.WriteRecord<Grades>(grade);
                    cw.NextRecord();
                }
            }
        }
    }
}
