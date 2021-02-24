import { Router } from "express";
import { signUpController, signInController } from "../controllers/authUserHttp.controller";

export const authRoutes = Router();

authRoutes.post("/signup", signUpController);
authRoutes.post("/signin", signInController);