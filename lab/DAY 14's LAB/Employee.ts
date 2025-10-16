export default abstract class Employee {
  protected name: string;
  protected salary: number;
  protected bonus: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
    this.bonus = 0;
  }

  protected abstract setBonus(): void;

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }
  
  public getBonus(): number {
    this.setBonus(); 
    return this.bonus;
  }

  public totalIncome(): number {
    return this.salary + this.getBonus();
  }
}