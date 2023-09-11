import Navbar from "./components/Navbar";
import SignOutButton from "./components/buttons/SignOutButton";
import SignInButton from "./components/buttons/SignInButton";

import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home(req: NextRequest): Promise<any> {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <Navbar />
        <h1>Signed in as {session?.user?.email}</h1>
        <SignOutButton />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <h1>Not Signed In</h1>
        <h1>Sign In Below</h1>
        <SignInButton />
      </div>
    );
  }
}
