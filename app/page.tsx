"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div>
				<h1>Signed in as {session?.user?.email}</h1>
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Not Signed In</h1>
				<h1>Sign In Below</h1>
				<button onClick={() => signIn()}>Sign In</button>
			</div>
		);
	}
}
