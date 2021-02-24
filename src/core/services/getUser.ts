import { User } from "../entities/User";
import UserRepository from "../repositories/user.repository";

const getUser = (userRepo: UserRepository) => async (username: string): Promise<User | undefined> => {

  return await userRepo.getUser(username);
}

export default getUser;