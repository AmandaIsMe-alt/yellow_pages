import ensureAuthMiddleware from "../middlewares/ensureAuth";
import validateSchemaMiddleware from "../middlewares/validateSchema";
import createUserController from "../controllers/user/createUser";
import deleteUserController from "../controllers/user/deleteUser";
import listUserController from "../controllers/user/listUser";
import { Router } from "express";
import updateUserController from "../controllers/user/updateUser";

import { userSchema, updateSchema } from "../schemas/user";

const userRoutes = Router();

userRoutes.post(
  "", validateSchemaMiddleware(userSchema), createUserController);

userRoutes.get(
  "/owner", ensureAuthMiddleware, listUserController);

userRoutes.patch(
  "/owner", ensureAuthMiddleware, validateSchemaMiddleware(updateSchema), updateUserController);

userRoutes.delete(
  "/owner", ensureAuthMiddleware, deleteUserController);


export default userRoutes;
