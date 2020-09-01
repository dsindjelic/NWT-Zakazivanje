using BankAccountSystem.AppService.ViewModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankAccountSystem.Models
{
    public class DataVM
    {
        public BankAccountView BankAccountView { get; set; }
        public TransactionView TransactionView { get; set; }
        public IEnumerable<SelectListItem> AllAccount { get; set; }

    }
}
