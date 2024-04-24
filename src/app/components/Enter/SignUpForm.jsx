// "use client";

// import { useFormState } from "react-dom";
import { signup } from "../../services/authactions";
import styles from "../Enter/SignUpForm.module.css";
import AuthButton from "./AuthButton";
// import { formState } from "../../lib/validSignUp";
// import { useState } from "react";

export function SignUpForm() {
  return (
    <form action={signup} className={styles.form}>
      <div className={styles.wrapinput}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          className={styles.input}
        />
      </div>
      {/* {state.errors.name && <p>{state.errors.name}</p>} */}

      <div className={styles.wrapinput}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
      </div>
      {/* {state.errors.email && <p>{state.errors.email}</p>} */}

      <div className={styles.wrapinput}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className={styles.input}
        />
      </div>
      {/* {state.errors.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )} */}
      <AuthButton />
      {/* {!!message && <p>{message}</p>} */}
      {/* {state && (
        <div className="toast">Added to cart! Your cart now has items.</div>
      )}
      {state === false && <div className="error">Failed to add to cart:</div>} */}
      {/* {state.message} */}
    </form>
  );
}
