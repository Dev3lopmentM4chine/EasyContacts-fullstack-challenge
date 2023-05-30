import { Repository } from "typeorm";
import { tContact, tContactReturn } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";
import { contactReturnSchema } from "../../schemas/contact.schemas";
import User from "../../entities/users.entity";

const createContactService = async (
  contactData: tContact,
  userId: string
): Promise<tContactReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newContactData = {
    ...contactData,
    user: user!,
  };

  const contact: Contact = contactRepository.create(newContactData);

  await contactRepository.save(contact);

  const validatedReturn = contactReturnSchema.parse(contact);

  return validatedReturn;
};

export default createContactService;
