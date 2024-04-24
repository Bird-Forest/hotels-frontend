import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "../lib/validSignIn";
import { signin } from "../services/authactions";
// import { User } from "next-auth";

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
        email: {},
        password: {},
      },
      // credentials: { formData },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password);

          // logic to verify if user exists
          user = await signin({ email, password });

          if (!user) {
            throw new Error("User not found.");
          }

          // return json object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
    // Credentials({
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     let user = null;

    //     // logic to salt and hash password
    //     // const pwHash = saltAndHashPassword(credentials.password);

    //     // logic to verify if user exists
    //     user = await getUserFromDb(credentials.email, credentials.password);

    //     if (!user) {
    //       // No user found, so this is their first attempt to login
    //       // meaning this is also the place you could do registration
    //       throw new Error("User not found.");
    //     }

    //     // return user object with the their profile data
    //     return user;
    //   },
    // }),
  ],
  pages: {
    signin: "/signin",
  },
});

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [],
// });
