import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const CustomerEaseSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0E0A1C] to-[#05040A] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[36px] font-medium font-poppins leading-tight">
              &quot;We keep customers<br />
              at ease while driving<br />
              business success&quot;.
            </h2>
            
            <p className="text-gray-400 text-[16px] font-light font-poppins leading-relaxed max-w-lg">
              Organizations run their processes through hundreds of IT systems. This leaves space for many inefficiencies in Email management that hurt your business and customer&apos;s trust. We are here to fix that.
            </p>
            
            <button className="inline-flex items-center space-x-2 gradient-btn hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 group border-1 border-[#ffffff66] shadow-glow font-poppins">
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          
          {/* Right Side - Email Visualization */}
          <div className="relative w-full h-[600px] flex justify-center lg:justify-end">
            <div className="relative w-[600px] h-full">
              
              {/* Background Circles */}
              <div className="absolute inset-0">
                {/* Large blue circle */}
              <Image src={assets.Circles} alt='circle' />
            
              </div>
              
              {/* Floating Mail Icons */}
              <div className="absolute inset-0 z-10">
                
                {/* Top cluster of emails */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-wrap gap-3 justify-center max-w-56">
                    
                  </div>
                </div>
                
                {/* Left flowing stream - Purple emails */}

                
                {/* Right flowing stream - Gray emails */}

                
              </div>
              
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default CustomerEaseSection;