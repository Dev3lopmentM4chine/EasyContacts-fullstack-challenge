import { z } from "zod";
import {
  contactReturnSchema,
  contactSchema,
  listAllContactsSchema,
} from "../../schemas/contact.schemas";
import { updateUserSchema, userReturnSchema } from "../../schemas/user.schemas";

// Contact
type tContact = z.infer<typeof contactSchema>;
type tContactReturn = z.infer<typeof contactReturnSchema>;
type tListAllContact = z.infer<typeof listAllContactsSchema>;
interface iUpdateContact {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
}
export { tContact, tContactReturn, tListAllContact, iUpdateContact };

//User
type tUserReturn = z.infer<typeof userReturnSchema>;
interface iUpdateUser {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
}

export { tUserReturn, iUpdateUser };
