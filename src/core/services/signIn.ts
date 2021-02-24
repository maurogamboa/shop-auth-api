import { token, TokenGenerator } from "../interfaces/tokenAuth";
import UserRepository from "../repositories/user.repository";

const signIn = (userRepo: UserRepository, tokenGen :TokenGenerator) => async (username: string, password: string): Promise<token> => {
  if(!username || !password) {
    return Promise.reject('username and password can not be null');
  }
  const validPassword = await userRepo.comparePassword(username, password);
  const user = await userRepo.getUser(username);

  if(user && validPassword) {
    return Promise.resolve(tokenGen.generateToken(user));  
  } else {
    return Promise.reject('invalid username or password'); 
  }
}

export default signIn;