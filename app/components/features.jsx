import React from 'react';
import Image from 'next/image';
import { features } from '@/assets/assets'


const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="w-full max-w-[534px] h-[214px] bg-[#05040A] border border-gray-700 rounded-xl p-6 flex flex-col gap-6 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <div className="text-gray-300 flex justify-center">
          <Image 
            src={icon}
            alt={title}
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <h3 className="text-[#ffffffe6] font-poppins text-[20px] font-semibold leading-tight text-center">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 text-center font-poppins">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: '/mail.png',
      title: "Intelligent Email Management",
      description: "Our system allows you to monitor multiple emails at the same time. And emails are automatically sorted by type, urgency, sentiment, and action needed."
    },
    {
      icon: '/ai-brain.png',
      title: "AI-Powered Triage",
      description: "Our Advanced machine learning algorithms automatically categorize, prioritize, and route emails with laser-like intelligence."
    },
    {
      icon: '/clock.png',
      title: "Instant Responses",
      description: "Generate contextually appropriate, humanized responses that maintain your brand voice while ensuring immediate customer engagement."
    },
    {
      icon: '/eye-tracking.png',
      title: "SLA Tracking & Alerts",
      description: "Real-time monitoring of service level agreements with intelligent alerting to prevent breaches and maintain service quality."
    }
  ];

  return (
    <section className="bg-[#05040A] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[40px] mb-4 font-semibold font-poppins">
            Powerful Features
          </h2>
          <p className="gradient-text text-lg sm:text-xl font-semibold mb-4 lg:text-[40px] font-poppins">
            for Modern Teams
          </p>
          <p className="text-[#ffffffb3] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed lg:font-normal font-poppins">
            Experience the future of email management with our comprehensive AI solution, 
            designed to streamline operations and enhance customer experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto font-poppins">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;