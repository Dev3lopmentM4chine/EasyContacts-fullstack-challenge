import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { tContactReturn } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import { listAllContactsSchema } from "../../schemas/contact.schemas";

const listAllContactsService = async (): Promise<[]> => {
  const userRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts = await userRepository.find({
    select: {
      user: {
        id: true
      }
    }
  });

  return contacts;
};

export default listAllContactsService;
