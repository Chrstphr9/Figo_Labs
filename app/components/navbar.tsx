'use client'
import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#05040A] text-white font-['Inter'] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Image src={assets.Logo1} alt='' />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-normal text-[16px] font-inter"
            >
              Product
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-normal text-[16px] font-inter"
            >
              Features
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-normal text-[16px] font-inter"
            >
              Resources
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-white transition-colors duration-200 font-normal font-inter text-[16px] px-4 py-2">
              Login
            </button>
            <button className="bg-[#05040A] border-[0.5px] border-[#ffffff66] text-white px-6 py-2 rounded-[12px] font-normal text-[16px] transition-all duration-200 flex items-center space-x-2 group">
              <span>Start Now</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700 mt-2">
            {/* Mobile Zapable attribution */}
            <div className="flex items-center justify-center mb-4 sm:hidden">
              <span className="text-xs text-gray-400 mr-1">BY</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-900">⚡</span>
                </div>
                <span className="text-sm font-medium">Zapable</span>
              </div>
            </div>
            
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Product
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Resources
            </a>
            
            <div className="pt-4 space-y-2">
              <button className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200">
                Login
              </button>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}