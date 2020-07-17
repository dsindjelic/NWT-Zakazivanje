using Microsoft.EntityFrameworkCore.Migrations;

namespace NWT_2.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SGradesEF",
                columns: table => new
                {
                    No = table.Column<string>(nullable: false),
                    name = table.Column<string>(nullable: false),
                    math = table.Column<int>(nullable: false),
                    serb = table.Column<int>(nullable: false),
                    phys = table.Column<int>(nullable: false),
                    chem = table.Column<int>(nullable: false),
                    bio = table.Column<int>(nullable: false),
                    rule = table.Column<int>(nullable: false),
                    averageRating = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SGradesEF", x => x.No);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SGradesEF");
        }
    }
}
