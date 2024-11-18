import { 
  TruckIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  MapPinIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function Stats() {
  return (
    
    <section className="relative py-12 md:py-0 bg-[#013046] bg-opacity-75" style={{ minHeight: '50vh', height: 'auto', md: { height: '30vh' }}}>
      
      
     
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-full pt-16">
      
      

        <div className="flex items-center justify-center h-full">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-5">
            
            {/* Stat 1 */}
            <div className="text-center col-span-1" data-aos="zoom-y-out" data-aos-delay="150">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-2 md:p-3 mb-2 md:mb-3">
                  <TruckIcon className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">10L+</h3>
              <p className="text-gray-400 text-sm md:text-base">Shipments Delivered</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center col-span-1" data-aos="zoom-y-out" data-aos-delay="300">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-2 md:p-3 mb-2 md:mb-3">
                  <BuildingOffice2Icon className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">10</h3>
              <p className="text-gray-400 text-sm md:text-base">Hubs</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center col-span-1" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-2 md:p-3 mb-2 md:mb-3">
                  <HomeModernIcon className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">32</h3>
              <p className="text-gray-400 text-sm md:text-base">Service Centres</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center col-span-1" data-aos="zoom-y-out" data-aos-delay="600">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-2 md:p-3 mb-2 md:mb-3">
                  <MapPinIcon className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">150+</h3>
              <p className="text-gray-400 text-sm md:text-base">Pincodes</p>
            </div>

            {/* Stat 5 */}
            <div className="text-center col-span-2 lg:col-span-1" data-aos="zoom-y-out" data-aos-delay="750">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-2 md:p-3 mb-2 md:mb-3">
                  <UserGroupIcon className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">200+</h3>
              <p className="text-gray-400 text-sm md:text-base">Field Service Representatives</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
