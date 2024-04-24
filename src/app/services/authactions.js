import { SignUpSchema, FormState } from "../lib/validSignUp";

export async function signup(formData) {
  // Validate form fields
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
}

export async function getUserFromDb() {}
