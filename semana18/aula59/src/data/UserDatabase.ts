import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async signUpUser (id: string, name: string, email: string, passsword: string, role: string): Promise<void>{
    await this.getConnection()
    .insert({
      id,
      name,
      email,
      passsword,
      role
    }).into(UserDatabase.TABLE_NAME)
  }

  
}
