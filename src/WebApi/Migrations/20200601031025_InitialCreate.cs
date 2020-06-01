using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    BookId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Author = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.BookId);
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "BookId", "Author", "Price", "Title" },
                values: new object[,]
                {
                    { 1, "J.K. Rowling", 10.5m, "Harry Potter and the Prisioner of Azkaban" },
                    { 2, "Sun Tzu", 5m, "Art of War" },
                    { 3, "J.R.R. Tolkien", 7.5m, "The Lord of The Rings: The Fellowship of the Ring" },
                    { 4, "Michele Obama", 12.5m, "Becoming" },
                    { 5, "Stephen King", 8m, "The Shining" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
