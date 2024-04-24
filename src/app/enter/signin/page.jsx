import { GoogleBtn } from "../../components/Enter/GoogleBtn";
import SignInForm from "../../components/Enter/SignInForm";
import React from "react";

export default function SignInPage() {
  return (
    <div>
      {/* <h3>Sign In</h3> */}
      <GoogleBtn />
      <SignInForm />
    </div>
  );
}
