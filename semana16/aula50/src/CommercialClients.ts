import { Client } from "./client";
import { Commerce } from "./commerce";

export class CommercialClient extends Commerce implements Client{
  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number, 
    private cnpj: string,
    floorsQuantity: number,
    cep: string,
  ) {
    super(floorsQuantity, cep)
  }

  public getCnpj(): string {
    console.log("Cnpj:", this.cnpj)
    return this.cnpj;
  }

  public calculateBill(): number {
    const conta: number = this.consumedEnergy * 0.53
    console.log("A conta ficou em:", conta)
    return conta
  }
}