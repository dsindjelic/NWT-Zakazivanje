using AutoMapper;
using BankAccountSystem.AppService.ViewModel;
using BankAccountSystem.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccountSystem.AppService
{
    public class ViewMapper: Profile
    {
        public ViewMapper()
        {
            CreateMap<BankAccount, BankAccountView>();
            CreateMap<Transaction, TransactionView>();
        }
    }
}
