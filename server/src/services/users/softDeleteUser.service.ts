import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";

const softDeleteUserService = async (userId: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  await userRepository.softRemove(findUser!);
};

export default softDeleteUserService;
