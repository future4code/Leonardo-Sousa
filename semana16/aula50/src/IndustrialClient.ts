import { Industry } from "./industry";
import { Client } from "./client";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, 
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    console.log("Número industrial:", this.insdustryNumber)
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    const conta: number = this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    console.log("A conta ficou em:", conta)
    return conta
  }
}