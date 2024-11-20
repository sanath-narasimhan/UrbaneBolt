"use client"

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  TruckIcon, 
  ClockIcon, 
  GlobeAsiaAustraliaIcon, 
  PaperAirplaneIcon, 
  ArrowPathIcon, 
  BuildingOffice2Icon 
} from '@heroicons/react/24/outline';

import Navbar from '../components/Navbar';

import Stats from '../components/Stats';

import Contact from '../components/Contact';

import Footer from '../components/Footer';


export default function Services() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Get the activeTab from navigation state
    if (location.state && typeof location.state.activeTab === 'number') {
      setActiveTab(location.state.activeTab);
    }
  }, [location]);

  useEffect(() => {
    // Scroll to top when component mounts or activeTab changes
    window.scrollTo(0, 0);
  }, [activeTab]);

  const services = [
    {
      title: 'Same Day Delivery',
      content: `Urban SDD (Same Day Delivery) is our premium delivery service designed for urgent needs in Bangalore and Hyderabad:

      • Guaranteed delivery within the same business day
      • Live GPS tracking and real-time updates
      • Priority handling for time-critical packages
      • Specialized handling for medical supplies and essential documents
      • Dedicated transport options for bulk orders
      • Flexible pickup and delivery windows
      • Proof of delivery with digital signature
      • 24/7 customer support`,
      icon: <TruckIcon className="h-6 w-6" />,
      image: "/images/same.jpg"
    },
    {
      title: 'Next Day Delivery',
      content: `Urban NDD (Next Day Delivery) provides reliable and cost-effective delivery solutions across metropolitan areas:

      • Guaranteed next-business-day delivery
      • Advanced scheduling system
      • Bulk shipment handling
      • Real-time tracking and notifications
      • Secure packaging options
      • Multiple delivery attempts
      • Integration with e-commerce platforms
      • Competitive pricing for regular shipments`,
      icon: <ClockIcon className="h-6 w-6" />,
      image: "/images/nxt.jpg"
    },
    {
      title: 'Urban Cross Border',
      content: `Our upcoming international cross-border shipping service connecting Indian businesses to global markets:

      • Seamless international shipping solutions
      • Customs documentation assistance
      • Import/Export compliance handling
      • Multi-modal transportation options
      • Duty and tax calculation
      • International tracking capability
      • Competitive international rates
      • Expert consultation for global trade`,
      icon: <GlobeAsiaAustraliaIcon className="h-6 w-6" />,
      image: "/images/xross.jpg"
    },
    {
      title: 'Urban Air & Ocean Freight',
      content: `Comprehensive freight forwarding solutions for businesses engaged in international trade:

      • Air freight services worldwide
      • Ocean freight (FCL & LCL) options
      • Door-to-door delivery services
      • Customs clearance assistance
      • Cargo insurance options
      • Temperature-controlled shipping
      • Dangerous goods handling
      • Project cargo expertise`,
      icon: <PaperAirplaneIcon className="h-6 w-6" />,
      image: "/images/ocean.jpg"
    },
    {
      title: 'Urban Express Imports',
      content: `Specialized import services designed for efficient small package handling and customs clearance:

      • Express customs clearance
      • Documentation processing
      • Last-mile delivery services
      • Real-time shipment tracking
      • Duty payment assistance
      • Compliance verification
      • Storage solutions
      • Import consultation services`,
      icon: <ArrowPathIcon className="h-6 w-6" />,
      image: "/images/house.jpg"
    },
    {
      title: 'Urban Store & Ship',
      content: `Store and ship value-added services for efficient inventory management:

      • Secure warehouse facilities
      • Climate-controlled storage
      • Inventory management system
      • Order fulfillment services
      • Real-time stock monitoring
      • Flexible storage terms
      • Pick and pack services
      • Integration with e-commerce platforms`,
      icon: <BuildingOffice2Icon className="h-6 w-6" />,
      image: "/images/import.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500`}>
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
      </div>
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[25vh] flex items-end justify-center pb-4 z-10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banner.webp"
            alt="Services Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white z-10 text-center mb-8">
          Our Services
        </h1>
      </div>

      

      {/* Services Tabs Section - added margin-top */}
      <div className="w-full bg-gray-100 mt-8 z-10 bg-white">
        {/* Tabs Navigation */}
        <div className="w-full overflow-x-auto">
          <div className="flex min-w-full">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 min-w-[200px] px-6 py-4 text-center font-medium transition-colors duration-300 
                  flex items-center justify-center gap-2 border border-gray-200
                  ${activeTab === index 
                    ? 'bg-[#007632] text-white border-[#007632]' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <span className={activeTab === index ? 'text-white' : 'text-gray-600'}>
                  {service.icon}
                </span>
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full bg-white">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 text-left">
                  {services[activeTab].title}
                </h2>
                <div className="text-gray-600 text-left text-lg whitespace-pre-line leading-relaxed">
                  {services[activeTab].content}
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <img
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-section" className="scroll-mt-20 relative z-20">
            
            <Contact />
            <Footer />
       </div>
    </div>
    
  );
}
