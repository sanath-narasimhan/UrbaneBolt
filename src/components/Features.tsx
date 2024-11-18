import React from 'react';
import { Shield, Clock, MapPin, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure Shipping',
    description: 'End-to-end protection for your valuable shipments with real-time tracking.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Express Delivery',
    description: 'Same-day and next-day delivery options available across major cities.'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Expansive Reach',
    description: 'Extensive network covering 150+ pincodes with local expertise and exceptional standards.'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Smart Analytics',
    description: 'Advanced tracking and reporting tools for complete visibility of your supply chain.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-white bg-opacity-85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white bg-opacity-20">
          <h2 className="text-4xl font-bold text-[#1a1147] mb-4 ">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of logistics with our cutting-edge solutions
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:w-1/2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-[#150958] hover:bg-white  p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transition-all duration-300"
              >
                <div className="bg-white/10 p-3 rounded-lg inline-block mb-4">
                  <div className="text-[#4CAF50] group-hover:text-[#150958]">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#150958]  mb-2">{feature.title}</h3>
                <p className="text-gray-100 group-hover:text-[#150958] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* DriveBike GIF */}
          <div className="lg:w-1/2  flex justify-center">
            <img 
              src="/driveBike.gif" 
              alt="Delivery Animation" 
              className="w-full h-[375px] max-w-md rounded-xl transform scale-175 transition-transform duration-300 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}