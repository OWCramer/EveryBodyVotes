"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<div className="p-4 flex ">
				<ul className="space-x-6">
					<Link href={"/"}>Home</Link>
					<Link href={"/profile"}>Profile</Link>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="p-4 flex ">
				<ul>
					<Link href={"/"}>Home</Link>
				</ul>
			</div>
		);
	}
};

export default Navbar;
