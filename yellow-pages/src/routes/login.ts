import loginUserController from "../controllers/login/login";
import validateSchemaMiddleware from "../middlewares/validateSchema";
import { Router } from "express";
import { loginSchema } from "../schemas/user";


const loginRoutes = Router();

loginRoutes.post(
  "", validateSchemaMiddleware(loginSchema), loginUserController);


export default loginRoutes;
