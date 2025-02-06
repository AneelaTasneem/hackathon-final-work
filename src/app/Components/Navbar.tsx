'use client';

import React, { useState, useEffect } from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// Define CartItem type
interface CartItem {
  inventory: number;
  // Add other properties of the cart item here if needed
}

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Function to get items from localStorage
  const getCartItems = (): CartItem[] => JSON.parse(localStorage.getItem('cart') || '[]');
  const getWishlistItems = () => JSON.parse(localStorage.getItem('wishlist') || '[]');

  useEffect(() => {
    const cartItems = getCartItems();
    const totalItems = cartItems.reduce((total: number, item: CartItem) => total + item.inventory, 0);
    setCartItemCount(totalItems);

    const wishlistItems = getWishlistItems();
    setWishlistCount(wishlistItems.length);
  }, []);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-8 cursor-pointer" />
          </Link>
          <span className="font-bold text-lg text-gray-800">Funiro</span>
        </div>

        {/* Desktop Menu (Visible on md and larger screens) */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link href="/Shop" className="text-gray-600 hover:text-black">Shop</Link>
          <Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
          <Link href="/Contact" className="text-gray-600 hover:text-black">Contact</Link>
        </nav>

        {/* Icons (Always visible, adjusted for mobile) */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link href="#" className="text-gray-600 hover:text-black"><FaUser size={16} className="md:size-18" /></Link>
          <Link href='/Search'><button className="text-gray-600 hover:text-black"><FaSearch size={16} className="md:size-18" /></button></Link>
          <Link href="/Wishlist" className="relative text-gray-600 hover:text-black">
            <FaHeart size={16} className="md:size-18" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/Cart" className="relative text-gray-600 hover:text-black">
            <FaShoppingCart size={16} className="md:size-18" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Dropdown Menu for Mobile */}
          <div className="md:hidden relative">
            <button 
              className="text-gray-600 hover:text-black" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {isDropdownOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Home</Link>
                <Link href="/Shop" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Shop</Link>
                <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Blog</Link>
                <Link href="/Contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Contact</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
