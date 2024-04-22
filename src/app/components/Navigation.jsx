"use client";

import Link from "next/link";
import React from "react";
import styles from "./Navigat.module.css";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useSession, signOut } from "next-auth/react";

export default function Navigation({ links }) {
  const pathname = usePathname();
  // ** тільки для клієнтських компонентів!!!
  const session = useSession();

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
      {session?.data && (
        <Link href="/profile" className={styles.link}>
          Profile
        </Link>
      )}
      {session.data ? (
        <Link
          href="#"
          onClick={() => signOut({ callbackUrl: "/" })}
          className={styles.link}
        >
          Sign Out
        </Link>
      ) : (
        <Link href="/signin" className={styles.link}>
          Sign In
        </Link>
      )}
    </div>
  );
}
