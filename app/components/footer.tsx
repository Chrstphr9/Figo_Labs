import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <Image src={assets.Logo1} alt='' className='w-[182px] h-[46px] md:w-[218px] md:h-[55.13px]'/>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-white mb-2 font-poppins">
                                YOUR TRUSTED EMAIL MANAGEMENT SOLUTION.
                            </h3>
                            <p className="text-medium text-white leading-relaxed font-poppins">
                                Designed to help users seamlessly organize, prioritize, and act on emails efficiently.
                            </p>
                        </div>

                        <div className="mt-16">
                            <h4 className="text-sm font-semibold text-white mb-3 font-poppins">Follow Us On:</h4>
                            <div className="flex justify-center space-x-4 md:justify-start">
                                <a href="https://instagram.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                                    <Image src={assets.instagram} alt="logo" />
                                </a>
                                <a href="https://twitter.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                                    <Image src={assets.x} alt="logo" />
                                </a>
                                <a href="https://linkedin.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                                    <Image src={assets.linkedin} alt="logo" />
                                </a>
                                <a href="https://youtube.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                                    <Image src={assets.youtube} alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FigoAI Lab Products with Others */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-6 font-poppins">FigoAI Lab Products</h3>
                        <ul className="space-y-3 mb-8 font-poppins">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white transition-colors duration-200 text-medium"
                                >
                                    Figocard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white transition-colors duration-200 text-sm"
                                >
                                    FigoEvents
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white transition-colors duration-200 text-sm"
                                >
                                    FigoAI
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white transition-colors duration-200 text-sm"
                                >
                                    BillsClan
                                </a>
                            </li>
                        </ul>

                        {/* <h3 className="text-lg font-semibold text-white mb-6">Others</h3> */}
                        {/* <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  BillsClan
                </a>
              </li>
            </ul> */}
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-6 font-poppins">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white transition-colors duration-200 text-sm font-poppins"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white transition-colors duration-200 text-sm font-poppins"
                                >
                                    Become a Partner
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    Terms and Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Layout Adjustments */}
                {/* <div className="md:hidden mt-8 pt-8 border-t border-gray-800">
                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            © 2024 MAILPILOT. All rights reserved.
                        </p>
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;