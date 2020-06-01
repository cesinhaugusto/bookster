using Bookster.WebApi.Entities;
using Bookster.WebApi.Services;
using Microsoft.EntityFrameworkCore;

namespace Bookster.WebApi.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base() { }
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Book>().HasData(BookService.GetBooks());
        }
    }
}