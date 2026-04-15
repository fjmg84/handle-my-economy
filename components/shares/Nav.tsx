"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import NavLink from "./NavLink";

const NavComponent = () => {
  return (
    <>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 px-3 py-2 bg-blue-600">
        <span className="text-lg font-bold text-white">Mi Economía</span>
      </Link>

      {/* Navigation */}

      <nav className="p-6">
        <NavLink />
      </nav>
    </>
  );
};

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col gap-6">
        <NavComponent />
      </aside>

      {/* Mobile Navigation */}
      <div
        id="mobileNav"
        className={`fixed inset-y-0 bg-white w-full duration-300 ease-in-out z-50 ${
          showMobileNav ? "right-0" : "-right-full"
        }`}
      >
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
