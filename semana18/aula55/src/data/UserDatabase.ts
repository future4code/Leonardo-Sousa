import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME: string = "User";

    public async createUser(id: string, name:string, email: string, password: string){
        await this.getConnection()
        .insert({
            id,
            email,
            password,
        }).into(UserDatabase.TABLE_NAME);
    }

    
}