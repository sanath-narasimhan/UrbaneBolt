import React from 'react';
import { Building, CircleDot, Store, Home } from 'lucide-react';
import { CircleStackIcon, } from '@heroicons/react/24/solid';

const services = [
  {
    icon: <Building className="h-8 w-8" />,
    title: 'Brand Warehouse',
    description: 'Products are carefully picked and packed from our partner brand warehouses, ensuring quality and authenticity.'
  },
  {
    icon: <CircleStackIcon className="h-8 w-8" />,
    title: 'Hub',
    description: 'Items are consolidated at our central hub for efficient sorting, tracking, and quality verification'
  },
  {
    icon: <Store className="h-8 w-8" />,
    title: 'Service Center',
    description: 'Packages are distributed to local centers for rapid last-mile delivery preparation'
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Customer Doorstep',
    description: 'Final delivery to your location with real-time tracking and delivery confirmation'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-[#013046]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold text-white mb-4">Seamless Delivery Journey</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track your package's progress through our advanced logistics network
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white hover:bg-[#1a1147] text-center p-8 rounded-xl hover:rounded-full border-2 border-[#013046] transition-all duration-500 ease-in-out"
            >
              <div className="flex justify-center items-center w-full">
              <div className="text-[#4CAF50] group-hover:text-white  mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              </div>
              <h3 className="text-xl font-semibold text-[#1a1147] text-center group-hover:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-900 group-hover:text-gray-100 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}