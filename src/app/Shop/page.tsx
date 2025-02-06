"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Overlay from "../Components/Overlay";
import Iconsection from "../Components/Iconssection";
import SearchAndFilter from "../Components/SearchAndFilter"; // Import SearchAndFilter
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { addToCart } from "../actions/actions";
import { addToWishlist } from "../actions/actions"; // Import addToWishlist
import Swal from "sweetalert2";

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // State for filtered products
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page state
  const [productsPerPage] = useState<number>(8); // Number of products per page

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Initialize filtered products
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
    addToWishlist(product); // Call wishlist function
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to wishlist`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  // Calculate the index of the last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Slice the filtered products array based on the current page
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Background Image Section */}
      <Overlay heading="Shop" breadcrumb="Shop" imageSrc="/shop.jpeg" />

      {/* Search and Filter Section */}
      <SearchAndFilter
        products={products} // Pass the full product list
        onFilter={(filtered) => setFilteredProducts(filtered)} // Update filtered products
      />

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="relative group border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <Link href={`/product/${product.slug.current}`}>
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
                      {/* Share Icon */}
                      <Link href={`/share/${product.slug.current}`}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Shared "${product.title}"`);
                          }}
                          className="flex items-center text-sm text-white font-semibold"
                        >
                          <FaShareAlt className="mr-2" />
                          Share
                        </button>
                      </Link>
                      {/* Wishlist Icon */}
                      <button
                        onClick={(e) => handleAddToWishlist(e, product)}
                        className="flex items-center text-sm text-white font-semibold"
                      >
                        <FaHeart className="mr-2" />
                        Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Product Title */}
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {product.title}
              </h3>

              {/* Price */}
              <p className="text-xl font-bold text-gray-600 mt-2">
                ${product.price}
              </p>

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
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-8">
        {Array.from(
          { length: Math.ceil(filteredProducts.length / productsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-[#b88e2f] text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-[#b88e2f] hover:text-white transition-colors`}
            >
              {index + 1}
            </button>
          )
        )}
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

export default ProductCards;
