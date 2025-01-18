// pages/our-products.tsx
import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp7,000,000",
    oldPrice: "Rp14,000,000",
    image: "/18.jpeg",
    badge: { src: "/30.png", alt: "30% Off" },
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp2,500,000",
    image: "/vip.png",
    badge: { src: "/Button.png", alt: "Center Overlay" },
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp7,000,000",
    oldPrice: "Rp14,000,000",
    image: "/14.png",
    badge: { src: "/50.png", alt: "50% Off" },
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar and table stool",
    price: "Rp500,000",
    image: "/15.jpeg",
    badge: { src: "/New.png", alt: "New Arrival" },
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp1,500,000",
    image: "/16.png",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp1,500,000",
    image: "/17.png",
    badge: { src: "/New.png", alt: "New Arrival" },
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp7,000,000",
    oldPrice: "Rp14,000,000",
    image: "/18.jpeg",
    badge: { src: "/50.png", alt: "50% Off" },
  },
  {
    id: 8,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp2,500,000",
    image: "/19.jpeg",
    badge: { src: "/50.png", alt: "50% Sale" },
  },
];

const OurProducts = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 sm:px-6 md:px-8">
    {/* Heading: Our Products */}
    <h1 className="font-poppins mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] text-center mb-8">
      Our Products
    </h1>
    {/* Products Grid */}
    <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="w-full h-auto relative">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={301}
            className="w-full h-[150px] md:h-[301px] object-cover"
          />
          {product.badge && (
            <Image
              src={product.badge.src}
              alt={product.badge.alt}
              width={48}
              height={48}
              className="absolute top-2 right-2 w-12 h-12"
            />
          )}
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-sm sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              {product.name}
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              {product.description}
            </p>
            <div className="font-poppins text-sm sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 text-sm md:text-lg line-through ml-2 block sm:inline">
                  {product.oldPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};


export default OurProducts;
