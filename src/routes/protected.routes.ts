import { Router } from "express";
import getUserController from "../controllers/getuserHttp.controller";
import { tokenValidation } from "../middlewares/tokenValidation";

export const protectedRoutes = Router();

protectedRoutes.post("/getuser", tokenValidation, getUserController);