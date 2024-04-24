"use server";

import { redirect } from "next/navigation";

// import { SignUpSchema, formState } from "../lib/validSignUp";

export async function signup(formData) {
  const { name, email, password } = Object.fromEntries(formData);

  const response = await fetch("http://localhost:3300/api/admins/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const user = await response.json();
  console.log(user);
  // Call the provider or db to create a user...
  redirect("/hotels");
}

export async function signin(formData) {
  const { email, password } = Object.fromEntries(formData);

  const response = await fetch("http://localhost:3300/api/admins/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const user = await response.json();
  console.log(user);
  // Call the provider or db to create a user...
  redirect("/hotels");
}

export async function getUserFromDb() {}
