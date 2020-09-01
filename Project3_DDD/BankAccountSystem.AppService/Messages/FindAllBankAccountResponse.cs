using BankAccountSystem.AppService.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccountSystem.AppService.Messages
{
    public class FindAllBankAccountResponse : ResponseBase
    {
        public IList<BankAccountView> BankAccountView { get; set; }
    }
}
