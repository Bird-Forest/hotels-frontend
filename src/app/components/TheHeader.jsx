import React from "react";
import Navigation from "./Navigation";
import styles from "../page.module.css";

const navLink = [
  { label: "Home", href: "/" },
  { label: "SignIn", href: "/signin" },
  { label: "Hotels", href: "/hotels" },
];

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <Navigation links={navLink} />
    </header>
  );
}
