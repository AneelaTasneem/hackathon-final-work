'use client';
import React, { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const TopHeader = () => {
  return (
    <div className="w-full h-[48px] bg-black text-white flex items-center justify-between px-4 md:px-[135px]">
      {/* Center-aligned text */}
      <div className="flex items-center justify-center flex-grow">
        <p className="font-poppins text-sm font-normal text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-poppins text-sm font-semibold underline">
            ShopNow
          </span>
        </p>
      </div>

      {/* Right-aligned select dropdown */}
      <div className="hidden md:flex items-center gap-6">
        <select
          name="select"
          id="select"
          className="bg-black text-white text-center w-[100px] px-2"
        >
          <option value="English">English</option>
        </select>
      </div>
    </div>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full px-4 md:px-[135px]">
      <div className="w-full flex justify-between items-center h-[56px]">
        {/* Exclusive Header */}
        <div>
          <h2 className="font-inter font-bold text-black text-[24px] tracking-[3%]">
            Exclusive
          </h2>
        </div>

        {/* Navigation Links (desktop) */}
        <ul className="hidden md:flex gap-[48px]">
          <li className="font-poppins text-[16px] font-normal text-center">
            Home
          </li>
          <li className="font-poppins text-[16px] font-normal text-center">
            Contact
          </li>
          <li className="font-poppins text-[16px] font-normal text-center">
            About
          </li>
          <li className="font-poppins text-[16px] font-normal text-center">
            Sign Up
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
          >
            <ul className="flex flex-col items-start gap-4 p-4">
              <li className="font-poppins text-[16px] font-normal text-left">
                Home
              </li>
              <li className="font-poppins text-[16px] font-normal text-left">
                Contact
              </li>
              <li className="font-poppins text-[16px] font-normal text-left">
                About
              </li>
              <li className="font-poppins text-[16px] font-normal text-left">
                Sign Up
              </li>
            </ul>
          </div>
        )}

        {/* Icons & Search Bar */}
        <div className="hidden md:flex items-center gap-[24px]">
          <button className="bg-gray-200 flex items-center border border-gray-300 rounded-md px-2 py-1 w-auto min-w-[243px] h-[38px] gap-[10px]">
            <h2 className="font-poppins text-[12px] font-normal leading-[18px] text-left underline-offset-[from-font] decoration-skip-ink-none flex items-center">
              What are you looking for?
            </h2>
            <input
              type="text"
              className="outline-none px-2 py-1 flex-1 bg-gray-200"
            />
            <IoMdSearch className="text-xl" />
          </button>
          <FaRegHeart className="text-xl" />
          <MdOutlineShoppingCart className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
