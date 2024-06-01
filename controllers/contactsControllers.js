import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import contactsService from "../services/contactsServices.js";

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await contactsService.listContacts({ owner });
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;
  const result = await contactsService.getContact({ _id, owner });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;
  const result = await contactsService.removeContact({ _id, owner });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const createContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await contactsService.addContact({ ...req.body, owner });
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;
  const result = await contactsService.updateOneContact(
    { _id, owner },
    req.body
  );
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
};
