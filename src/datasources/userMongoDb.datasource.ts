import { User } from "../core/entities/User";
import UserRepository from "../core/repositories/user.repository";
import mongoose from 'mongoose';
import UserModel from './models/user.shema'
import "./database";

export class UserDataSource implements UserRepository {
  async addUser(user: User, password: string): Promise<User> {
    if(await UserModel.findOne({username: user.username})) {
      return Promise.reject("username already exist"); 
    }

    const newUser = new UserModel({...user, password});
    await newUser.save();
    // return Promise.resolve({...user, password: undefined});
    return Promise.resolve({
      username: newUser.username,
      fullname: newUser.fullname,
      roles: newUser.roles,
      active: newUser.active
    }) 

  }
  async getUser(username: string): Promise<User | undefined> {
    const user = await UserModel.findOne({username: username});
    if(user) {
      return Promise.resolve({
        username: user.username,
        fullname: user.fullname,
        roles: user.roles,
        active: user.active
      }) 
    } else {
      return Promise.resolve(undefined);   
    }
  }

  async comparePassword(username: string, password: string): Promise<boolean> {

    const user = await UserModel.findOne({username: username});
    if(user) {
      try {
        return user.comparePassword(password);    
      } catch (error) {
        return Promise.resolve(false);  
      }
    } else {
      return Promise.resolve(false);
    }
  }
}