'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { assets } from '@/assets/assets'

interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
    const words = ["Email Operations", "Customer Service", "Business Efficiency"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) =>
                    prevIndex === words.length - 1 ? 0 : prevIndex + 1
                );
                setIsAnimating(true);
            }, 100); // Short delay before showing next word
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`bg-[#05040A] text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-14 ${className}`}>
            <div className="max-w-5xl mx-auto text-center">
                {/* Beta Badge */}
                <div className="
  inline-flex 
  items-center 
  mb-8 
  px-4 
  py-2 
  rounded-full 
  border 
  border-[#FFFFFF66]
  bg-gradient-to-br from-[#E9E2FF66] to-[#F6F0FF4D]
  backdrop-blur-sm
  opacity-30
  space-x-2
">
                    <span className="
    uppercase 
    font-medium 
    text-gray-300 
    text-xs
    font-poppins
  ">
                        By Figo Labs
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[48px] font-bold leading-tight mb-6 font-poppins">
                    <span className="text-white">Supercharge Your </span>
                    <span className={`gradient-text bg-clip-text text-transparent transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
                        {words[currentWordIndex]}
                    </span>
                    <br />
                    <span className="text-white">With MailPilot</span>
                </h1>

                {/* Subtitle */}
                <p className="font-poppins text-[#FFFFFFCC] text-lg sm:text-xl lg:text-[20px] max-w-5xl mx-auto mb-10 whitespace-nowrap font-normal ">
                Stop drowning in customer support emails. Enjoy smart sorting, reminders, lightning-fast responses, and complete<br></br>
                inbox visibility. Say goodbye to missed support messages and broken promises. 
</p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-shadow-glow">
                    
                <button className="w-full sm:w-auto gradient-btn hover:from-purple-700 hover:to-blue-700 text-white font-normal px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-glow hover:shadow-glow-hover text-[16px] border border-[#ffffff66]">
    Get Started
</button>
                    <button className="w-full sm:w-auto border-1 border-[#ffffff66] hover:border-gray-500 text-gray-300 hover:text-white font-normal px-4 py-2 rounded-lg transition-all duration-200 shadow-glow hover:bg-gray-800/50 backdrop-blur-sm text-[16px]">
                        Talk to Sales
                    </button>
                </div>

                {/* Optional: Animated gradient background */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse delay-1000"></div>
                </div>
            </div>

            <div className="relative w-full flex justify-center mt-20">
  <div className="relative">
    {/* Arc border container */}
    <div className="w-[1000px] h-[200px] relative overflow-hidden"> {/* Reduced height */}
      
      {/* The actual arc border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[2000px]">
       <Image src={assets.curve} alt='curve' />
      </div>
      
      {/* Statistics Content - positioned above the arc */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full">
        <div className="flex items-center justify-between w-[569px] mx-auto gap-8">
          
          {/* 99.9% Uptime Guarantee */}
          <div className="text-center flex-1">
            <div className="text-4xl font-bold bg-[#BF38F575] bg-clip-text text-transparent mb-2 leading-none font-poppins">
              99.9%
            </div>
            <div className="text-gray-300 text-sm font-medium leading-tight font-poppins">
              Uptime Guarantee
            </div>
          </div>

          {/* < 3mins Average Response Time */}
          <div className="text-center flex-1">
            <div className="text-4xl font-bold bg-[#553286] bg-clip-text text-transparent mb-2 leading-none font-poppins">
              &lt; 2mins
            </div>
            <div className="text-gray-300 text-sm font-medium leading-tight font-poppins">
              Average Response Time
            </div>
          </div>

          {/* 85% Efficiency Improvement */}
          <div className="text-center flex-1">
            <div className="text-4xl font-bold bg-[#823286] bg-clip-text text-transparent mb-2 leading-none font-poppins">
              85%
            </div>
            <div className="text-gray-300 text-sm font-medium leading-tight font-poppins">
              Efficiency Improvement
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Optional: Animated gradient background */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse delay-1000"></div>
  </div>
</div>
        </section>
    );
};

export default HeroSection;