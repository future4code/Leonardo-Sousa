import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

  public async signUp(name: string, email: string, password: string): Promise<string> {
    if(!name || !email || !password){
      throw new Error('Insira todas as informações para o cadastro')
    }

    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    if (!password || password.length < 6) {
      throw new Error("Senha inválida");
    }

    const idgenerator = new IdGenerator()
    const id = idgenerator.generate()

    const userdatabase = new UserDatabase()
    await userdatabase.signUpUser(id, name, email, password, "dd")
    
    const authenticator = new Authenticator()
    const token = authenticator.generateToken({id})

    return token;
  }
}