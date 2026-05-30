"use client";
import Link from "next/link";
import React from "react";
import CircleAnimationSwitch from "./switch/circleAnimatioSwitch";


const Navbar = () => {
  return (
    <header
      className="navbar fixed top-0 left-0 right-0 z-[100] flex flex-col w-full"
    >
      <div className="flex items-center justify-between h-12 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link
          href={"/"}
          className="navbar-brand"
        >
          Rishi&apos;s Portfolio
        </Link>
        {/* Theme Toggle */}
        <CircleAnimationSwitch size="1.75rem" /> 
      </div>
    </header>
  );
};

export default Navbar;
