import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-400 p-1">
      <div className="font-bold">Clerk-authentication</div>
      <div>
        <SignedOut>
          <Link href="/sign-in" className="font-bold hover:underline">
            Login
          </Link>
        </SignedOut>
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </div>
  );
};

export default Navbar;
