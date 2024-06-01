import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import contactsService from "../services/contactsServices.js";

const getAllContacts = async (_, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const createContact = async (req, res) => {
  const result = await contactsService.addContact(req.body);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateOneContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateStatusContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatus: ctrlWrapper(updateStatus),
};
