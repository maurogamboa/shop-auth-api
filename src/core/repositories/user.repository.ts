import { User } from "../entities/User";

export default interface UserRepository {
  addUser(user: User, password: string): Promise<User>;
  getUser(username: string): Promise<User | undefined>;
  comparePassword(username: string, password: string): Promise<boolean>; 
}