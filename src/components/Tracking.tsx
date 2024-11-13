import React, { useState } from 'react';
import { Package } from 'lucide-react';

const Tracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an API response for testing
    setTrackingResult({
      status: 'In Transit',
      location: 'New York, NY',
      lastUpdate: new Date().toLocaleDateString()
    });
  };

  return (
    <section className="text-black bg-[#1a1147] relative">
    
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Track Your Shipment</h2>
        
        {/* Tracking Form */}
        <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10">
          <form onSubmit={handleTracking} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="w-full px-4 py-4 pl-12 border border-white/20 rounded-lg 
                         focus:outline-none focus:border-[#45a049] bg-white/90 
                         backdrop-blur-sm text-gray-800 text-lg"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Package size={20} />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#45a049] text-white py-4 rounded-lg hover:bg-[#3d8a41] 
                       transition-colors font-medium shadow-lg text-lg"
            >
              Track Shipment
            </button>
          </form>

          {/* Tracking Results */}
          {trackingResult && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-xl">
              <div className="space-y-4">
                <h3 className="font-semibold text-[#1a1147] text-xl mb-4">
                  Tracking Status:
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">Status:</span>
                    <span>{trackingResult.status}</span>
                  </p>
                  <p className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">Location:</span>
                    <span>{trackingResult.location}</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-medium">Updated:</span>
                    <span>{trackingResult.lastUpdate}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tracking;