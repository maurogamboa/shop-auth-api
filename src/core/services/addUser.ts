import { User } from "../entities/User";
import UserRepository from "../repositories/user.repository";

const addUser = (userRepo: UserRepository) => async (newUser: User, password: string): Promise<User> => {
  if(!newUser?.username || !newUser?.fullname) {
    return Promise.reject('username or fullname can not be null');
  }
  const usernameExist = await userRepo.getUser(newUser.username);
  
  if(usernameExist) {
    return Promise.reject('username already exist');  
  }
  const addedUSer = await userRepo.addUser({
    ...newUser, active: true
    }, password);
  return Promise.resolve(addedUSer);
}

export default addUser;