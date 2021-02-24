import {Request, Response} from 'express'
import {getUserService} from '../core/services';


const getUserController = async (request: Request, response: Response) => {
  const user = await getUserService('maurogamboa');
  response.send(user);
}

export default getUserController;