"use server";
import bcrypt from "bcrypt";
import { getCollection } from "../utils/db";
import { RegisterFormSchema } from "../utils/rules";
import { redirect } from "next/navigation";
import { createSession } from "../utils/sessions";

interface RegisterState {
  error?: {
    username?: string[] | undefined;
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
  email?: string;
}

export async function register(
  state: RegisterState | undefined,
  formData: FormData
): Promise<RegisterState | undefined> {
  // validate form fields
  const validatedFields = RegisterFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(state);

  // if any form fields are invalid
  if (!validatedFields.success) {
    const errorsObject = validatedFields.error.flatten().fieldErrors;
    return {
      error: errorsObject,
      email: formData.get("email") as string,
    };
  }

  // extract form fields
  const { username, email, password } = validatedFields.data;

  // check if username exists already
  const userCollection = await getCollection("users");
  if (!userCollection) {
    return {
      error: { username: ["Server error."] },
    };
  }

  const existingUser = await userCollection.findOne({ username });
  if (existingUser) {
    return {
      error: { username: ["Username already exists."] },
    };
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save in db
  const results = await userCollection?.insertOne({
    username,
    email,
    password: hashedPassword,
  });

  console.log(results);

  // create a session
  await createSession(results.insertedId.toString());

  // redirect to login page
  redirect("/dashboard");
}
