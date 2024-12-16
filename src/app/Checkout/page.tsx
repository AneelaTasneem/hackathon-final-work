import React from "react";
import Overlay from "../Components/Overlay";
import Iconsection from "../Components/Iconssection";

const Checkout = () => {
  return (
    <div className="relative min-h-screen ">
      {/* Overlay Section */}
      <Overlay heading="Checkout" breadcrumb="Checkout" imageSrc="/shop.jpeg" />

      {/* Checkout Content */}
      <div className="flex flex-wrap md:flex-nowrap w-full p-8">
        {/* Left Portion - Billing Details */}
        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-6">Billing Details</h1>
          <form className="space-y-6">
            {/* First Name and Last Name */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="First name"
                  required
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-gray-700 mb-1">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Company name"
              />
            </div>

            {/* Country/Region */}
            <div>
              <label htmlFor="country" className="block text-gray-700 mb-1">
                Country / Region
              </label>
              <select
                id="country"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select a country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>

            {/* Street Address */}
            <div>
              <label htmlFor="streetAddress" className="block text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="House number and street name"
                required
              />
            </div>

            {/* Town/City */}
            <div>
              <label htmlFor="city" className="block text-gray-700 mb-1">
                Town / City
              </label>
              <input
                type="text"
                id="city"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Town or city"
                required
              />
            </div>

            {/* Province */}
            <div>
              <label htmlFor="province" className="block text-gray-700 mb-1">
                Province
              </label>
              <select
                id="province"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select province</option>
                <option>Western Province</option>
                <option>Eastern Province</option>
                <option>Central Province</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div>
              <label htmlFor="zip" className="block text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Postal code"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Phone number"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email address"
                required
              />
            </div>

            {/* Additional Information */}
            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-gray-700 mb-1"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>

      {/* Right Portion - Order Summary */}
<div className="w-full md:w-1/2 p-8 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold mb-4">Your Order</h2>

  {/* Product List */}
  <ul className="space-y-4 text-gray-700 border-b pb-4">
    <li className="flex justify-between">
      <span>Asgaard Sofa × 1</span>
      <span>Rs. 250,000.00</span>
    </li>
    <li className="flex justify-between font-bold text-gray-900">
      <span>Subtotal</span>
      <span>Rs. 250,000.00</span>
    </li>
    <li className="flex justify-between text-lg font-bold text-yellow-600">
      <span>Total</span>
      <span>Rs. 250,000.00</span>
    </li>
  </ul>

  {/* Payment Options */}
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">Payment Method</h3>

    <div className="space-y-4">
      {/* Direct Bank Transfer */}
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="paymentMethod"
          value="bank-transfer"
          defaultChecked
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-gray-700 font-medium">Direct Bank Transfer</span>
      </label>
      <p className="text-gray-500 text-sm ml-6">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference. Your order will not be shipped until the
        funds have cleared in our account.
      </p>

      {/* Cash On Delivery */}
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="paymentMethod"
          value="cash-on-delivery"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-gray-700 font-medium">Cash On Delivery</span>
      </label>
    </div>
  </div>

  {/* Privacy Note */}
  <p className="mt-4 text-gray-600 text-sm">
    Your personal data will be used to support your experience throughout this
    website, to manage access to your account, and for other purposes described
    in our{" "}
    <span className="font-semibold text-black">privacy policy</span>.
  </p>

 {/* Place Order Button */}
<div className="flex justify-center mt-6">
  <button className="w-[318px] h-16  font-poppins font-normal py-3 rounded-md border-[1px] hover:bg-blue-700">
    Place Order
  </button>
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

export default Checkout;
