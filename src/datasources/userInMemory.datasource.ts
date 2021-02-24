import { User } from "../core/entities/User";
import UserRepository from "../core/repositories/user.repository";
import { UserData } from "./models/User.model";

export class UserDataSource implements UserRepository {

  private cacheUsers: UserData[] = []

  addUser(user: User, password: string): Promise<User> {
    const lastIndex = this.cacheUsers.push({...user, password}) - 1;
    const newUser = Object.assign({}, this.cacheUsers[lastIndex]);
    delete newUser.password;
    return Promise.resolve(newUser);

  }
  getUser(username: string): Promise<User | undefined> {
    return Promise.resolve(this.cacheUsers.find(user => user.username === username));
  }

  comparePassword(username: string, password: string): Promise<boolean> {
    const user = this.cacheUsers.find(user => user.username === username);
    return Promise.resolve(user?.password === password)
  }
}