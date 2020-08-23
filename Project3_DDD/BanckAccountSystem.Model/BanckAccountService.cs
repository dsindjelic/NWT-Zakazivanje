using BanckAccountSystem.Model.Contract;
using System;
using System.Collections.Generic;
using System.Text;

namespace BanckAccountSystem.Model
{
   public   class BanckAccountService
    {
        private IBanckAccountRepository _banckAccountRepository;
        public BanckAccountService(IBanckAccountRepository bankAccountRepository)
        {
            _banckAccountRepository = bankAccountRepository;
        }
        public void Transfer(Guid accountNoTo, Guid accountNoFrom, decimal amount)
        {
            BanckAccount banckAccountTo = _banckAccountRepository.FindBy(accountNoTo);
            BanckAccount banckAccountFrom = _banckAccountRepository.FindBy(accountNoFrom);
            if (banckAccountFrom.CanWithdraw(amount))
            {
                banckAccountTo.Deposit(amount, "From Acc " + banckAccountFrom.CustomerRef + " ");
                banckAccountFrom.Withdraw(amount, "Transfer To Acc " + banckAccountTo.CustomerRef + " ");
                _banckAccountRepository.Save(banckAccountTo);
                _banckAccountRepository.Save(banckAccountFrom);
            }
            else
            {
                throw new InsufficientFundsException();
            }
        }
    }
}
