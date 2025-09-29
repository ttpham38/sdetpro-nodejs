export default class BaseAnimal {
  protected maxSpeed: number = 0;
  public name: string = "Animal";

  constructor(name: string, maxSpeed: number) {
    this.name = name;
    this.maxSpeed = maxSpeed;
  }
  public getSpeed() {
    return Math.floor(Math.random() * this.maxSpeed + 1);
  }
}