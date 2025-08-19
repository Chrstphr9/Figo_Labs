'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

const ClientTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "“Before MailPilot, our support inbox was a constant source of stress. We were missing follow-ups, breaching SLAs, and burning out our team. Since deploying MailPilot, we’ve cut first-response times in half and finally have full visibility into workload. The automation is like adding an extra team without extra headcount.”",
      name: "Ada O.",
      company: "Cyperia Systems Limited",
      avatar: "/t1.png" // Path should be in public/avatars folder
    },
    {
      id: 2,
      quote: "“MailPilot’s AI triage and contextual replies have transformed how we handle client communications. Our SLA compliance has jumped from 60% to over 95% in just two months, and our customers are noticing the difference. The analytics dashboard is now a daily tool for our leadership team.”",
      name: "Chinedu M.",
      company: "BillsClan",
      avatar: "/t2.png"
    },
    {
      id: 3,
      quote: "“We were skeptical at first, but the proof of concept won us over. MailPilot’s ability to monitor multiple mailboxes, classify messages, and escalate critical issues instantly has saved us countless hours and avoided costly delays. It’s like having an AI-powered air traffic controller for our emails.",
      name: "Fatima S.",
      company: "Tribahl",
      avatar: "/t3.jpeg"
    },
  ];

  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      if (currentSlide > testimonials.length) {
        setCurrentSlide(1);
        setIsTransitioning(false);
      } else if (currentSlide < 1) {
        setCurrentSlide(testimonials.length);
        setIsTransitioning(false);
      } else {
        setIsTransitioning(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning, testimonials.length]);

  const getTransform = () => {
    const slideWidth = 380;
    const offset = currentSlide * slideWidth;
    return `translateX(-${offset}px)`;
  };

  const getCardScale = (index: number): string => {
    const middleCardIndex = currentSlide;
    return index === middleCardIndex ? 'scale-110' : 'scale-85';
  };

  const getCardOpacity = (index: number): string => {
    const middleCardIndex = currentSlide;
    return index === middleCardIndex ? 'opacity-100' : 'opacity-70';
  };

  const getCardBorderRadius = (index: number): string => {
    const middleCardIndex = currentSlide;
    return index === middleCardIndex ? 'rounded-3xl' : 'rounded-xl';
  };

  return (
    <section className="w-full px-4 py-16 bg-[#05040A] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-[36px] font-bold mb-16 text-white font-poppins">
          Client Testimonials
        </h2>

        <div className="relative flex justify-center items-center">
          <div className="flex justify-center w-full">
            <div className="overflow-hidden" style={{ width: '1140px' }}>
              <div 
                className={`flex items-center ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{
                  transform: getTransform(),
                  width: `${extendedTestimonials.length * 380}px`,
                  paddingLeft: '380px'
                }}
              >
                {extendedTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className={`flex-shrink-0 px-4 transition-all duration-300 ${getCardScale(index)} ${getCardOpacity(index)}`}
                    style={{ width: '380px' }}
                  >
                    <div className={`bg-[#BFAEFF1A] ${getCardBorderRadius(index)} p-6 h-full flex flex-col`} style={{ minHeight: '400px' }}>
                      <div className="text-purple-500 text-6xl font-bold leading-none mb-4" style={{ fontFamily: 'serif' }}></div>
                      <div className="flex-grow mb-6">
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div className="flex items-center bg-[#FBFBFB80] rounded-full py-2 px-2 w-fit">
  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 overflow-hidden">
    {testimonial.avatar ? (
      <Image 
        src={testimonial.avatar}
        alt={testimonial.name}
        width={40}
        height={40}
        className="object-cover w-full h-full"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = '/avatars/default.png';
        }}
      />
    ) : (
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-sm">
          {testimonial.name.charAt(0)}
        </span>
      </div>
    )}
  </div>
  <div 
    className="pr-8"
    style={{
      width: '227.69px',
      height: '45.87px',
      opacity: 1,
      gap: '12.65px',
      borderRadius: '18.98px',
      paddingTop: '3.16px',
      paddingRight: '107.56px',
      paddingBottom: '3.16px',
      paddingLeft: '3.16px'
    }}
  >
    <div className="text-[#111111E5] font-semibold text-xs">
      {testimonial.name}
    </div>
    <div className="text-[#111111E5] text-sm font-semibold whitespace-nowrap">
      {testimonial.company}
    </div>
  </div>
</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-234">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentSlide(index + 1);
                }
              }}
              className={`h-2 rounded-full transition-all duration-200 ${
                (currentSlide - 1) % testimonials.length === index 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ClientTestimonials;