"use server";

import bcrypt from "bcrypt";
import { getCollection } from "../utils/db";
import { RegisterFormSchema } from "../utils/rules";
import { redirect } from "next/navigation";

export async function register(state: any, formData: any) {
  // validate form fields
  const validatedFields = RegisterFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // if any form fields are invalid
  if (!validatedFields.success) {
    const errorsObject = validatedFields.error.flatten().fieldErrors;

    return {
      error: errorsObject,
      email: formData.get("email"),
    };
  }

  // extract form fields
  const { username, email, password } = validatedFields.data;

  // check if username exists already
  const userCollection = await getCollection("users");
  if (!userCollection) {
    return {
      error: { username: "Server error." },
    };
  }

  const existingUser = await userCollection.findOne({ username });
  if (existingUser) {
    return {
      error: { username: "Username already exists." },
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

  // redirect to login page
  redirect("/home");
}
