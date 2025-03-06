"use server";

import { RegisterFormSchema } from "@/utils/rules";

export async function register(state: any, formData: any) {
  const validatredFields = RegisterFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatredFields.success) {
    const errorsObject = validatredFields.error.flatten().fieldErrors;

    return {
      error: errorsObject,
      email: formData.get("email"),
    };
  }
}
