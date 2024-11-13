import React from 'react';
import { Shield, Clock, MapPin, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure Shipping',
    description: 'End-to-end protection for your valuable shipments with real-time tracking and insurance coverage.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Express Delivery',
    description: 'Same-day and next-day delivery options available across major cities worldwide.'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Global Reach',
    description: 'Extensive network covering 50+ countries with local expertise and global standards.'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Smart Analytics',
    description: 'Advanced tracking and reporting tools for complete visibility of your supply chain.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a1147] mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of logistics with our cutting-edge solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-[#4CAF50]/10 p-3 rounded-lg inline-block mb-4">
                <div className="text-[#4CAF50]">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-[#1a1147] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}