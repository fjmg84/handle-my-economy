"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import NavLink from "./NavLink";

const NavComponent = () => {
  return (
    <div className="z-50">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-8 bg-indigo-600">
        <Link href="/" className="text-2xl font-bold text-white">
          Mi Economía
        </Link>
      </div>

      {/* Navigation */}

      <nav className="p-6 flex flex-col gap-2">
        <NavLink />
      </nav>
    </div>
  );
};

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <aside className="hidden md:flex bg-indigo-50 border-r border-gray-200 flex-col gap-6">
        <NavComponent />
      </aside>

      {/* Mobile Navigation */}
      <div
        id="mobileNav"
        className={`fixed inset-y-0 w-full bg-white duration-300 ease-in-out z-30 ${
          showMobileNav ? "right-0" : "-right-full"
        }`}
      >
        <div
          className={`md:hidden absolute bg-indigo-50 duration-1000 -top-100 -right-100 z-30 ${showMobileNav ? "w-375 h-375 rounded-full" : "w-50 h-50 rounded-none"}`}
        />
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
          <NavComponent />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          //id="mobileNavBtn"
          className="bg-blue-100 p-3 rounded-lg shadow-lg hover:bg-blue-200 transition-colors"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <MenuIcon size={20} color="#1e40af" />
        </button>
      </div>
    </>
  );
}
