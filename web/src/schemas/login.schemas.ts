import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email required").max(50, "Email required"),
  password: z
    .string()
    .min(8, "Password required")
    .max(120, "Password required"),
});

export { loginSchema };
