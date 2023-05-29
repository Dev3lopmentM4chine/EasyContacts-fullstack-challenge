import { NextFunction, Request, Response } from "express";
import { AppErrors } from "../../errors";
import { Repository } from "typeorm";
import Contact from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";

const ensureOwnerContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: req.params.id,
  });

  console.log(contact)

//   if (req.user.id !== contact.user.id) {
//     throw new AppErrors("Insufficient permission", 403);
//   }

  return next();
};

export default ensureOwnerContact;
