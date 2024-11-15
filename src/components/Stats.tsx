import { 
  TruckIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  MapPinIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function Stats() {
  return (
    <section className="relative" style={{ height: '30vh', backgroundColor: '#013046' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-full">
        <div className="flex items-center justify-center h-full">
          {/* Stats grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            
            {/* Stat 1 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="150">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-3 mb-3">
                  <TruckIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">10L+</h3>
              <p className="text-gray-400">Shipments Delivered</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-3 mb-3">
                  <BuildingOffice2Icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">10</h3>
              <p className="text-gray-400">Hubs</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-3 mb-3">
                  <HomeModernIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">32</h3>
              <p className="text-gray-400">Service Centres</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="600">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-3 mb-3">
                  <MapPinIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">150+</h3>
              <p className="text-gray-400">Pincodes</p>
            </div>

            {/* Stat 5 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="750">
              <div className="flex items-center justify-center">
                <div className="rounded-full border-2 border-white p-3 mb-3">
                  <UserGroupIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">200+</h3>
              <p className="text-gray-400">Field Service Representatives</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
