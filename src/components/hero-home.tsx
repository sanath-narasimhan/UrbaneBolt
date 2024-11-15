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

import { useState } from 'react';

export default function HeroHome() {
  const [activeTab, setActiveTab] = useState('shipment');
  
  const tabConfig = {
    shipment: {
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-400',
      icon: TruckIcon
    },
    container: {
      color: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-300',
      icon: CubeIcon
    },
    order: {
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500',
      icon: ShoppingBagIcon
    }
  };

  const getPlaceholder = () => {
    switch(activeTab) {
      case 'shipment':
        return 'Enter shipment tracking number';
      case 'container':
        return 'Enter container number';
      case 'order':
        return 'Enter order number';
      default:
        return 'Enter tracking number';
    }
  };

  return (
    <section className="relative flex items-center justify-start" style={{height: '100vh'}}>
      <div className="max-w-3xl px-2 sm:px-4 mt-32">
        {/* Hero content */}
        <div className="md:pb-8">
          {/* Section header */}
          <div className="text-left pl-4">
            <div
              className="mb-6"
              data-aos="zoom-y-out"
            >
            </div>
            <h1
              className="mb-6 text-4xl font-bold md:text-5xl max-w-2xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Experts in Quick Commerce Logistics for <br className="max-lg:hidden" />
              <TypeAnimation
                sequence={[
                  'Personal Care Brands',
                  2000,
                  'Beauty Brands',
                  2000,
                  'Petcare Brands',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block text-green-600"
              />
            </h1>
            <div className="max-w-xl ml-0">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Urban Bolt! We Deliver Speed.
              </p>
            </div>
          </div>
        </div>

        {/* Shipment Tracker */}
        <div className="mt-4 bg-white rounded-lg shadow-md p-4 max-w-xl ml-4">
          {/* Header */}
          <h2 className="text-xl  mb-4 text-gray-800">Track your shipment</h2>
          
          {/* Tabs */}
          <div className="flex space-x-1 mb-4">
            {['shipment', 'container', 'order'].map((tab) => {
              const TabIcon = tabConfig[tab].icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-t-lg font-medium capitalize transition-colors duration-200 flex items-center space-x-2 ${
                    activeTab === tab
                      ? `${tabConfig[tab].color} text-white`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <TabIcon className="h-5 w-5" />
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
          
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder={getPlaceholder()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all duration-200"
            />
            <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 ${tabConfig[activeTab].color} text-white rounded-lg ${tabConfig[activeTab].hoverColor} transition-colors duration-200`}>
              Track
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
