"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Cartdrop = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button onClick={toggleCart} className="text-gray-600 hover:text-black">
        <Image
          src="/cart.png" // Replace with your cart icon image
          alt="Cart Icon"
          width={24}
          height={24}
        />
      </button>

      {/* Dropdown Cart */}
      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
            <hr />

            {/* Example Cart Items */}
            <div className="space-y-4 mt-11">
              <div className="flex items-center space-x-4">
                <Image
                  src="/cart-1.png"
                  alt="Sofa 1"
                  width={108}
                  height={105}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium">Asgaard Sofa</p>
                  <p className="text-sm text-gray-500">1 x <span className="text-[#B88E2F]">Rs. 250,000</span></p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/cart-2.jpeg"
                  alt="Sofa 2"
                  width={108}
                  height={105}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium">Casaliving Wood</p>
                  <p className="text-sm text-gray-500">1 x <span className="text-[#B88E2F]">Rs. 270,000</span></p>
                </div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="mt-28 text-right font-bold">
              Subtotal: <span className="text-[#B88E2F]">Rs. 520,000</span>
            </div>

            <hr className="mt-10"/>

            {/* Buttons */}
            <div className="flex justify-between mt-4">

                <Link href="/Cart">
              <button className="px-4 py-2 border-[1px] rounded-full hover:bg-blue-700">
                 Cart
              </button>
              </Link>
              <Link href="/Checkout">
              <button className="px-4 py-2 border-[1px]  rounded-full hover:bg-blue-700">
                Checkout
              </button>
              </Link>
              <Link href="/Comparison">
              <button className="px-4 py-2 border-[1px] rounded-full hover:bg-blue-700">
                Comparison
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartdrop
