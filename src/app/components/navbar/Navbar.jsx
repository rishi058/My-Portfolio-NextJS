"use client";
import Link from "next/link";
import React from "react";
import CircleAnimationSwitch from "./switch/circleAnimatioSwitch";


const Navbar = () => {
  return (
    <header
      className="bg-background fixed top-0 left-0 right-0 z-[100] flex flex-col w-full"
      style={{
        borderBottom: "1px solid rgba(45, 212, 191, 0.5)",
        boxShadow:
          "0 1px 0px rgba(45,212,191,0.6), 0 2px 4px rgba(45,212,191,0.4), 0 4px 12px rgba(45,212,191,0.25), 0 8px 24px rgba(45,212,191,0.12), 0 12px 40px rgba(45,212,191,0.06)",
      }}
    >
      <div className="flex items-center justify-between h-12 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link
          href={"/"}
          className="text-body font-body font-semibold tracking-tight text-tertiary transition-opacity hover:opacity-80"
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
