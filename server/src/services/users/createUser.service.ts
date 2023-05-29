import { Repository } from "typeorm";
import { tUser, tUserReturn } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entity";
import AppDataSource from "../../data-source";
import { userReturnSchema } from "../../schemas/users.schemas";

const createUserService = async (userData: tUser): Promise<tUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const validatedReturn = userReturnSchema.parse(user);

  return validatedReturn;
};

export default createUserService;
