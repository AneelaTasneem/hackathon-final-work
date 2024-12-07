import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-4">
          {/* Exclusive Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md border-none outline-none text-black"
              />
              <button className="p-2 bg-white text-black rounded-r-md">
                &gt;
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <p>111 Bijoy Sarani, Dhaka</p>
            <p>DH 1515, Bangladesh</p>
            <p className="mt-2">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Account</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Login / Register
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms Of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Download App</h3>
            <p className="mb-4">Save $3 with App New User Only</p>

            <div className="flex gap-4 items-start mb-4">
              {/* QR Code and App Store images in one flex container */}
              <div className="flex items-start gap-4">
                {/* QR Code */}
                <div>
                  <Image
                    src="/qrcode.jpg"
                    alt="QR Code"
                    width={96}
                    height={96}
                    className="w-24 h-24"
                  />
                </div>

                {/* App Store and Google Play images */}
                <div className="flex flex-col justify-start h-auto">
                  {/* Google Play image */}
                  <Image
                    src="/googleplay.png"
                    alt="Google Play"
                    width={128}
                    height={36}
                    className="w-32 mb-0 mt-[-48px]" // Moves Google Play image 2 inches up
                  />
                  {/* App Store image */}
                  <Image
                    src="/appstore.png"
                    alt="App Store"
                    width={128}
                    height={36}
                    className="w-32 mt-[-58px]" // Moves App Store image 3 inches up
                  />
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mb-4">
              <a href="#" className="hover:opacity-80 text-3xl text-white">
                <FaFacebook />
              </a>
              <a href="#" className="hover:opacity-80 text-3xl text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:opacity-80 text-3xl text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:opacity-80 text-3xl text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
