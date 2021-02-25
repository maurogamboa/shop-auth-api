import {Request, Response} from 'express'
import { UserRole } from '../core/entities/Roles';
import { User } from '../core/entities/User';
import {getUserService} from '../core/services';
import errorResponse from './errorReponse';


const getUserController = async (request: Request, response: Response) => {
  const currentUser = request.user as User;

  //User must have role: sys admin
  if(currentUser?.roles.includes(UserRole.SysAdmin)) {
    const user = await getUserService(request.body.username);
    response.send(user);
  } else {
    response.status(401).json(errorResponse("Unauthorized"));
  }
}

export default getUserController;