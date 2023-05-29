import { Router } from "express";
import {
  createContactController,
  updateContactController,
} from "../controllers/contacts.controllers";
import ensureEmailAlreadyExists from "../middlewares/contacts/ensureEmailAlreadyExists.middleware";
import ensurePhoneNumberAlreadyExists from "../middlewares/contacts/ensurePhoneNumberAlreadyExists.middleware";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { contactSchema, updateContactSchema } from "../schemas/contact.schemas";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureOwnerContact from "../middlewares/contacts/ensureOwnerContact.middleware";
import listAllContactsService from "../services/contacts/listAllContacts.service";

const contactsRouter: Router = Router();

// Rotas CRUD
contactsRouter.post(
  "",
  ensureDataIsValid(contactSchema),
  ensureTokenIsValid,
  ensurePhoneNumberAlreadyExists,
  ensureEmailAlreadyExists,
  createContactController
);

contactsRouter.get("", ensureTokenIsValid, listAllContactsService);

contactsRouter.patch(
  "/:id",
  ensureDataIsValid(updateContactSchema),
  ensureTokenIsValid,
  ensureOwnerContact,
  ensurePhoneNumberAlreadyExists,
  ensureEmailAlreadyExists,
  updateContactController
);

export default contactsRouter;
