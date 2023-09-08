"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname.startsWith("/dashboard")) return null;
  return (
    <div className="flex justify-between items-center bg-white py-4 px-16">
      <Link href="/">Logo</Link>
      <nav className="flex gap-2">
        <Link href="#">Products</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/dashboard/admin">Dashboard</Link>
      </nav>
    </div>
  );
}
