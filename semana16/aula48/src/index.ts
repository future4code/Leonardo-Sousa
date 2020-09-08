// 1 - a) Construtor serve para mexer nos valores do objeto, ou seja, poder criar um objeto
// com os valores determinados. 

// 1 - b) Aparece apenas uma vez.

// 1 - c) Só temos acesso a propredades privadas na própria classe.

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }

  public getDate(): string {
    return this.date
  }

  public getValue(): number {
    return this.value
  }

  public getDescription(): string {
    return this.description
  }
}

const primeiraTransacao: Transaction = new Transaction("25/02/1998", 100000, "To ficando rico")

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number, transactions: Transaction[]) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    this.transactions = transactions;
  }

  public getName(): string {
    return this.name
  }

  public getCpf(): string {
    return this.cpf
  }

  public getAge(): number {
    return this.age
  }

  public getTransaction(): Transaction[] {
    return this.transactions
  }
}

const leonardo: UserAccount = new UserAccount("888.999.888-99", "Leo Gomes", 22, [primeiraTransacao])