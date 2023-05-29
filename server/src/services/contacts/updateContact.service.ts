import { Repository } from "typeorm";
import {
  tContactReturn,
  iUpdateContact,
} from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";
import { contactReturnSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  contactData: iUpdateContact,
  contactId: string
): Promise<tContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactData: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  // console.log(oldContactData)

  const newContactData = contactRepository.create({
    ...oldContactData,
    ...contactData,
  });

  await contactRepository.save(newContactData);

  const validateReturn: tContactReturn =
    contactReturnSchema.parse(newContactData);

  return validateReturn;
};

export default updateContactService;
