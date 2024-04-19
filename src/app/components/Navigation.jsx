"use client";
import Link from "next/link";
import React from "react";
import styles from "../page.module.css";
import { usePathname } from "next/navigation";

export default function Navigation({ links }) {
  const pathname = usePathname();

  return (
    <div className={styles.navigate}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            key={link.label}
            className={isActive ? styles.active : styles.link}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
