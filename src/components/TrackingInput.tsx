import React, { useState } from 'react';

import { Package, Truck, Plane } from 'lucide-react'; // Import icons

type TrackingType = 'shipment' | 'container' | 'order';

const TrackingInput: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingType, setTrackingType] = useState<TrackingType>('shipment');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with your actual tracking API endpoint
      const response = await fetch(`/api/tracking/${trackingType}/${trackingNumber}`);
      const data = await response.json();
      setTrackingResult(data);
    } catch (error) {
      console.error('Error fetching tracking info:', error);
      setTrackingResult({ error: 'Unable to fetch tracking information' });
    }
  };

  const trackingOptions = [
    { type: 'shipment', label: 'Shipment', icon: Package, placeholder: 'Enter shipment number' },
    { type: 'container', label: 'Container', icon: Truck, placeholder: 'Enter container number' },
    { type: 'order', label: 'Order', icon: Plane, placeholder: 'Enter order number' },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#f6851f] via-[#fdb714] to-[#fdb714] relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Track Your Shipment</h2>
        
        {/* Tracking Type Selector */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-3 gap-4 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
            {trackingOptions.map((option) => (
              <button
                key={option.type}
                onClick={() => setTrackingType(option.type as TrackingType)}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300
                           ${trackingType === option.type 
                             ? 'bg-[#45a049] text-white shadow-lg' 
                             : 'text-white/80 hover:bg-white/10'}`}
              >
                <option.icon size={20} />
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tracking Form */}
        <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10">
          <form onSubmit={handleTracking} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder={trackingOptions.find(opt => opt.type === trackingType)?.placeholder}
                className="w-full px-4 py-4 pl-12 border border-white/20 rounded-lg 
                         focus:outline-none focus:border-[#45a049] bg-white/90 
                         backdrop-blur-sm text-gray-800 text-lg"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                {React.createElement(trackingOptions.find(opt => opt.type === trackingType)?.icon || Package, { size: 20 })}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#45a049] text-white py-4 rounded-lg hover:bg-[#3d8a41] 
                       transition-colors font-medium shadow-lg text-lg"
            >
              Track {trackingOptions.find(opt => opt.type === trackingType)?.label}
            </button>
          </form>

          {/* Tracking Results */}
          {trackingResult && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-xl">
              {trackingResult.error ? (
                <p className="text-red-500 font-medium">{trackingResult.error}</p>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#1a1147] text-xl mb-4">
                    {trackingOptions.find(opt => opt.type === trackingType)?.label} Status:
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
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackingInput; 