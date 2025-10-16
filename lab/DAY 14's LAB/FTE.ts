import Employee from "./Employee";

const FTE_SALARY = 50000;
const MAX_BONUS = 1000;
const APPROX_WORKDAYS_PER_YEAR = 260; 

export default class FTE extends Employee {
  private workingDays: number;

  constructor(name: string, workingDays: number) {
    super(name, FTE_SALARY);
    this.workingDays = workingDays;
  }

  protected setBonus(): void {
    if (this.workingDays > APPROX_WORKDAYS_PER_YEAR) {
        this.bonus = MAX_BONUS;
    } else {
        this.bonus = MAX_BONUS * (this.workingDays / APPROX_WORKDAYS_PER_YEAR);
    }
  }
}