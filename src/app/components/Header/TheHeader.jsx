import React from "react";
import Navigation from "./Navigation";
import styles from "../../page.module.css";

const navLink = [
  { label: "home", href: "/" },
  { label: "hotels", href: "/hotels" },
  { label: "enter", href: "/enter" },
];

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <Navigation links={navLink} />
    </header>
  );
}
