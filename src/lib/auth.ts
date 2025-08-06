// src/lib/auth.ts
// This file exports your NextAuth configuration.

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Your sample user data for authentication
const sampleUser = {
  id: "1",
  name: "Siawsh",
  email: "user@example.com",
  hashedPassword: '$2b$10$VyiiPbWmf3FFPk3IDuhUxO2q4dL.ggIavU6L9uYsMQho8vFZVTFbS', // This should be your real hashed password
};

// Export your AuthOptions directly from here
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = credentials.email === sampleUser.email ? sampleUser : null;

        if (user) {
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (isPasswordCorrect) {
            return { id: user.id, name: user.name, email: user.email };
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
};