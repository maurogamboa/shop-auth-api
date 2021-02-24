import { TokenAuth } from "../entities/TokenAuth";
import UserRepository from "../repositories/user.repository";

const signIn = (userRepo: UserRepository) => async (username: string, password: string): Promise<TokenAuth> => {
  if(!username || !password) {
    return Promise.reject('username and password can not be null');
  }
  const validPassword = await userRepo.comparePassword(username, password);
  
  if(validPassword) {
    return Promise.resolve({ token: "tokenauth"});  
  } else {
    return Promise.reject('invalid username or password'); 
  }
}

export default signIn;