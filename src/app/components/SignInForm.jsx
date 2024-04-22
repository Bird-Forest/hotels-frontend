import React from "react";
import { signIn } from "../config/auth";

export default function SignInForm() {
  return (
    <>
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>
    </>
  );
}
