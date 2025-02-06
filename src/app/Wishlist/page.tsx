'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getWishlistItems, removeFromWishlist } from '../actions/actions';
import { addToCart } from '../actions/actions'; // Import Add to Cart function
import Image from 'next/image';
import Swal from 'sweetalert2'; // Import SweetAlert
import { urlFor } from '@/sanity/lib/image';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
  }, []);

  const handleRemove = (id: string) => {
    removeFromWishlist(id);
    setWishlistItems(getWishlistItems());
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product); // Add product to the cart

    // Remove product from wishlist
    removeFromWishlist(product._id);
    setWishlistItems(getWishlistItems()); // Update wishlist after removal

    // Show SweetAlert notification
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.title} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Wishlist</h1>
        {wishlistItems.length > 0 ? (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  {item.productImage && (
                    <Image
                      src={urlFor(item.productImage).url()}
                      className="w-16 h-16 object-cover rounded-md border border-gray-200"
                      alt="Image"
                      width={500}
                      height={500}
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
                    <p className="text-sm text-gray-500">${item.price}</p>
                    <p className="text-sm font-medium text-gray-700">
                      Subtotal: <span className="text-green-600">${(item.price * (item.inventory || 1)).toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(item)} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => handleRemove(item._id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-xl font-medium text-gray-700">Your wishlist is empty</h2>
            <p className="text-sm text-gray-500 mt-2">Add items to your wishlist to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
