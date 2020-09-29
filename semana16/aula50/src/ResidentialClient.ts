import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client{
  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number, 
    private cpf: string,
    dwellersQuantity: number,
    cep: string,
  ) {
    super(dwellersQuantity, cep)
  }

  public getCpf(): string {
    console.log("Cpf:", this.cpf)
    return this.cpf;
  }

  public calculateBill(): number {
    const conta: number = this.consumedEnergy * 0.75
    console.log("A conta ficou em:", conta)
    return conta
  }
}