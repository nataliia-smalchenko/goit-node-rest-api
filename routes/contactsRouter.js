import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} from "../schemas/contactsSchemas.js";
import validateBody from "../decorators/validateBody.js";
import validateId from "../decorators/validateObjectId.js";
import isEmptyBody from "../decorators/isEmptyBody.js";

const contactsRouter = express.Router();

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
  contactsControllers.updateStatus
);

export default contactsRouter;
