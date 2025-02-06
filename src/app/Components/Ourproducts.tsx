"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { eight } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import {  FaHeart, FaShareAlt } from "react-icons/fa"; // Importing icons
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import { addToWishlist } from "../actions/actions"; // Import wishlist functions

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProducts: Product[] = await client.fetch(eight);
      setProducts(fetchedProducts);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  const handleAddToWishlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToWishlist(product);
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to wishlist`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {products.map((product) => (
          <Link href={`/product/${product.slug.current}`} key={product._id}>
            <div className="relative group border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
              {/* Product Image (Hover Effect) */}
              {product.productImage && (
                <div className="relative cursor-pointer">
                  <Image
                    src={urlFor(product.productImage.asset._ref).url() || ""}
                    alt={product.title}
                    className="rounded-md w-full h-64 object-cover"
                    width={200}
                    height={250}
                  />
                  {/* Transparent Overlay on Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex flex-col items-center justify-center text-white">
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="mb-2 bg-white text-[#b88e2f] text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Add to Cart
                    </button>
                    <div className="flex space-x-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Shared "${product.title}"`);
                        }}
                        className="text-sm flex items-center"
                      >
                        <FaShareAlt className="mr-2" /> Share
                      </button>
                      <button
                        onClick={(e) => handleAddToWishlist(e, product)}
                        className="text-sm bg-white bg-opacity-20 px-3 py-2 rounded-md flex items-center"
                      >
                        <FaHeart className="mr-2" /> Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Product Title */}
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>

              {/* Price */}
              <p className="text-xl font-bold text-gray-600 mt-2">${product.price}</p>

              {/* Tags (Limit to 4 tags) */}
              {product.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 text-sm font-medium px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
