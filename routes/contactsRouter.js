import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} from "../controllers/contactsControllers.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";
import validateBody from "../helpers/validateBody.js";
import validateId from "../helpers/validateObjectId.js";
import isEmptyBody from "../helpers/isEmptyBody.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", validateId, getOneContact);

contactsRouter.delete("/:id", validateId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  validateId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch("/:id/favorite", validateId);

export default contactsRouter;
