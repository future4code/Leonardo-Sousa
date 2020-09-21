import {Request, Response} from 'express'
import { IdGenerator } from '../services/IdGenerator';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

export const signup = async (req: Request, res: Response) => {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        if(!userData.name || !userData.email || !userData.password){
            throw new Error('Insira todas as informações para o cadastro')
        }

        if (!userData.email || userData.email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }

        if (!userData.password || userData.password.length < 6) {
            throw new Error("Senha inválida");
        }

        const idgenerator = new IdGenerator()
        const id = idgenerator.generateId()

        const userdatabase = new UserDatabase()
        await userdatabase.createUser(id, userData.name, userData.email, userData.password)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

        res.status(200).send({
            message: "Usuário criado com sucesso",
            token
        })

    } catch (error) {
        res.status(400).send({
            messege: error.messege
        })
    }
}