import { User } from "../entities/User";

export type token = 
{
  token: string;
}

export interface TokenGenerator {
  generateToken(user: User): token
}