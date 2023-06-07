import { z } from "zod";
import {
  listAllUsersSchema,
  userReturnSchema,
  userSchema,
} from "../../schemas/user.schemas";
import { loginSchema } from "../../schemas/login.schemas";
import {
  contactReturnSchema,
  contactSchema,
  listAllContactsSchema,
} from "../../schemas/contact.schemas";

// Login
type tLogin = z.infer<typeof loginSchema>;

// User
type tUser = z.infer<typeof userSchema>;
type tUserReturn = z.infer<typeof userReturnSchema>;
type tListAllUsers = z.infer<typeof listAllUsersSchema>;
interface iUpdateUser {
  fullName: string;
  email: string;
  password: string;
}

// Contact
type tContact = z.infer<typeof contactSchema>;
type tContactReturn = z.infer<typeof contactReturnSchema>;
type tListAllContact = z.infer<typeof listAllContactsSchema>;
interface iUpdateContact {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
}

export {
  tUser,
  tUserReturn,
  iUpdateUser,
  tListAllUsers,
  tLogin,
  tContact,
  tContactReturn,
  tListAllContact,
  iUpdateContact,
};
