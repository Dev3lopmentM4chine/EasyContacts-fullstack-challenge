import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { tContactReturn } from "../../interfaces/contacts.interfaces";
import { listAllContactsSchema } from "../../schemas/contact.schemas";
import User from "../../entities/users.entity";

const listAllContactsService = async (
  userId: string
): Promise<tContactReturn[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },

    relations: {
      contacts: true,
    },
  });

  const validatedReturn = listAllContactsSchema.parse(user?.contacts);

  return validatedReturn;
};

export default listAllContactsService;
