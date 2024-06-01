import Contact from "../models/Contact.js";

function listContacts(filter = {}) {
  return Contact.find(filter);
}

function getContact(filter) {
  return Contact.findOne(filter);
}

function removeContact(filter) {
  return Contact.findOneAndDelete(filter);
}

function addContact(data) {
  return Contact.create(data);
}

function updateOneContact(filter, data) {
  return Contact.findOneAndUpdate(filter, data);
}

export default {
  listContacts,
  getContact,
  removeContact,
  addContact,
  updateOneContact,
};
