using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccountSystem.Model
{
    public class BankAccount
    {
       
        public decimal Balance { get; set; }

        public Guid BankAccountId { get; set; }
      
        public List<Transaction> Transaction { get; set; }
        
      
        public string CustomerRef
        {
            get; set;
        }
        public bool CanWithdraw(decimal amount)
        {
            return (Balance >= amount);
        }
        public void Withdraw(decimal amount, string reference)
        {
            if (CanWithdraw(amount))
            {
                Balance -= amount;
                Transaction.Add(new Transaction(0m, amount,
                reference, DateTime.Now));
            }
            else
            {
                throw new InsufficientFundsException();
            }
        }
        public void Deposit(decimal amount, string reference)
        {
            Balance += amount;
            Transaction.Add(new Transaction(amount, 0m, reference, DateTime.Now));
        }
        public IEnumerable<Transaction> GetTransactions()
        {
            return Transaction;
        }
    }
}
