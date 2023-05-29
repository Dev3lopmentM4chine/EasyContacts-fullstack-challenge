import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { AppErrors } from "../../errors";

const ensureUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userId: string = req.params.id;

  const findUser: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },

    withDeleted: true,
  });

  if (!findUser) throw new AppErrors("User not found!", 404);

  if (findUser.deletedAt) throw new AppErrors("User not found!", 404);

  return next();
};

export default ensureUserExists;
