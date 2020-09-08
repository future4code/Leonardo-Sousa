import { Place } from "./place";
import { Client } from "./client";

export class Residence extends Place implements Client{
  name: string;
  registrationNumber: number;
  consumedEnergy: number;

  constructor(
    protected dwellersQuantity: number,
    cep: string
  ) {
    super(cep);
    this.name = "Vinicius"
    this.registrationNumber = 3
    this.consumedEnergy = 200
  }

  calculateBill(): number {
    const conta: number = this.consumedEnergy * 9
    console.log("A conta ficou em:", conta)
    return conta
  }

  public getCep(): string {
    console.log("Cep:", this.cep)
    return this.cep;
  }

  public getDwellersQuantity(): number {
    console.log("Quantidade de moradores:", this.dwellersQuantity)
    return this.dwellersQuantity
  }
}