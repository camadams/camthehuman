"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavLinks() {
  return (
    <>
      <Link href="/projects" className="hover:text-blue-500">
        Projects
      </Link>
      <Link href="/blog" className="hover:text-blue-500">
        Blog
      </Link>
      <Link href="/about" className="hover:text-blue-500">
        About
      </Link>
    </>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex justify-between py-3 px-6 text-lg border-b-2">
      <Link href="/">
        Cam
        <span className="bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">TheHuman</span>
      </Link>

      <div className="hidden sm:flex justify-between gap-4">
        <NavLinks />
      </div>

      <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="bg-slate-800/70 h-screen flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
            <div className="bg-white flex flex-col p-8 gap-4 rounded-md">
              <NavLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
