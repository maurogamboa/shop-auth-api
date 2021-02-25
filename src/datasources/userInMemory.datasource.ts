import { User } from "../core/entities/User";
import UserRepository from "../core/repositories/user.repository";
import { UserData } from "./models/User.model";

export class UserDataSource implements UserRepository {

  private cacheUsers = new Map<string, UserData>();

  addUser(user: User, password: string): Promise<User> {
    if(this.cacheUsers.has(user.username)) return Promise.reject("username already exist"); 
    this.cacheUsers.set(user.username, {...user, password});
    return Promise.resolve({...user, password: undefined});

  }
  getUser(username: string): Promise<User | undefined> {
    const user = this.cacheUsers.get(username);
    if(user) {
      return Promise.resolve({...user, password: undefined}) 
    } else {
      return Promise.resolve(undefined);   
    }
  }

  comparePassword(username: string, password: string): Promise<boolean> {
    const user = this.cacheUsers.get(username);
    return Promise.resolve(user?.password === password)
  }
}