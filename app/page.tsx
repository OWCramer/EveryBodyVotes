import Navbar from "./components/Navbar";
import SignOutButton from "./components/buttons/SignOutButton";
import SignInButton from "./components/buttons/SignInButton";

import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Home(): Promise<any> {
	const session = await getServerSession(options);
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
