import { z } from "zod";

const userSchema = z.object({
  fullName: z.string().max(50),
  email: z.string().email().max(50),
  phoneNumber: z.string(),
  password: z.string().max(120),
});

const userReturnSchema = userSchema
  .extend({
    id: z.string().uuid(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .omit({ password: true });

const updateUserSchema = z.object({
  fullName: z.string().max(50).nullish(),
  email: z.string().email().max(50).nullish(),
  phoneNumber: z.string().nullish(),
  password: z.string().max(120).nullish(),
});

const listAllUsersSchema = z.array(userReturnSchema);

export { userSchema, userReturnSchema, updateUserSchema, listAllUsersSchema };
