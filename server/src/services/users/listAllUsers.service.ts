import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { tListAllUsers } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entity";
import { listAllUsersSchema } from "../../schemas/users.schemas";

const listAllUsersService = async (): Promise<tListAllUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();

  const validateUsers = listAllUsersSchema.parse(users);

  return validateUsers;
};

export default listAllUsersService;
