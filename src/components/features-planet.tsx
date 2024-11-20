

import { GlobeAsiaAustraliaIcon, ClockIcon, TruckIcon, PaperAirplaneIcon, BuildingOffice2Icon, ArrowPathIcon } from '@heroicons/react/24/solid';

export default function FeaturesPlanet() {
  return (
    <section className="relative z-[9999] bg-white bg-opacity-75 py-12 pt-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                <span style={{ color: '#150958' }}>urban</span>
                <span style={{ color: '#40AC49' }}>ebolt</span>
                <span className="ml-2">offers</span>
            </h2>
          </div>

          {/* Scrolling boxes container */}
          <div className="relative w-all overflow-hidden" data-aos="zoom-y-out">
            {/* Track */}
            <div className="flex w-full gap-6 md:gap-8 lg:gap-12 animate-scroll pb-4">
              {/* First set of boxes */}
              <div className="flex gap-12 gap-6 md:gap-8 lg:gap-12 flex-nowrap">
                {/* Box 1 - Ground Freight */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <TruckIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Same Day Delivery</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Reliable same-day delivery in Bangalore and Hyderabad for gifts, apparel, and more—ensuring prompt service and customer satisfaction.</p>
                </div>

                {/* Box 2 - Ocean Freight */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <ClockIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Next Day Delivery</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Swift next-day delivery across major Indian cities, ideal for meeting deadlines and enhancing convenience.</p>
                </div>

                {/* Box 3 - Air Freight */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <GlobeAsiaAustraliaIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Cross-Border</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Expand globally with efficient cross-border shipping, localized support, and enhanced market reach for your business.</p>
                </div>

                {/* Box 4 - Warehousing */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <PaperAirplaneIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Air & Ocean Freight</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Comprehensive freight forwarding services with reliable carriers and customs expertise for cost-effective international shipping.</p>
                </div>

                {/* Box 5 - Custom Clearance */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowPathIcon className="w-6 h-6  group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Express Import</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Fast and secure small-package import services with competitive rates and real-time tracking for seamless logistics.</p>
                </div>

                {/* Box 6 - Supply Chain */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <BuildingOffice2Icon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Store & Ship</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Secure storage and shipping solutions for small inventories, simplifying logistics for growing businesses.</p>
                </div>
              </div>
              {/* Second set of boxes */}
              <div className="flex gap-12 gap-6 md:gap-8 lg:gap-12 flex-nowrap">
                {/* Box 1 - Ground Freight */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <TruckIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Same Day Delivery</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Reliable same-day delivery in Bangalore and Hyderabad for gifts, apparel, and more—ensuring prompt service and customer satisfaction.</p>
                </div>

                {/* Box 2 - Ocean Freight */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <ClockIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Next Day Delivery</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Swift next-day delivery across major Indian cities, ideal for meeting deadlines and enhancing convenience.</p>
                </div>

                {/* Box 3 - Air Freight */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <GlobeAsiaAustraliaIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Cross-Border</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Expand globally with efficient cross-border shipping, localized support, and enhanced market reach for your business.</p>
                </div>

                {/* Box 4 - Warehousing */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <PaperAirplaneIcon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Air & Ocean Freight</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Comprehensive freight forwarding services with reliable carriers and customs expertise for cost-effective international shipping.</p>
                </div>

                {/* Box 5 - Custom Clearance */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowPathIcon className="w-6 h-6  group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Express Import</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Fast and secure small-package import services with competitive rates and real-time tracking for seamless logistics.</p>
                </div>

                {/* Box 6 - Supply Chain */}
                <div className="min-w-[250px] hover:bg-white bg-[#1a1147] border-[#1a1147] rounded-lg p-4 shadow-lg border hover:border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <BuildingOffice2Icon className="w-6 h-6 group-hover:text-green-600 text-white" />
                    <h4 className="text-lg font-bold group-hover:text-gray-900 text-white">Urban Store & Ship</h4>
                  </div>
                  <p className="text-sm group-hover:text-gray-600 text-white">Secure storage and shipping solutions for small inventories, simplifying logistics for growing businesses.</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
