// pages/our-products.tsx
import React from "react";
import Image from "next/image";

const Ourproducts = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Heading: Our Products */}
      <h1 className="font-poppins text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] text-center mb-8">
        Our Products
      </h1>
      {/* Major Div that subdivides into 2 rows of 4 products */}
      <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="w-full h-auto relative">
          <Image
            src="/18.jpeg"
            alt="Product 1"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/30.png"
            alt="30% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Pingky
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              cute bed set
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto relative">
          <Image
            src="/vip.png"
            alt="Product 2"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover opacity-35"
          />
          <Image
            src="/Button.png"
            alt="Center Overlay"
            width={252}
            height={96}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[252px] h-[96px]"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Leviosa
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Stylish cafe chair
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp2,500,000
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full h-auto relative">
          <Image
            src="/14.png"
            alt="Product 3"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/50.png"
            alt="50% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Lolito
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Luxury big sofa
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full h-auto relative">
          <Image
            src="/15.jpeg"
            alt="Product 4"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/New.png"
            alt="New Arrival"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Respira
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Outdoor bar and table stool
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp500,000
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="w-full h-auto">
          <Image
            src="/16.png"
            alt="Product 5"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />

          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Grifo
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Night lamp
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp1,500,000
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="w-full h-auto relative">
          <Image
            src="/17.png"
            alt="Product 6"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/New.png"
            alt="New Arrival"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />

          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Muggo
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Small mug
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp1500,000
            </div>
          </div>
        </div>

        {/* Product 7 */}
        <div className="w-full h-auto relative">
          <Image
            src="/18.jpeg"
            alt="Product 7"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/50.png"
            alt="50% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />

          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Pingky
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              cute bed set
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Price: Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

        {/* Product 8 */}
        <div className="w-full h-auto relative">
          <Image
            src="/19.jpeg"
            alt="Product 8"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/50.png"
            alt="50% Sale"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />

          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Leviosa
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Stylish cafe chair
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Price: $2,500,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourproducts;
