"use client";

// import Link from "next/link";
import React from "react";
// import { useSession, signOut } from "next-auth/react";
import AuthLayout from "../components/Enter/AuthLayout";
import styles from "../page.module.css";
// import { usePathname } from "next/navigation";

export default function EnterLayout({ children }) {
  // const pathname = usePathname();
  // ** тільки для клієнтських компонентів!!!
  // const session = useSession();
  return (
    <div className={styles.signin}>
      <h2>Autorizations</h2>
      <AuthLayout />
      {children}
    </div>
  );
}

// {
//   session?.data && (
//     <Link href="/profile" className={styles.link}>
//       profile
//     </Link>
//   );
// }
// {
//   session.data && (
//     <Link
//       href="#"
//       onClick={() => signOut({ callbackUrl: "/" })}
//       className={styles.link}
//     >
//       sign out
//     </Link>
//   );
// }

// {
//   session.data ? (
//     <Link
//       href="#"
//       onClick={() => signOut({ callbackUrl: "/" })}
//       className={styles.link}
//     >
//       sign out
//     </Link>
//   ) : (
//     <Link href="/enter" className={styles.link}>
//       enter
//     </Link>
//   );
// }
