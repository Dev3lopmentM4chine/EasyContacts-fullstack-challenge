import { z } from "zod";
import {
  listAllUsersSchema,
  userReturnSchema,
  userSchema,
} from "../schemas/users.schemas";

type tUser = z.infer<typeof userSchema>;
type tUserReturn = z.infer<typeof userReturnSchema>;
type tListAllUsers = z.infer<typeof listAllUsersSchema>;

interface iUpdateUser {
  fullName: string;
  email: string;
  password: string;
}

export { tUser, tUserReturn, iUpdateUser, tListAllUsers };
