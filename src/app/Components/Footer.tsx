import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-lg">Funiro.</h2>
          <p className="text-sm mt-2">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" >
                <span className="hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/Shop" >
                <span className="hover:underline">Shop</span>
              </Link>
            </li>
            <li>
              <Link href="/About" >
                <span className="hover:underline">About</span>
              </Link>
            </li>
            <li>
              <Link href="/Contact" >
                <span className="hover:underline">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/payment-options" >
                <span className="hover:underline">Payment Options</span>
              </Link>
            </li>
            <li>
              <Link href="/returns" >
                <span className="hover:underline">Returns</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" >
                <span className="hover:underline">Privacy Policies</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Newsletter</h3>
          <p className="text-sm mb-4">Enter your email address:</p>
          <form className="flex">
            <input
              type="email"
              className="border border-gray-300 px-4 py-2 rounded-l-lg w-full focus:outline-none"
              placeholder="Your email"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        © 2023 Funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
