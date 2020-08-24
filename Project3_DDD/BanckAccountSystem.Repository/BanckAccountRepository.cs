using BanckAccountSystem.Model;
using BanckAccountSystem.Model.Contract;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace BanckAccountSystem.Repository
{
     public class BanckAccountRepository:IBanckAccountRepository
    {
        private BanckAccountContext context;
         BanckAccountRepository(BanckAccountContext ctx) => context = ctx;
        public void Add(BanckAccount banckAccount)
        {
            context.BanckAccounts.Add(banckAccount);

            context.SaveChanges();
            updateOrCreateTransaction(banckAccount);
        }

        public IEnumerable<BanckAccount> FindAll()
        {
            var result =context.BanckAccounts.Include(x => x.Transaction).ToList();
            //to break circular reference
            foreach (BanckAccount banckaccount in result)
            {
                if (banckaccount.Transaction != null)
                {
                    foreach (Transaction trs in banckaccount.Transaction)
                    {
                        trs.BanckAccount = null;
                    }
                }
            }
            return result;

        }

        public BanckAccount FindBy(Guid AccountId)
        {
            return context.BanckAccounts.FirstOrDefault(x => x.BanckAccountId == AccountId);
        }

        public void Save(BanckAccount banckAccount)
        {
            BanckAccount account = context.BanckAccounts.FirstOrDefault(x => x.BanckAccountId == banckAccount.BanckAccountId);
            account.CustomerRef = banckAccount.CustomerRef;
            account.Balance = banckAccount.Balance;
            context.SaveChanges();
            updateOrCreateTransaction(banckAccount);
        }

        private void updateOrCreateTransaction(BanckAccount banckAccount)
        {
            BanckAccount account = context.BanckAccounts.FirstOrDefault(x => x.BanckAccountId == banckAccount.BanckAccountId);
            foreach (Transaction trs in context.Transactions.Where(x => x.BanckAccount.BanckAccountId == banckAccount.BanckAccountId).ToList())
            {
                context.Transactions.Remove(trs);
                context.SaveChanges();

            }

            foreach (Transaction trs in banckAccount.Transaction)
            {
                context.Transactions.Add(trs);
                context.SaveChanges();

            }
        }
    }
}
