import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { AppErrors } from "../../errors";
import Contact from "../../entities/contacts.entity";

const ensureContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contactId: string = req.params.id;

  const findContact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },

    withDeleted: true,
  });

  if (!findContact) throw new AppErrors("Contact not found!", 404);

  // if (findContact.deletedAt) throw new AppErrors("Contact not found!", 404);

  return next();
};

export default ensureContactExists;
