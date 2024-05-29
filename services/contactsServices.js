import Contact from "../models/Contact.js";

function listContacts({ filter = {}, fields = "" }) {
  return Contact.find(filter, fields);
}

function getContactById(contactId) {
  return Contact.findById(contactId);
}

function removeContact(contactId) {
  return Contact.findByIdAndDelete(contactId);
}

function addContact(data) {
  return Contact.create(data);
}

function updateOneContact(contactId, data) {
  return Contact.findByIdAndUpdate(contactId, data);
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateOneContact,
};
