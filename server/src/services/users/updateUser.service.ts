import { iUpdateUser, tUserReturn } from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import User from "../../entities/users.entity";
import AppDataSource from "../../data-source";
import { userReturnSchema } from "../../schemas/users.schemas";

const updateUserService = async (
  userData: iUpdateUser,
  userId: string
): Promise<tUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const validatedReturn = userReturnSchema.parse(newUserData);

  return validatedReturn;
};

export default updateUserService;
