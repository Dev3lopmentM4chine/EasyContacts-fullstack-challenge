import { z } from "zod";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(8, "Full Name very small")
    .max(50, "Full Name very big"),
  email: z
    .string()
    .email("Email is required")
    .min(16, "Email very small")
    .max(50, "Email very big"),
  phoneNumber: z
    .string()
    .min(8, "Phone Number very small")
    .max(12, "Phone Number very big"),
});

const contactReturnSchema = contactSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const updateContactSchema = z.object({
  fullName: z.string().max(50).nullish(),
  email: z.string().email().max(50).nullish(),
  phoneNumber: z.string().max(11).nullish(),
});

const listAllContactsSchema = z.array(contactReturnSchema);

export {
  contactSchema,
  contactReturnSchema,
  updateContactSchema,
  listAllContactsSchema,
};
