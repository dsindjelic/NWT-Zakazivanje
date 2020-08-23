using System;
using System.Collections.Generic;
using System.Text;

namespace BanckAccountSystem.Model.Contract
{
   public interface IBanckAccountRepository
    {
        void Add(BanckAccount banckAccount);
        void Save(BanckAccount banckAccount);
        IEnumerable<BanckAccount> FindAll();
        BanckAccount FindBy(Guid AccountId);
    }
}
