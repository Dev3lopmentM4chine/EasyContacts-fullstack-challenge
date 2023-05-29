import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { AppErrors } from "../../errors";

const ensureEmailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
  if (req.body.email) {
    const email = await userRepository.findOne({
      where: {
        email: req.body.email,
      },

      withDeleted: true,
    });

    if (email) throw new AppErrors("Email already exists!", 409);
  }

  return next();
};

export default ensureEmailAlreadyExists;
