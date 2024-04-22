import React from "react";
import { GoogleBtn } from "../components/GoogleBtn";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <div>
      <h2>Sign In</h2>
      <SignInForm />
      <GoogleBtn />
    </div>
  );
}
