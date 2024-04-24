"use client";

import Link from "next/link";
import React from "react";
import styles from "../components/Header/Navigation.module.css";
import { useSession, signOut } from "next-auth/react";
// import { usePathname } from "next/navigation";

export default function EnterLayout({ children }) {
  // const pathname = usePathname();
  // ** тільки для клієнтських компонентів!!!
  const session = useSession();
  return (
    <div>
      {session?.data && (
        <Link href="/profile" className={styles.link}>
          profile
        </Link>
      )}
      {session.data ? (
        <Link
          href="#"
          onClick={() => signOut({ callbackUrl: "/" })}
          className={styles.link}
        >
          sign out
        </Link>
      ) : (
        <Link href="/enter" className={styles.link}>
          enter
        </Link>
      )}
      {children}
    </div>
  );
}
