import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md ring-2 ring-blue-200 px-6 py-3 flex justify-between items-center rounded-b-2xl">
      {/* Logo */}
      <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-xl shadow-md tracking-wide hover:shadow-lg transition">
        HireEase
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-[16px] font-medium">
        <Link href="/Pages/Jobs" className="text-gray-700 hover:text-blue-700 transition duration-300 hover:underline underline-offset-4">
          Jobs
        </Link>
        <Link href="/Pages/Company" className="text-gray-700 hover:text-blue-700 transition duration-300 hover:underline underline-offset-4">
          Companies
        </Link>
        <Link href="/Pages/Community" className="text-gray-700 hover:text-blue-700 transition duration-300 hover:underline underline-offset-4">
          Community
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Link href="/Pages/login">
          <button className="text-sm font-medium text-gray-700 hover:text-blue-700 transition hover:underline underline-offset-4">
            Login
          </button>
        </Link>
        <Link href="/Pages/registration">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-5 py-2 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
