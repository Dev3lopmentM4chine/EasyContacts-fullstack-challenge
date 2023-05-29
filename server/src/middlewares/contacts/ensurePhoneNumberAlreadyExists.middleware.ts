import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { AppErrors } from "../../errors";
import Contact from "../../entities/contacts.entity";

const ensurePhoneNumberAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  
  if (req.body.phoneNumber) {
    const phoneNumber = await userRepository.findOne({
      where: {
        phoneNumber: req.body.phoneNumber,
      },

      // withDeleted: true,
    });

    if (phoneNumber) throw new AppErrors("Phone Number already exists!", 409);
  }

  return next();
};

export default ensurePhoneNumberAlreadyExists;
