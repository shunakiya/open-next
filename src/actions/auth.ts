"use server";

export async function register(state: any, formData: any) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(username);
  console.log(email);
  console.log(password);
}
