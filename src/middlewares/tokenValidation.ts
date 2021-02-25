import { Request, Response, NextFunction } from "express";
import jwt from "express-jwt";
import config from "../config/config";
import errorResponse from "../controllers/errorReponse";

export const tokenValidation = jwt({algorithms: ["HS256"], secret: config.jwtSecret});

export const tokenErrorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json(errorResponse("Unauthorized: invalid token"));
  }
}