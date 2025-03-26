import { z } from "zod";

export const RegisterFormSchema = z.object({
  username: z.string().min(1, { message: "Username cannot be empty." }).trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long." })
    .trim(),
});

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Please enter a valid username." })
    .trim(),
  password: z.string().min(1, { message: "Password is required." }).trim(),
});
