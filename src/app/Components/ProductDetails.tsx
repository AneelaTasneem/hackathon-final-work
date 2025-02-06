'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Overlay from "./Overlay";
import Iconsection from "./Iconssection";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart, getCartItems, setCartItemCount } from "../actions/actions"; // Import relevant functions

interface ProductDetailsProps {
  product: Product; // Accept product data as a prop
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.productImage?.asset._ref);
  const [isExpanded, setIsExpanded] = useState(false); // For handling the Read More toggle
  const [cartItemCount, setCartItemCountState] = useState<number>(0); // State to hold the total cart item count

  // Effect to update cart item count when the component mounts
  useEffect(() => {
    const totalItems = setCartItemCount(); // Call the function to calculate total items in cart
    setCartItemCountState(totalItems); // Update state with the count
  }, []); // Empty dependency array ensures this runs only on mount

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    // Call the addToCart action to update the cart in localStorage
    addToCart(product);

    // Display success message
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    // Update cart item count in the Navbar (or state)
    const cartItems = getCartItems(); // Get items from the cart
    const totalItems = cartItems.reduce((total: number, item: any) => total + item.inventory, 0);
    setCartItemCountState(totalItems); // Update the item count in state
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image Section */}
      <Overlay heading="Shop" breadcrumb="Shop" imageSrc="/shop.jpeg" />

      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Main Image */}
          <div className="flex flex-col items-center md:w-1/3">
            {/* Main Image */}
            <div className="border rounded-md overflow-hidden w-full">
              {mainImage ? (
                <Image
                  src={urlFor(mainImage).url() || ""}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center bg-gray-200">
                  No image available
                </div>
              )}
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold">{product.title || "Untitled Product"}</h1>
            <p className="text-lg text-gray-700 mt-2">
              Price: Rs. {product.price?.toFixed(2) || "N/A"}
            </p>
            <div className="flex items-center mt-4">
              {/* Ratings */}
              <div className="text-yellow-500 flex space-x-1">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className="text-gray-500 text-sm ml-2">(5 Customer Reviews)</span>
            </div>

            {/* Description */}
            <div className="mt-4">
              <p
                className={`text-gray-600 ${!isExpanded ? "line-clamp-4" : ""}`}
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: isExpanded ? "none" : 4,
                  overflow: "hidden",
                }}
              >
                {product.description || "No description available."}
              </p>
              {!isExpanded && (
                <button
                  className="text-blue-500 mt-2"
                  onClick={() => setIsExpanded(true)}
                >
                  Read More
                </button>
              )}
              {isExpanded && (
                <button
                  className="text-blue-500 mt-2"
                  onClick={() => setIsExpanded(false)}
                >
                  Show Less
                </button>
              )}
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <p className="text-gray-700 font-medium">Size</p>
              <div className="flex space-x-2 mt-2">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex border rounded-md">
                <button className="px-4 py-2 text-gray-700 border-r">-</button>
                <input
                  type="text"
                  value="1"
                  readOnly
                  className="w-12 text-center text-gray-700"
                />
                <button className="px-4 py-2 text-gray-700 border-l">+</button>
              </div>
              <button
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                onClick={handleAddToCart} // Trigger add to cart functionality
              >
                Add To Cart
              </button>
              <button className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                Compare
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-sm text-gray-600">
              <p>
                <span className="font-medium">SKU:</span> {product._id}
              </p>
              <p>
                <span className="font-medium">Category:</span> {product.tags?.join(", ")}
              </p>
              <p>
                <span className="font-medium">Discount:</span> {product.discountpercentage || 0}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Section */}
      <div className="w-full py-16 px-4 bg-[#faf3ea]">
        <div className="max-w-7xl mx-auto">
          <Iconsection />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
