"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navigat.module.css";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function Navigation({ links }) {
  const pathname = usePathname();

  return (
    <div className={styles.navigate}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            key={uuidv4()}
            className={isActive ? styles.active : styles.link}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
