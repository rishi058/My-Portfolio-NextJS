"use client";
import Link from "next/link";
import React from "react";
import ThemeSelector from "./ThemeSelector";
import CircleAnimationSwitch from "./switch/circleAnimatioSwitch";

const Navbar = () => {
  return (
    <header className="navbar fixed top-0 left-0 right-0 z-[100] w-full">
      {/* ── Single row on md+, two rows on mobile ── */}
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Mobile layout: two centred rows */}
        <div className="flex md:hidden flex-col items-center justify-center py-2 gap-1.5">
          <Link href={"/"} className="navbar-brand">
            Rishi&apos;s Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSelector />
            <CircleAnimationSwitch size="1.6rem" />
          </div>
        </div>

        {/* Desktop layout: single row */}
        <div className="hidden md:flex items-center justify-between h-12">
          <Link href={"/"} className="navbar-brand">
            Rishi&apos;s Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSelector />
            <CircleAnimationSwitch size="1.75rem" />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
