import React from 'react';
import { Truck, Ship, Plane, Package } from 'lucide-react';

const services = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Ground Freight',
    description: 'Efficient road transportation with real-time tracking and nationwide coverage.'
  },
  {
    icon: <Ship className="h-8 w-8" />,
    title: 'Ocean Freight',
    description: 'Cost-effective sea freight solutions for international shipping needs.'
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: 'Air Freight',
    description: 'Express air cargo services for time-sensitive deliveries worldwide.'
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: 'Warehousing',
    description: 'State-of-the-art storage facilities with inventory management.'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a1147] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end logistics solutions tailored for modern businesses
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group hover:bg-[#1a1147] p-8 rounded-xl border-2 border-gray-100 transition-all duration-300"
            >
              <div className="text-[#4CAF50] group-hover:text-white mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1a1147] group-hover:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}