import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { tContactReturn } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import { listAllContactsSchema } from "../../schemas/contact.schemas";

const listAllContactsService = async (
  userId: string
): Promise<tContactReturn[]> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts = await contactsRepository.find({
    relations: {
      user: true,
    },
  });

  // console.log(contacts);

  const validatedReturn = listAllContactsSchema.parse(contacts);

  return validatedReturn;
};

export default listAllContactsService;
