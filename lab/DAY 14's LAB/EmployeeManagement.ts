import FTE from "./FTE";
import ContractEmployee from "./ContractEmployee";
import { SalaryController } from "./SalaryController";

const staff = [
  new FTE("Charlie", 240),
  new FTE("Alice", 250),
  new FTE("Bob", 200),
  new ContractEmployee("David"),
  new ContractEmployee("Eve"),
];

console.log("Sort by Total income:");
const sorted = SalaryController.sortByTotalIncome(staff);

for (const emp of sorted) {
  console.log(
    `Name: ${emp.name}, Salary: ${emp.salary}, Bonus: ${Math.round(emp.bonus)}, Total: ${Math.round(emp.total)}`
  );
}

console.log("--------------------");
const total = SalaryController.getTotalSalary(staff);
console.log("Total salary:", Math.round(total));