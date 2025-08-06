// src/app/profile/page.tsx

import { getServerSession } from "next-auth";
// THIS IS THE DEFINITIVE FIX FOR THE IMPORT PATH
// It uses the alias defined in tsconfig.json, which maps @/ to ./src/
import { authOptions } from '@/app/api/auth/_ [...nextauth]/route';
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  // If the user is not logged in, redirect them to the login page
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
        <p className="text-muted-foreground">
          Welcome back, {session.user?.name}!
        </p>
      </div>
      <div className="p-6 border rounded-lg">
        <h2 className="text-xl font-semibold">Session Details</h2>
        <pre className="mt-4 p-4 bg-secondary rounded-md overflow-x-auto">
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      </div>
    </main>
  );
}