'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());  // Update the state after removing an item
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());  // Update the state after quantity change
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2);
  };

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to checkout?',
      text: 'Please review your cart before checkout.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed!', 'success');
        setCartItems([]);  // Optionally clear cart on checkout
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-4 shadow-sm"
                >
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
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 bg-gray-100 rounded text-gray-700">
                      {item.inventory}
                    </span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-700">Total: ${calculatedTotal()}</h2>
              <button
                onClick={handleProceed}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-xl font-medium text-gray-700">Your cart is empty</h2>
            <p className="text-sm text-gray-500 mt-2">Add items to your cart to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
