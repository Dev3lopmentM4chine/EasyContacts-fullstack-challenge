import { z } from "zod";
import {
  listAllUsersSchema,
  userReturnSchema,
  userSchema,
} from "../../schemas/user.schemas";
import { loginSchema } from "../../schemas/login.schemas";


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

export {
  tUser,
  tUserReturn,
  iUpdateUser,
  tListAllUsers,
  tLogin
};
