import Employee from "./Employee";

const CONTRACTOR_SALARY = 40000;

export default class ContractEmployee extends Employee {
  constructor(name: string) {
    super(name, CONTRACTOR_SALARY);
  }
  
  protected setBonus(): void {
    this.bonus = 0;
  }
}