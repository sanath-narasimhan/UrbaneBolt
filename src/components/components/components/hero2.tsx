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
import indiaImage from "@/public/images/india.png";

import { useState } from 'react';

export default function HeroTwo() {
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
    <section className="relative flex items-center justify-between px-8 sm:px-12" style={{height: '100vh'}}>
      <div className="max-w-3xl px-2 sm:px-4 mt-20">
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

        
      </div>

      {/* Add the new image container */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <Image
          src={indiaImage}
          alt="India Map"
          className="object-contain absolute right-0 top-1/2 transform -translate-y-1/2"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
