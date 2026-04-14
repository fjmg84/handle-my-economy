"use client";

import IconComponent from "@/components/icons/IconComponent";
import MenuIcon from "@/components/icons/MenuIcon";

export default function MobileNav() {
  const mobileNav = document.getElementById("mobileNav");
  const mobileNavBtn = document.getElementById("mobileNavBtn");

  if (mobileNavBtn) {
    mobileNavBtn.addEventListener("click", () => {
      if (mobileNav) {
        mobileNav.classList.toggle("-right-full");
        mobileNav.classList.toggle("right-0");
      }
    });
  }

  return null;
}
