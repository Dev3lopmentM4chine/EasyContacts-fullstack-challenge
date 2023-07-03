import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { tUserReturn } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entity";
import { userReturnSchema } from "../../schemas/users.schemas";

const userLoggedService = async (id: string): Promise<tUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  const validateUserReturn = userReturnSchema.parse(users);

  return validateUserReturn;
};

export default userLoggedService;
