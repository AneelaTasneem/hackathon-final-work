import React from "react";
import Overlay from "../Components/Overlay";
import Iconsection from "../Components/Iconssection";


const YourComponent = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Section */}
     <Overlay 
      heading="Contact"
      breadcrumb="Contact"
      imageSrc="/shop.jpeg"
     />


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
                className="w-[237px] h-[55px] bg-[#B88E2F] text-white  font-poppins font-normal py-3 rounded-md border-[1px] hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
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

export default YourComponent;
