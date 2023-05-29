import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import updateContactService from "../services/contacts/updateContact.service";
import listAllContactsService from "../services/contacts/listAllContacts.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  req.body.user = req.user.id;

  const contact = await createContactService(req.body);

  return res.status(201).json(contact);
};

const listAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listAllContactsService();

  return res.status(200).json(contacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await updateContactService(req.body, req.params.id);

  return res.status(201).json(contact);
};

// const deleteUserController = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const user = await softDeleteUserService(req.params.id);

//   return res.status(204).json();
// };

export {
  createContactController,
  listAllContactsController,
  updateContactController,
  //   deleteUserController,
};
