"use client"

import React from "react";
import Link from "next/link"

const Header: React.FC = () => {

    const GoToSignUp = () => {
    window.open("http://eepurl.com/igmoU1");
  };

  const listClass = "list-none text-none cursor-pointer hover:border-b-4 border-current"

  return (
    <div className="relative z-10 font-custom">
      <Link href="/" className="flex justify-center items-center text-none text-current font-bold text-5xl xl:text-6xl hover:underline">
        Austin Glitch State
      </Link>
      <ul className="flex justify-evenly items-center text-none text-current text-4xl">
        <li className={listClass}>
            <Link href="/signup" className="text-text-color">
                Sign Up
            </Link>
        </li>
        <li className={listClass}>
          <p onClick={GoToSignUp}>Join Email List</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;