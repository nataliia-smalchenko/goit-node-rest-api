import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} from "../schemas/contactsSchemas.js";
import validateBody from "../middlewares/validateBody.js";
import validateId from "../middlewares/validateObjectId.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import authenticate from "../middlewares/authenticate.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", validateId, contactsControllers.getOneContact);

contactsRouter.delete("/:id", validateId, contactsControllers.deleteContact);

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  validateId,
  validateBody(updateContactSchema),
  contactsControllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isEmptyBody,
  validateId,
  validateBody(updateStatusContactSchema),
  contactsControllers.updateContact
);

export default contactsRouter;
