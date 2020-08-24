using BanckAccountSystem.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.DependencyInjection;


namespace BanckAccountSystem.Repository
{
    class BanckAccountContext : DbContext
    {
        public BanckAccountContext(DbContextOptions<BanckAccountContext> options) : base(options) { }
        public DbSet<BanckAccount> BanckAccounts { get; set; }
        public DbSet<Transaction> Transactions{ get; set; }
    }
}
