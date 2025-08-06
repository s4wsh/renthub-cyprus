// src/app/api/auth/[...nextauth]/route.ts
// This file is the API route handler.
// It now re-exports authOptions, which is crucial for Next.js's internal processes.

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Imports the actual configuration

// CRITICAL FIX: Re-export authOptions so Next.js can find it
export { authOptions }; 

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };