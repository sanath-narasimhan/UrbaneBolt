import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import { TruckIcon, RocketLaunchIcon, PaperAirplaneIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';
import { DocumentCheckIcon, ChartBarIcon } from '@heroicons/react/24/solid';

export default function FeaturesPlanet() {
  return (
    <section className="relative z-[9999] bg-yellow-500 border-4 border-blue-500 min-h-[100px] w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h1 className="text-4xl font-bold text-black">Features Planet Section</h1>
        <div className="py-8 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 md:text-4xl">
              End-to-end logistics solutions tailored for modern businesses
            </h2>
          </div>

          {/* Scrolling boxes container */}
          <div className="relative w-full overflow-hidden" data-aos="zoom-y-out">
            {/* Track */}
            <div className="flex w-[200%] animate-scroll">
              {/* First set of boxes */}
              <div className="flex w-1/2 gap-6">
                {/* Box 1 - Ground Freight */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <TruckIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Ground Freight</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Efficient road transportation with real-time tracking and nationwide coverage.</p>
                </div>

                {/* Box 2 - Ocean Freight */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <RocketLaunchIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Ocean Freight</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Cost-effective sea freight solutions for international shipping needs.</p>
                </div>

                {/* Box 3 - Air Freight */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <PaperAirplaneIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Air Freight</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Express air cargo services for time-sensitive deliveries worldwide.</p>
                </div>

                {/* Box 4 - Warehousing */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <BuildingOffice2Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Warehousing</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">State-of-the-art storage facilities with inventory management.</p>
                </div>

                {/* Box 5 - Custom Clearance */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <DocumentCheckIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Custom Clearance</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Seamless customs documentation and clearance services.</p>
                </div>

                {/* Box 6 - Supply Chain */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <ChartBarIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Supply Chain</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">End-to-end supply chain optimization and management.</p>
                </div>
              </div>

              {/* Second set of boxes (duplicate) */}
              <div className="flex w-1/2 gap-6">
                {/* Box 1 - Ground Freight (duplicate) */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <TruckIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Ground Freight</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Efficient road transportation with real-time tracking and nationwide coverage.</p>
                </div>

                {/* Box 2 - Ocean Freight (duplicate) */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <RocketLaunchIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Ocean Freight</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Cost-effective sea freight solutions for international shipping needs.</p>
                </div>

                {/* Box 3 - Air Freight (duplicate) */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <PaperAirplaneIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Air Freight</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Express air cargo services for time-sensitive deliveries worldwide.</p>
                </div>

                {/* Box 4 - Warehousing (duplicate) */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <BuildingOffice2Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Warehousing</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">State-of-the-art storage facilities with inventory management.</p>
                </div>

                {/* Box 5 - Custom Clearance (duplicate) */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <DocumentCheckIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Custom Clearance</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">Seamless customs documentation and clearance services.</p>
                </div>

                {/* Box 6 - Supply Chain (duplicate) */}
                <div className="min-w-[250px] bg-white hover:bg-[#1a1147] hover:border-[#1a1147] rounded-lg p-4 shadow-lg border border-gray-200 transition-colors duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <ChartBarIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-white">Supply Chain</h4>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white">End-to-end supply chain optimization and management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
