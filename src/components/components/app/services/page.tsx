"use client"

import React, { useState } from 'react';
import Image from 'next/image';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Urban Storage',
      content: `Our urban storage solutions provide secure, accessible, and flexible storage options 
      in prime city locations. Features include:
      • 24/7 security monitoring
      • Climate-controlled units
      • Flexible storage periods
      • Easy access and loading facilities
      • Inventory management systems`
    },
    {
      title: 'Air and Ocean Freights',
      content: `Comprehensive international shipping solutions for businesses of all sizes:
      • Global air freight services
      • Ocean container shipping (FCL & LCL)
      • Door-to-door delivery options
      • Real-time cargo tracking
      • Customs documentation assistance
      • Temperature-controlled shipping`
    },
    {
      title: 'Cross Border',
      content: `Seamless cross-border logistics solutions:
      • Customs clearance services
      • International trade compliance
      • Documentation handling
      • Border control liaison
      • Multi-modal transportation options
      • Real-time shipment tracking`
    },
    {
      title: 'Express Imports',
      content: `Fast-track import services for time-sensitive cargo:
      • Priority customs clearance
      • Express documentation processing
      • Direct delivery options
      • Special handling for urgent shipments
      • 24/7 customer support
      • Status updates and notifications`
    },
    {
      title: 'Same Day Delivery',
      content: `Ultra-fast delivery solutions for urgent needs:
      • Guaranteed same-day delivery
      • Real-time tracking
      • Priority handling
      • Dedicated transport options
      • Proof of delivery
      • Time-specific delivery windows`
    },
    {
      title: 'Next Day Delivery',
      content: `Reliable next-day delivery services:
      • Overnight shipping options
      • Scheduled pickup services
      • Online booking system
      • Package insurance
      • Delivery confirmation
      • Multiple attempt delivery`
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[30vh] flex items-end justify-center pb-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Services Background"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white z-10 text-center mb-8">
          Our Services
        </h1>
      </div>

      {/* Services Tabs Section - added margin-top */}
      <div className="w-full bg-gray-100 mt-8">
        {/* Tabs Navigation */}
        <div className="w-full overflow-x-auto">
          <div className="flex min-w-full border-b border-gray-200">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 min-w-[200px] px-6 py-4 text-center font-medium transition-colors duration-300
                  ${activeTab === index 
                    ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full bg-white">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
              {services[activeTab].title}
            </h2>
            <div className="text-gray-600 text-center whitespace-pre-line leading-relaxed">
              {services[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
