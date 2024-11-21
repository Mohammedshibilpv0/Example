import React from "react";
import Logo from '../../assets/images/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            <img src={Logo} alt="" />
          </h1>
          <div className="flex space-x-4">
           
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">QUICKLINKS</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Product</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">SOLUTIONS</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Au Pay</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Au Sales</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Au Shop</a></li>
          </ul>
        </div>

       

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="" className="text-gray-600 hover:underline">0422 4957575</a></li>
            <li><a href="support@atts.in" className="text-gray-600 hover:underline">support@atts.in</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
