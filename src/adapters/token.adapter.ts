import { User } from "../core/entities/User";
import { token, TokenGenerator } from "../core/interfaces/tokenAuth";
import jwt from "jsonwebtoken";
import config from "../config/config";

export class TokenGeneratorAdapter implements TokenGenerator {
  generateToken(user: User): token {
    return {
      token: jwt.sign(user, config.jwtSecret, {
        expiresIn: 300 //5 minutos
      })
    } 
  }

}