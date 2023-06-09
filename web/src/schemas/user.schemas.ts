import { z } from "zod";

const userSchema = z.object({
  fullName: z
    .string()
    .min(8, "Full Name very small")
    .max(50, "Full Name very big"),
  email: z
    .string()
    .email("Email required")
    .min(16, "Email very small")
    .max(50, "Email very big"),
  phoneNumber: z
    .string()
    .min(8, "Phone Number very small")
    .max(12, "Phone Number very big"),
  password: z
    .string()
    .min(8, "Password required")
    .max(120, "Password required"),
});

const userReturnSchema = userSchema
  .extend({
    id: z.string().uuid(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().optional().nullable(),
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
