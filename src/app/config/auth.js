import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "../lib/zod";
import { User } from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if user exists
        user = await getUserFromDb(credentials.email, credentials.password);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with the their profile data
        return user;
      },
    }),
  ],
  pages: {
    signin: "/signin",
  },
});

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [],
// });
