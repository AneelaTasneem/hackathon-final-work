"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products"; // Ensure this points to your Product type
import { client } from "@/sanity/lib/client"; // Sanity client
import { allProducts } from "@/sanity/lib/queries"; // Import the allProducts query
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

const FurnitureCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      // Use the allProducts query to fetch products
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProduct();
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container w-full h-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="text-center mt-10">
        <h1 className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
          Discover our collection of furniture!
        </h1>
        <p className="font-poppins font-bold text-[32px] sm:text-[36px] md:text-[40px] text-[#3a3a3a]">
          #FuniroFurniture
        </p>
      </div>

      <div className="relative w-full max-w-4xl mt-10">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300"
              >
                <Link href={`/product/${product.slug.current}`}>
                  <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg shadow-lg flex justify-center items-center overflow-hidden border-2 border-transparent transition-all ease-in-out duration-300">
                    {/* Product Image */}
                    {product.productImage && product.productImage.asset ? (
                      <Image
                        src={urlFor(product.productImage.asset._ref).url() || ""}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full flex justify-center items-center bg-gray-200">
                        <span>No image available</span>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default FurnitureCarousel;
