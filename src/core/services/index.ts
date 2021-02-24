import { UserDataSource } from "../../datasources/userInMemory.datasource";
import getUser from "./getUser";
import addUser from "./addUser";
import signIn from "./signIn";

const userRepository = new UserDataSource();

export const getUserService = getUser(userRepository);

export const addUserService = addUser(userRepository);

export const signInService = signIn(userRepository);



