import React from "react";
import { getServerSession, useSession } from "next-auth/react";
import { auth } from "../config/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();
  const user = session.user;
  console.log("USER", user);
  return (
    <div>
      <h3>Hello {user.name}</h3>
      {user.image && (
        <Image
          src={user.image}
          alt="foto"
          width={48}
          height={48}
          style={{
            borderRadius: "50%",
          }}
          priority
        />
      )}
    </div>
  );
}
