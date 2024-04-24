import React from "react";
// import { signIn } from "../../config/auth";
import styles from "./SignInForm.module.css";
import { signin } from "../../services/authactions";

export default function SignInForm() {
  return (
    <>
      <form
        // action={async (formData) => {
        //   "use server";
        //   await signIn("credentials", formData);
        // }}
        action={signin}
        // action={signIn}
        className={styles.form}
      >
        <label className={styles.label}>
          Email
          <input name="email" type="email" className={styles.input} />
        </label>
        <label className={styles.label}>
          Password
          <input name="password" type="password" className={styles.input} />
        </label>
        <button className={styles.save}>Sign In</button>
      </form>
    </>
  );
}
