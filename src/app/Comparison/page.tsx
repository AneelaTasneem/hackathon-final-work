import React from 'react';
import Overlay from '../Components/Overlay';
import Iconsection from '../Components/Iconssection';
import Image from 'next/image';

const Comparison = () => {
  return (
    <div className="relative min-h-screen">
      {/* Overlay Section */}
      <Overlay heading="Comparison" breadcrumb="Comparison" imageSrc="/shop.jpeg" />

      <section className="container mx-auto px-4 py-8 flex flex-col">
        {/* Section Title */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">
            Go to Product page for more Products
          </h2>
          <a href="#" className="text-[#727272] underline hover:text-blue-800">
            View More
          </a>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center mt-6">
          {/* First Product */}
          <div className="rounded-lg shadow-md p-4 transition">
            <Image
              src="/cart-1.png"
              alt="Asgaard Sofa"
              width={280}
              height={177}
              className="rounded-md bg-[#F9F1E7]"
            />
            <h3 className="mt-4 text-lg font-semibold">Asgaard Sofa</h3>
            <p className="text-gray-500">Rs. 250,000.00</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-400 text-sm">4.7 | 204 Reviews</span>
            </div>
          </div>

          {/* Second Product */}
          <div className="rounded-lg shadow-md p-4 transition  md:block">
            <Image
              src="/cart-3.png"
              alt="Outdoor Sofa Set"
              width={283}
              height={211}
              className="rounded-md bg-[#F9F1E7]"
            />
            <h3 className="mt-4 text-lg font-semibold">Outdoor Sofa Set</h3>
            <p className="text-gray-500">Rs. 224,000.00</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-400 text-sm">4.2 | 145 Reviews</span>
            </div>
          </div>

          {/* Add A Product */}
          <div className="border rounded-lg p-4 bg-yellow-100 text-center hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Add A Product</h3>
            <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
              Choose a Product
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Column */}
          <div>
            <h2 className="text-lg font-bold mb-4">General</h2>
            <div className="space-y-2 text-gray-700">
              <p>Sales Package</p>
              <p>Model Number</p>
              <p>Secondary Material</p>
              <p>Configuration</p>
              <p>Upholstery Material</p>
              <p>Upholstery Color</p>
            </div>
            {/* Additional Sections */}
            <h2 className="text-lg font-bold mt-32">Product</h2>
            <div className="space-y-2 text-gray-700">
              <p>Filling Material</p>
              <p>Finish Type</p>
              <p>Adjustable Headrest</p>
              <p>Maximum Load Capacity</p>
              <p>Origin of Manufacture</p>
            </div>
            <h2 className="text-lg font-bold mt-32">Dimensions</h2>
            <div className="space-y-2 text-gray-700">
              <p>Width</p>
              <p>Height</p>
              <p>Depth</p>
              <p>Weight</p>
              <p>Seat Height</p>
              <p>Leg Height</p>
            </div>

            <h2 className="text-lg font-bold mt-32">Warranty</h2>
<div className="text-gray-700">
  <p className="mb-2 sm:mb-16">Warranty Summary</p>
  <p className="mb-2 sm:mb-36">Warranty Service Type</p>
  <p className="mb-2 sm:mb-16">Covered in Warranty</p>
  <p className="mb-2 sm:mb-44">Not Covered in Warranty</p>
  <p className="mb-4 sm:mb-7">Domestic Warranty</p>
</div>
  </div>

          {/* Second Column */}
          <div className="hidden md:block">
            {/* Content here */}
            <h2 className="text-lg font-bold mb-4"></h2>
          <div className="space-y-2">
            <p className="font-semibold">1 sectional sofa</p>
            <p>TFCBLIGRBL6SRHS</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>

          <h2 className="text-lg font-bold mt-48"></h2>
          <div className="space-y-2">
            <p className="font-semibold">Foam</p>
            <p>Bright Grey & Lion</p>
            <p>No</p>
            <p>280 KG</p>
            <p>India</p>
          </div>

          <h2 className="text-lg font-bold mt-40"></h2>
          <div className="space-y-2">
            <p >265.32cm</p>
            <p>76cm</p>
            <p>167.76cm</p>
            <p>45 KG</p>
            <p>41.52cm</p>
            <p>5.46cm</p>
          </div>

          <h2 className="text-lg font-bold mt-36"></h2>
          <div >
            <p className='mb-10'>1 Year Manufacturing <br />Warranty</p>
            <p className='mb-14'>For Warranty Claims or <br /> Any Product Related <br />Issues Please Email at <br />operations@trevifurnitu <br />re.com</p>
            <p className='mb-10'>Warranty Against <br />Manufacturing Defect</p>
            <p className='mb-10'>The Warranty Does Not <br />Cover Damages Due To <br />Usage Of The Product <br />Beyond Its Intended Use <br />And Wear & Tear In The <br />Natural Course Of <br />Product Usage.</p>
            <p className='mb-10'>1 Year</p>
          </div>
          <button className='w-[215px] h-[64px] bg-[#B88E2F] text-white border-[1px] mt-6 hover:to-blue-600'>Add to cart</button>
          </div>

          {/* Third Column */}
          <div className="hidden lg:block">
            {/* Content here */}
            <h2 className="text-lg font-bold mb-4"></h2>
          <div className="space-y-2">
            <p className="font-semibold">1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>

          <h2 className="text-lg font-bold  mt-48"></h2>
          <div className="space-y-2">
            <p className="font-semibold">Matte</p>
            <p>Bright Grey & Lion</p>
            <p>Yes</p>
            <p>300 KG</p>
            <p>India</p>
          </div>
          <h2 className="text-lg font-bold mt-[165px]"></h2>
          <div className="space-y-2">
            <p >265.32cm</p>
            <p>76cm</p>
            <p>167.76cm</p>
            <p>65 KG</p>
            <p>41.52cm</p>
            <p>5.46cm</p>
          </div>

          <h2 className="text-lg font-bold mt-36"></h2>
          <div >
            <p className='mb-10'>12 Year Manufacturing <br />Warranty</p>
            <p className='mb-16'>For Warranty Claims or <br /> Any Product Related <br />Issues Please Email at <br />support@xyz.com</p>
            <p className='mb-2'>Warranty of the product <br />is limited to <br />manufacturing defects <br />only.</p>
            <p className='mb-10'>The Warranty Does Not <br />Cover Damages Due To <br />Usage Of The Product <br />Beyond Its Intended Use <br />And Wear & Tear In The <br />Natural Course Of <br />Product Usage.</p>
            <p className='mb-5'>3 Months</p>
          </div>
          <button className='w-[215px] h-[64px] bg-[#B88E2F] text-white border-[1px] mt-10 hover:to-blue-600'>Add to cart</button>
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

export default Comparison;
