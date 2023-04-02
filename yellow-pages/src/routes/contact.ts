import ensureAuthMiddleware from "../middlewares/ensureAuth";
import validateSchemaMiddleware from "../middlewares/validateSchema";
import verifyContactIdMiddleware from "../middlewares/verifyContactId";
import { Router } from "express";
import createContactController from "../controllers/contact/createContact";
import deleteContactController from "../controllers/contact/deleteContact";
import listContactController from "../controllers/contact/listContact";
import updateContactController from "../controllers/contact/updateContact";
import { contactSchema, updateSchema } from "../schemas/contact";
import { listContactByIdController } from "../controllers/contact/listContactById";

const contactRoutes = Router();

contactRoutes.post(
  "/", ensureAuthMiddleware, validateSchemaMiddleware(contactSchema), createContactController);

contactRoutes.get("/", ensureAuthMiddleware, listContactController);

 contactRoutes.get(
  "/:id", ensureAuthMiddleware, listContactByIdController);

contactRoutes.patch(
  "/:id", ensureAuthMiddleware, verifyContactIdMiddleware, validateSchemaMiddleware(updateSchema), updateContactController);

contactRoutes.delete(
  "/:id", ensureAuthMiddleware, deleteContactController);


export default contactRoutes;
