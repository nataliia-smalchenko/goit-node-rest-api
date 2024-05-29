import Contact from "../models/Contact.js";

function listContacts(filter = {}) {
  return Contact.find(filter);
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

function updateStatusContact(contactId, data) {
  return Contact.findByIdAndUpdate(contactId, data);
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateOneContact,
  updateStatusContact,
};
