import React from "react";
import Overlay from "../Components/Overlay";
import Iconsection from "../Components/Iconssection";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Overlay heading="Cart" breadcrumb="Cart" imageSrc="/shop.jpeg" />

      <div className="flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 lg:px-8 py-6 gap-6 lg:gap-8">
        {/* Left Section - Cart Items */}
        <div className="w-full lg:w-3/5 bg-white shadow-md rounded-md p-4 sm:p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F9F1E7]">
                <th className="p-2 sm:p-4 text-gray-600">Product</th>
                <th className="p-2 sm:p-4 text-gray-600">Price</th>
                <th className="p-2 sm:p-4 text-gray-600">Quantity</th>
                <th className="p-2 sm:p-4 text-gray-600">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 sm:p-4 flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                  {/* Product Image */}
                  <Image
                    src="/cart-1.png" // Replace with your image path
                    alt="Asgaard Sofa"
                    width={80}
                    height={80}
                    className="rounded-md bg-[#F9F1E7]"
                  />
                  {/* Product Name */}
                  <span className="text-sm sm:text-base text-center sm:text-left">
                    Asgaard Sofa
                  </span>
                </td>
                <td className="p-2 sm:p-4 text-sm sm:text-base">Rs. 250,000.00</td>
                <td className="p-2 sm:p-4">
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-10 sm:w-12 border rounded-md text-center"
                  />
                </td>
                <td className="p-2 sm:p-4 font-semibold text-sm sm:text-base">
                  Rs. 250,000.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Section - Cart Totals */}
        <div className="w-full lg:w-1/3 bg-[#F9F1E7] shadow-md rounded-md flex flex-col items-center justify-between p-4 sm:p-6">
          <h2 className="text-lg text-center font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between w-full mb-2 text-sm sm:text-base">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between w-full mb-6 text-sm sm:text-base">
            <span className="text-gray-600">Total</span>
            <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
          </div>

          <Link href="/Checkout">
            <button className="w-full sm:w-[222px] h-12 sm:h-[58.95px] border-[1px] hover:bg-yellow-600 py-2 rounded-md font-semibold text-sm sm:text-base">
              Check Out
            </button>
          </Link>
        </div>
      </div>

      {/* Icon Section */}
      <div className="w-full py-8 sm:py-16 px-4 bg-[#faf3ea]">
        <div className="max-w-7xl mx-auto">
          <Iconsection />
        </div>
      </div>
    </div>
  );
};

export default Cart;
