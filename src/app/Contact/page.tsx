import React from "react";
import Image from "next/image";
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const YourComponent = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Section */}
      <div className="relative w-full h-64 sm:h-48 md:h-64">
        <Image
          src="/shop.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        {/* Overlay content */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-4 px-4">
          <h1 className="text-black font-poppins font-medium text-[36px] sm:text-[28px] md:text-[48px] leading-[48px] md:leading-[72px] text-center">
            Contact
          </h1>
          <p className="font-poppins text-black font-medium text-[14px] sm:text-[12px] md:text-[16px] leading-[20px] md:leading-[24px] text-center">
            Home -{" "}
            <span className="font-poppins font-light">Contact</span>
          </p>
        </div>
      </div>

      <div className="bg-[#faf3ea] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
            Get In Touch With Us
          </h2>
          <p className="text-center text-sm text-gray-600 mb-12">
            For More Information About Our Products & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out.
          </p>

          {/* Contact Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Address */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Address</h4>
                <p className="text-sm text-gray-600">
                  236 5th Avenue, New York 10010, United States.
                </p>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Phone</h4>
                <p className="text-sm text-gray-600">
                  Mobile: +1 (123) 456-7890
                  <br />
                  Hotline: +1 (234) 567-8901
                </p>
              </div>

              {/* Working Time */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Working Time
                </h4>
                <p className="text-sm text-gray-600">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white p-6 rounded-lg shadow-md">
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-yellow-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-yellow-500 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              {/* Subject Field */}
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-yellow-500 focus:outline-none"
                  placeholder="This is an optional field"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring focus:ring-yellow-500 focus:outline-none"
                  placeholder="Let us know what to talk about..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="w-full py-16 px-4 bg-[#faf3ea]">
        <div className="max-w-7xl mx-auto">
          {/* Icons with Titles and Descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* High Quality */}
            <div className="flex flex-col items-center">
              <GrTrophy size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">High Quality</h3>
              <p className="text-sm text-gray-500">Crafted from top material.</p>
            </div>

            {/* Warranty Protection */}
            <div className="flex flex-col items-center">
              <GoVerified size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">Warranty Protection</h3>
              <p className="text-sm text-gray-500">Over 2 years.</p>
            </div>

            {/* Free Shipping */}
            <div className="flex flex-col items-center">
              <FaPeopleCarryBox size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">Free Shipping</h3>
              <p className="text-sm text-gray-500">Order over $150</p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center">
              <MdOutlineSupportAgent size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">24/7 Support</h3>
              <p className="text-sm text-gray-500">Dedicated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
