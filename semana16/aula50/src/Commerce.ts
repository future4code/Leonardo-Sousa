import { Place } from "./place";
import { Client } from "./client";

export class Commerce extends Place implements Client{
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  
  constructor(
    protected floorsQuantity: number,
    cep: string
  ) {
    super(cep);
    this.name = "Leo Gomes"
    this.registrationNumber = 1
    this.consumedEnergy = 200
  }

  
  calculateBill(): number {
    const conta: number = this.consumedEnergy * 5
    console.log("A conta ficou em:", conta)
    return conta
  }

  public getCep(): string {
    console.log("Cep:", this.cep)
    return this.cep;
  }

  public getFloorsQuantity(): number {
    console.log("Quantidade de andares:", this.floorsQuantity)
    return this.floorsQuantity;
  }
}