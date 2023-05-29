import { Repository } from "typeorm";
import { tContact, tContactReturn } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";
import { contactReturnSchema } from "../../schemas/contact.schemas";

const createContactService = async (
  contactData: tContact
): Promise<tContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact = contactRepository.create(contactData);

  await contactRepository.save(contact);

  const validatedReturn = contactReturnSchema.parse(contact);

  return validatedReturn;
};

export default createContactService;
