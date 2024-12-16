"use client";
import React, { useState } from "react";
import { FaUser, FaSearch, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Cartdrop from "./Cartdrop";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 relative">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-bold text-lg text-gray-800">Funiro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link href="/Shop" className="text-gray-600 hover:text-black">
            Shop
          </Link>
          <Link href="/Blog" className="text-gray-600 hover:text-black">
            Blog
          </Link>
          <Link href="/Contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Icons (Visible on All Screens) */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-black">
            <FaUser size={20} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            <FaSearch size={20} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            <FaHeart size={20} />
          </Link>
          {/* Import Cart Component */}
          <Cartdrop />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-black md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg flex flex-col items-center py-4 space-y-4 z-50">
            <Link
              href="/"
              className="text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/Blog"
              className="text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/Contact"
              className="text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
