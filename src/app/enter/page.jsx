import React from "react";
import { GoogleBtn } from "../components/Enter/GoogleBtn";
// import SignInForm from "../components/Enter/SignInForm";
import styles from "../page.module.css";

export default function SignIn() {
  return (
    <div className={styles.signin}>
      <GoogleBtn />
      <h2 className={styles.titlepage}>Autorization</h2>
      {/* <SignInForm /> */}
    </div>
  );
}
