import {Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness';

export const signup = async (req: Request, res: Response) => {
  try {
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    const userBusiness = new UserBusiness();
    const token = await userBusiness.signUp(userData.name, userData.email, userData.password);

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