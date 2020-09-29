import { Commerce } from "./commerce";
import { Industry } from "./industry";
import { Residence } from "./residence";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClients";
import { IndustrialClient } from "./IndustrialClient";



const comcli: CommercialClient = new CommercialClient("comcli", 1, 200, "123.123.123-12", 5, "12312-123")
console.log("----- cliente do comercio -----")
comcli.getCep()
comcli.getCnpj()
comcli.getFloorsQuantity()
comcli.calculateBill()

const indcli: IndustrialClient = new IndustrialClient("indcli", 1, 200, "123.123.123-12", 5, "12312-123")
console.log("----- cliente da industria -----")
indcli.getCep()
indcli.getIndustryNumber()
indcli.getMachinesQuantity()
indcli.calculateBill()

const rescli: ResidentialClient = new ResidentialClient("rescli", 1, 200, "123.123.123-12", 5, "12312-123")
console.log("----- cliente da residencia -----")
rescli.getCep()
rescli.getCpf()
rescli.getDwellersQuantity()
rescli.calculateBill()