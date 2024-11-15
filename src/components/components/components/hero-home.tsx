"use client"

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { TypeAnimation } from 'react-type-animation';
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import { TruckIcon, CubeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

import { useState, useEffect } from 'react';

export default function HeroHome() {
  const [activeTab, setActiveTab] = useState('Airway Bill No.');
  
  const tabConfig = {
    'Airway Bill No.': {
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-400',
      icon: TruckIcon
    },
    'Mobile No.': {
      color: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-300',
      icon: CubeIcon
    },
    'Order No.': {
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500',
      icon: ShoppingBagIcon
    }
  };

  const getPlaceholder = () => {
    switch(activeTab) {
      case 'Airway Bill No.':
        return 'Enter Airway Bill number';
      case 'Mobile No.':
        return 'Enter Mobile number';
      case 'Order No.':
        return 'Enter order number';
      default:
        return 'Enter tracking number';
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "urbanebolt offers",
      service: "Urban Storage",
      description: "A home for your cargo",
    },
    {
      title: "urbanebolt offers",
      service: "Urban Air and Ocean Freight",
      description: "Global reach, Local Expertise",
    },
    {
      title: "urbanebolt offers",
      service: "Urban Cross Border",
      description: "Shop the world, delivered to your door",
    },
    {
      title: "urbanebolt offers",
      service: "Urban Express Imports",
      description: "Global Sourcing, Local Delivery",
    },
    {
      title: "urbanebolt offers",
      service: "Same Day Delivery",
      description: "On time, Every Time",
    },
    {
      title: "urbanebolt offers",
      service: "Next Day Delivery",
      description: "Tomrrow's delivery, Today's promise",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500
              ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="h-full bg-gradient-to-b from-transparent to-white/10">
              {/* You can add a background image here if needed */}
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="max-w-3xl px-8 sm:px-12 pt-40">
          {/* Main Content */}
          <div className="text-left pl-8">
            <h1 className="mb-2 text-5xl font-bold md:text-6xl flex items-center">
              <span className="text-blue-600">urban</span>
              <span className="text-green-600">ebolt</span>
              <span className="ml-2">offers</span>
            </h1>
            <h2 className="mb-4 text-4xl font-semibold md:text-5xl text-600">
              {slides[currentSlide].service}
            </h2>
            <p className="mb-8 text-lg text-gray-700 max-w-xl">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Shipment Tracker */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 max-w-xl ml-8">
            {/* Header */}
            <h2 className="text-xl mb-4 text-gray-800">Track your shipment</h2>
            
            {/* Tabs */}
            <div className="flex space-x-2 mb-6">
              {['Airway Bill No.', 'Mobile No.', 'Order No.'].map((tab) => {
                const TabIcon = tabConfig[tab].icon;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-lg font-medium capitalize transition-colors duration-200 flex items-center space-x-2 ${
                      activeTab === tab
                        ? `${tabConfig[tab].color} text-white shadow-sm`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <TabIcon className="h-5 w-5" />
                    <span className="text-sm tracking-wide">{tab}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder={getPlaceholder()}
                className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all duration-200 text-gray-600 placeholder-gray-400 text-base"
              />
              <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2.5 ${tabConfig[activeTab].color} text-white rounded-lg ${tabConfig[activeTab].hoverColor} transition-colors duration-200 font-medium text-sm shadow-sm`}>
                Track
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation - Centered at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentSlide 
                  ? 'bg-green-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
