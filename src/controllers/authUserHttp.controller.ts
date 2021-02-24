import {Request, Response} from 'express'
import { addUserService, signInService } from '../core/services';

export const signUpController = async (req: Request, res: Response) => {
  try {
    const newUser = await addUserService(req.body, req.body.password)
    res.send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }

}

export const signInController = async (req: Request, res: Response) => {
  try {
    const token = await signInService(req.body.username, req.body.password);
    res.send(token);
  } catch (error) {
    res.status(400).send(error);
  }
}