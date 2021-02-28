import { UserDataSource } from "../../datasources/userMongoDb.datasource";
import getUser from "./getUser";
import addUser from "./addUser";
import signIn from "./signIn";
import { TokenGeneratorAdapter } from "../../adapters/token.adapter";

const userRepository = new UserDataSource();
const tokenAdapter = new TokenGeneratorAdapter();

export const getUserService = getUser(userRepository);

export const addUserService = addUser(userRepository);

export const signInService = signIn(userRepository, tokenAdapter);



