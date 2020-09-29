import { Client } from "./client";
import { CommercialClient } from "./CommercialClients";
import { IndustrialClient } from "./IndustrialClient";
import { ResidentialClient } from "./ResidentialClient";

export class ClientManager {
  private clients: Client[] = [];

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber
    })

    if(foundClient){
      return foundClient.calculateBill()
    }

    return 0;
  }

  public registerClient(client: Client): void {
    this.clients.push(client)
  }

  public getClientsQuantity(): number {
    return this.clients.length;
  }
}
const clientManager = new ClientManager()

const comcli: CommercialClient = new CommercialClient("comcli", 1, 200, "123.123.123-12", 5, "12312-123")
clientManager.registerClient(comcli)

const indcli: IndustrialClient = new IndustrialClient("indcli", 2, 200, "123.123.123-12", 5, "12312-123")
clientManager.registerClient(indcli)

const rescli: ResidentialClient = new ResidentialClient("rescli", 3, 200, "123.123.123-12", 5, "12312-123")
clientManager.registerClient(rescli)

clientManager.calculateBillOfClient(1)
clientManager.calculateBillOfClient(2)
clientManager.calculateBillOfClient(3)