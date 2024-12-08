import React from "react";

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
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Shop</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Payment Options</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Returns</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Policies</a>
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
