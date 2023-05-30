import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import updateContactService from "../services/contacts/updateContact.service";
import listAllContactsService from "../services/contacts/listAllContacts.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await createContactService(req.body, req.user.id);

  return res.status(201).json(contact);
};

//Erro no retorno
const listAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listAllContactsService(req.user.id);

  return res.status(200).json(contacts);
};

//Erro no retorno
const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await updateContactService(req.body, req.params.id);

  return res.status(201).json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await deleteContactService(req.params.id);

  return res.status(204).json();
};

export {
  createContactController,
  listAllContactsController,
  updateContactController,
  deleteContactController,
};
