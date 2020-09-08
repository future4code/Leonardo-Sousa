import { Place } from "./place";
import { Client } from "./client";

export class Industry extends Place implements Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;

  constructor(
    protected machinesQuantity: number, 
    cep: string
  ) {
    super(cep);
    this.name = "Bombonatti"
    this.registrationNumber = 2
    this.consumedEnergy = 500
  }

  calculateBill(): number {
    const conta: number = this.consumedEnergy * 7
    console.log("A conta ficou em:", conta)
    return conta
  }

  public getCep(): string {
    console.log("Cep:", this.cep)
    return this.cep;
  }

  public getMachinesQuantity(): number {
    console.log("Quantidade de máquinas:", this.machinesQuantity)
    return this.machinesQuantity;
  }
}