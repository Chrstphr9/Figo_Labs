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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <section id='product' className={`bg-[#05040A] text-white min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 relative ${className}`}>
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center py-4 px-4 relative z-50">
                <div className="flex items-center">
                    {/* <Image src={assets.Logo1} alt="MailPilot" className="h-8 w-auto" /> */}
                </div>
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2"
                >
                    {/* <Image src={assets.menu} alt="Menu" className="h-6 w-6" /> */}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-[#05040A] z-40 flex flex-col">
                    {/* Menu Header */}
                    <div className="flex justify-between items-center py-4 px-4">
                        <Image src={assets.Logo1} alt="MailPilot" className="h-6 w-6" />
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
                        <a href="#" className="text-white hover:text-purple-400 transition-colors">Productt</a>
                        <a href="#feature" className="text-white hover:text-purple-400 transition-colors">Features</a>
                        <a href="#faq" className="text-white hover:text-purple-400 transition-colors">Resources</a>

                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-20  lg:mt-15">
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
                            text-[#FFFFFF]
                            text-xs
                            font-poppins
                        ">
                            By Figo AI Labs
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] font-bold leading-tight mb-6 font-poppins">
                        <span className="text-white">Supercharge Your</span>
                        <br />
                        <span className={`gradient-text bg-clip-text text-transparent transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
                            {words[currentWordIndex]}
                        </span>
                        <br />
                        <span className="text-white">With MailPilot</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="font-poppins text-[#FFFFFFCC] text-base sm:text-lg lg:text-[20px] max-w-5xl mx-auto mb-10 font-normal px-4 sm:px-0">
                        <span className="hidden sm:inline">
                            Stop drowning in customer support emails. Enjoy smart sorting, reminders, lightning-fast responses, and complete<br/>
                            inbox visibility. Say goodbye to missed support messages and broken promises.
                        </span>
                        <span className="sm:hidden">
                            No more missed emails. No more chaos. Just faster responses, smart triage and total control.
                        </span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center items-center text-shadow-glow px-4 sm:px-0">
                       <a href="https://mailpilot.figolabs.ai/sign-up"
                       target='_blank'>
                       <button className="w-full sm:w-auto max-w-[130px] sm:max-w-none gradient-btn hover:from-purple-700 hover:to-blue-700 text-white font-normal px-6 sm:px-4 py-3 sm:py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-glow hover:shadow-glow-hover text-[16px] border border-[#ffffff66] whitespace-nowrap">
                            Get Started
                        </button>
                       </a>
                        <a href="https://www.figolabs.ai/contact"
                        target='_blank'>
                        <button className="w-full sm:w-auto max-w-[130px] sm:max-w-none border-1 border-[#ffffff66] hover:border-gray-500 text-gray-300 hover:text-white font-normal px-6 sm:px-4 py-3 sm:py-2 rounded-lg transition-all duration-200 shadow-glow hover:bg-gray-800/50 backdrop-blur-sm text-[16px] whitespace-nowrap">
                            Talk to Sales
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Desktop Statistics Section */}
            <div className="hidden md:flex relative w-full justify-center mt-20">
                <div className="relative">
                    {/* Arc border container */}
                    <div className="w-[1000px] h-[200px] relative overflow-hidden">
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

                                {/* < 2mins Average Response Time */}
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
            </div>

            {/* Mobile Arc above Statistics */}
            <div className="md:hidden flex w-full justify-center mt-10 -mb-6">
                <div className="relative">
                    {/* Arc border container */}
                    <div className="w-[520px] h-[140px] relative overflow-hidden">
                        {/* The actual arc border */}
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[820px]">
                            <Image src={assets.curve} alt='curve' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Statistics Section */}
            <div className="md:hidden mb-18">
    <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between items-center w-full max-w-full gap-2 sm:gap-4">
            {/* 99.9% Uptime Guarantee */}
            <div className="text-center flex-1 min-w-0">
                <div className="text-xl sm:text-2xl font-bold bg-[#BF38F575] bg-clip-text text-transparent mb-1 leading-none font-poppins">
                    95%
                </div>
                <div className="text-gray-300 text-[10px] sm:text-xs font-medium leading-tight font-poppins">
                    Uptime SLA
                </div>
            </div>

            {/* < 2mins Average Response Time */}
            <div className="text-center flex-1 min-w-0">
                <div className="text-xl sm:text-2xl font-bold bg-[#553286] bg-clip-text text-transparent mb-1 leading-none font-poppins">
                    &lt; 2mins
                </div>
                <div className="text-gray-300 text-[10px] sm:text-xs font-medium leading-tight font-poppins text-center">
                    Average Response Time
                </div>
            </div>

            {/* 85% Efficiency Improvement */}
            <div className="text-center flex-1 min-w-0">
                <div className="text-xl sm:text-2xl font-bold bg-[#823286] bg-clip-text text-transparent mb-1 leading-none font-poppins">
                    85%
                </div>
                <div className="text-gray-300 text-[10px] sm:text-xs font-medium leading-tight font-poppins text-center">
                    Efficiency Improvement
                </div>
            </div>
        </div>
    </div>
</div>

            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse delay-1000"></div>
            </div>
        </section>
    );
};

export default HeroSection;