import React from 'react';
import { Package, Users, Globe, Truck } from 'lucide-react';

const stats = [
  { icon: <Package />, value: '10M+', label: 'Packages Delivered' },
  { icon: <Users />, value: '5000+', label: 'Happy Clients' },
  { icon: <Globe />, value: '50+', label: 'Countries Served' },
  { icon: <Truck />, value: '1000+', label: 'Delivery Fleet' }
];

export default function Stats() {
  return (
    <div className="relative z-20 bg-[#1a1147] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[#4CAF50] mb-2 flex justify-center">
                {React.cloneElement(stat.icon, { className: 'h-8 w-8' })}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}