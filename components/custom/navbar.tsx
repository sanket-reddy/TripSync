import React from "react";
import { Button } from "../ui/button";
import { SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const x = () => {};
  return (
    <div className="flex justify-between items-center text-white bg-slate-800 p-2">
      <div className="font-bold  flex items-center gap-2">
        <Image src="/logo.jpeg" alt="logo" height="40" width="40"></Image>
        <Link href="/">TripSync</Link>
      </div>
      <div>
        <SignedOut>
          <Button variant="outline" className="text-black ">
            <Link href="sign-in">Login</Link>
          </Button>
        </SignedOut>
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </div>
  );
};

export default Navbar;
