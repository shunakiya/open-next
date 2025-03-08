import { z } from "zod";

export const RegisterFormSchema = z.object({
  username: z.string().min(1, { message: "Username cannot be empty." }).trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(1, { message: "Not be empty." })
    .min(5, { message: "Be at least 5 characters long." })
    .regex(/[a-zA-Z]/, { message: "Contain at least 1 letter." })
    .regex(/[0-9]/, { message: "Contain at least 1 number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least 1 special character.",
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Please enter a valid username." })
    .trim(),
  password: z.string().min(1, { message: "Password is required." }).trim(),
});
