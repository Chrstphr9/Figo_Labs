import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const CustomerEaseSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen lg:bg-gradient-to-br lg:from-[#0E0A1C] lg:to-[#05040A] bg-[#05040A] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          
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
              <div className="absolute inset-0 ">
                <Image src={assets.Circles} alt='circle' />
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Mobile Layout */}
        <div className="lg:hidden relative h-[900px] flex items-center justify-center overflow-hidden">
          
          {/* Large Dark Purple Circle - positioned to extend beyond screen */}
          <div className="absolute top-3 w-[460px] h-[460px] sm:w-[560px] sm:h-[560px]">
            <Image src={assets.semi} alt='' />
          </div>
          
          {/* Quote Text - positioned on the left */}
          <div className="absolute top-51 left-0 right-0 z-10 px-6 py-2 w-full">
            <h2 className="text-white text-[36px] sm:text-4xl font-medium font-poppins leading-tight text-left max-w-xs">
              &quot;We keep <br /> customers at <br /> ease while <br /> driving business <br /> success&quot;.
            </h2>
          </div>
          
          {/* Get Started Button - positioned at bottom right with more space from semi image */}
          <div className="absolute bottom-14 right-6 z-20">
            <button className="inline-flex items-center space-x-2 gradient-btn hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 group border border-[#ffffff66] shadow-glow font-poppins text-sm">
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default CustomerEaseSection;