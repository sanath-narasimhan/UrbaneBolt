import Image from 'next/image';
import { 
  BuildingLibraryIcon, // Warehouse
  CircleStackIcon,     // Hub
  BuildingStorefrontIcon, // Service Center
  HomeModernIcon,      // Home
  TruckIcon        // Update this import
} from '@heroicons/react/24/solid';
import { keyframes } from '@emotion/react';

const processSteps = [
  {
    title: 'Brand Warehouse',
    icon: BuildingLibraryIcon,
    description: 'Collection from brand warehouse',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-500',
    bgGradient: 'from-purple-50 to-purple-100',
  },
  {
    title: 'Mother Hub',
    icon: CircleStackIcon,
    description: 'Centralized sorting and processing',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-500',
    bgGradient: 'from-blue-50 to-blue-100',
  },
  {
    title: 'Service Center',
    icon: BuildingStorefrontIcon,
    description: 'Local distribution center',
    iconColor: 'text-green-500',
    borderColor: 'border-green-500',
    bgGradient: 'from-green-50 to-green-100',
  },
  {
    title: 'Customer Doorstep',
    icon: HomeModernIcon,
    description: 'Final delivery destination',
    iconColor: 'text-orange-500',
    borderColor: 'border-orange-500',
    bgGradient: 'from-orange-50 to-orange-100',
  },
];

export default function Process() {
  return (
    <section className="relative bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 className="h2 mb-4 font-bold text-3xl">Delivery Process</h2>
          <p className="text-xl text-gray-600">Our streamlined logistics journey from warehouse to your doorstep</p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-orange-200 transform -translate-y-1/2 hidden md:block"></div>

          {/* Process steps container */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Rider between steps (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10">
                    <div className="relative group">
                      <TruckIcon 
                        className="
                          w-8 h-8 
                          text-indigo-600 
                          transform scale-x-100 
                          animate-[moveLeftRight_2s_ease-in-out_infinite]
                          hover:text-blue-500
                          transition-colors duration-300
                        " 
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Delivery in Progress
                      </div>
                    </div>
                  </div>
                )}

                {/* Step circle and content */}
                <div className="flex flex-col items-center relative z-20">
                  <div className={`bg-gradient-to-b ${step.bgGradient} p-6 rounded-xl shadow-lg border-2 ${step.borderColor} mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                    <step.icon className={`w-14 h-14 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
