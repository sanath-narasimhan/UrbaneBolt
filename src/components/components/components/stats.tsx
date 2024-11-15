import { 
  CubeIcon, 
  UserGroupIcon, 
  GlobeAmericasIcon, 
  TruckIcon 
} from '@heroicons/react/24/outline';

export default function Stats() {
  return (
    <section className="relative bg-gray-900" style={{ height: '30vh' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-full">
        <div className="flex items-center justify-center h-full">
          {/* Stats grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Stat 1 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="150">
              <div className="flex items-center justify-center">
                <CubeIcon className="h-12 w-12 text-blue-500 mb-3" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">10M+</h3>
              <p className="text-gray-400">Packages Delivered</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div className="flex items-center justify-center">
                <UserGroupIcon className="h-12 w-12 text-blue-500 mb-3" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">5000+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex items-center justify-center">
                <GlobeAmericasIcon className="h-12 w-12 text-blue-500 mb-3" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">50+</h3>
              <p className="text-gray-400">Countries Served</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center" data-aos="zoom-y-out" data-aos-delay="600">
              <div className="flex items-center justify-center">
                <TruckIcon className="h-12 w-12 text-blue-500 mb-3" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">1000+</h3>
              <p className="text-gray-400">Delivery Fleet</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
