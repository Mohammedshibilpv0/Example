import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gem } from 'lucide-react';
import AboutProduct from '../components/about product/aboutProduct';
import auPay from '../assets/pro.svg';
import ProductCard from '../components/feturedCard/productsCard';
const cardData = {
    title: "The Golden Gold App",
    description: "We're Making Jewellery Scheme Payments Easier.",
    imageUrl:auPay,
    details: "AU Pay introduces a chit scheme payment system that transcends the ordinary - providing your patrons with a secure and efficient way to make their jewellery dreams a reality. Whether they're acquiring a timeless piece for themselves or expressing love through a thoughtful gift, AU Pay ensures that every instalment paid is smooth and as memorable as the purchase itself.Give your customers an immersive chit-scheme management platform where sophistication meets simplicity - experience AU Pay today!",
  };


const AuPay = () => {
  return (
  <>
    <div className="relative bg-slate-50 min-h-[70vh] flex items-center px-6 md:px-16 lg:px-24 pt-36 pb-14">
      {/* Subtle Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-slate-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto">
        <div className="w-full lg:w-1/2">
          {/* Preheader with Icon */}
          <div className="flex items-center gap-2 mb-4">
            <Gem className="text-blue-600 w-6 h-6" />
            <h2 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              AU PAY
            </h2>
          </div>

          {/* Main Headline with Dynamic Gradient */}
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-800 leading-tight mb-6">
            An Exclusive Savings Scheme 
            <br />
            Payment App for Jewellery Stores
          </h1>

         
          <nav className="mt-12 text-sm text-gray-500">
            <ul className="flex items-center gap-3">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <span className="text-gray-300">/</span>
              <li>
                <li  className="hover:text-blue-600 transition-colors">
                  Product & Features
                </li>
              </li>
              <span className="text-gray-300">/</span>
              <li className="font-medium text-blue-600">Aupay</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <AboutProduct cardData={cardData}/>
    <ProductCard/>
  </>
  );
};

export default AuPay;