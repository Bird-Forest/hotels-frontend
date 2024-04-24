import React from "react";
import styles from "./AuthLayout.module.css";
import Link from "next/link";

export default function AuthLayout() {
  return (
    <ul>
      <li>
        <Link href="/enter/signup" className={styles.link}>
          sign up
        </Link>
      </li>
      <li>
        <Link href="/enter/signin" className={styles.link}>
          sign in
        </Link>
      </li>
    </ul>
  );
}
