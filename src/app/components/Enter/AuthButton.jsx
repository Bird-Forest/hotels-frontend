"use client";

import { useFormStatus } from "react-dom";
import React from "react";
import styles from "../Enter/AuthButton.module.css";

export default function AuthButton() {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending} type="submit" className={styles.save}>
      {pending ? "Submitting..." : "Sign up"}
    </button>
  );
}
