import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { sampleTrackingData } from '../data/sampleTrackingData';

interface ShipmentData {
  awb: string;
  order_number: string;
  origin: string;
  destination: string;
  status_code?: {
    name: string;
  };
  consignee: {
    name: string;
  };
  edd: string;
  scans?: Array<{
    id: string;
    scan_date: string;
    scan_location: string;
    status_code?: {
      name: string;
    };
  }>;
}

const TrackingPageWithData = () => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(true);
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [trackingInput, setTrackingInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams(location.search);
      const awb = queryParams.get('awb');

      if (awb) {
        try {
          const response = await axios.get(
            `http://erpapi.urbanbolt.in/api/v1/services/track/?awb=${awb}`,
            {
              headers: {
                'Authorization': 'Bearer dFjrZIVbapXpiX6CAGcfRhvqBkCRTO',
                'Content-Type': 'application/json',
              }
            }
          );

          console.log('API response', response);

          if (response.data.status === 'Success') {
            setShipmentData(response.data.data[0]);
          } else {
            toast.error(`API Error: ${response.data.status}`);
            setShipmentData(sampleTrackingData.data[0]);
          }
        } catch (error) {
          toast.error(`Error fetching tracking data: ${error.message}`);
          setShipmentData(sampleTrackingData.data[0]);
        }
      } else {
        setShipmentData(sampleTrackingData.data[0]);
      }
    };

    fetchData();
  }, [location.search]);

  useEffect(() => {
    console.log('Updated shipment data:', shipmentData);
  }, [shipmentData]);

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  const isGreen = (status: string) => {
    if (!shipmentData?.status_code?.name) return false;
    const statuses = ['Shipped', 'Processing', 'Intransit', 'Out For Delivery', 'Delivered'];
    return statuses.indexOf(status) <= statuses.indexOf(shipmentData.status_code.name);
  };

  const handleTrack = () => {
    const awbToTrack = trackingInput.trim();
    if (awbToTrack) {
      navigate(`/trackShip?awb=${encodeURIComponent(awbToTrack)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 ">
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative  h-[35vh] flex items-center justify-center pb-6 bg-[#007632]">
        <div className="absolute inset-0 z-0">
          <img
            src="/carousel/sdd.jpg"
            alt="Services Background"
            className="w-full h-full object-cover brightness-50 "
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center opacity-75 z-10">
          Track Your Shipment
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 mt-4 max-w-4xl">
        {/* Tracking Input Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {shipmentData ? (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                placeholder={shipmentData.awb}
                className="border border-gray-300 p-3 rounded w-full md:w-3/4 text-gray-800 focus:ring-2 focus:ring-[#007632] focus:outline-none"
              />
              <button 
                onClick={handleTrack}
                className="bg-[#007632] text-white px-6 py-3 rounded w-full md:w-auto hover:bg-[#4CAF50] transition"
              >
                Track Shipment
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                placeholder="Type AWB/ Order Number Here..."
                className="border border-gray-300 p-3 rounded w-full md:w-3/4 text-gray-800 focus:ring-2 focus:ring-[#007632] focus:outline-none"
              />
              <button 
                onClick={handleTrack}
                className="bg-[#007632] text-white px-6 py-3 rounded w-full md:w-auto hover:bg-[#4CAF50] transition"
              >
                Track Shipment
              </button>
            </div>
          )}
        </div>
        
        {/* Shipment Details Section */}
        {shipmentData ? (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">AWB Number:</span>
                  <span className="ml-2 font-semibold">{shipmentData.awb}</span>
                </div>
                <div>
                  <span className="text-gray-600">Origin:</span>
                  <span className="ml-2">{shipmentData.origin}</span>
                </div>
                <div>
                  <span className="text-gray-600">Destination:</span>
                  <span className="ml-2">{shipmentData.destination}</span>
                </div>
                <div>
                  <span className="text-gray-600">Status:</span>
                  <span className="ml-2 text-red-500 font-semibold">
                    {shipmentData?.status_code?.name || 'Unknown'}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Order Number:</span>
                  <span className="ml-2 font-semibold">{shipmentData.order_number}</span>
                </div>
                <div>
                  <span className="text-gray-600">Consignee Name:</span>
                  <span className="ml-2">{shipmentData.consignee.name}</span>
                </div>
                <div>
                  <span className="text-gray-600">EDD:</span>
                  <span className="ml-2">{new Date(shipmentData.edd).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <p className="text-gray-600">Loading shipment data...</p>
          </div>
        )}

        
        {/* Tracking Status Section */}
        {shipmentData ? (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* Shipped Status */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                shipmentData?.status_code?.name && isGreen('Shipped') ? 'bg-[#007632]' : 'bg-gray-400'
              }`}>
                {/* SVG for Shipped */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <span className="text-sm mt-2 text-center">Shipped</span>
            </div>
            <div className={`line ${
              shipmentData?.status_code?.name && isGreen('Shipped') ? 'bg-[#007632]' : 'bg-gray-400'
            }`} />

            {/* Processing Status */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                shipmentData?.status_code?.name && isGreen('Processing') ? 'bg-[#007632]' : 'bg-gray-400'
              }`}>
                {/* SVG for Processing */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-sm mt-2 text-center">Processing</span>
            </div>
            <div className={`line ${
              shipmentData?.status_code?.name && isGreen('Processing') ? 'bg-[#007632]' : 'bg-gray-400'
            }`} />

            {/* Intransit Status */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                shipmentData?.status_code?.name && isGreen('Intransit') ? 'bg-[#007632]' : 'bg-gray-400'
              }`}>
                {/* SVG for Intransit */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="text-sm mt-2 text-center">Intransit</span>
            </div>
            <div className={`line ${
              shipmentData?.status_code?.name && isGreen('Intransit') ? 'bg-[#007632]' : 'bg-gray-400'
            }`} />

            {/* Out For Delivery Status */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                shipmentData?.status_code?.name && isGreen('Out For Delivery') ? 'bg-[#007632]' : 'bg-gray-400'
              }`}>
                {/* SVG for Out For Delivery */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <span className="text-sm mt-2 text-center">Out For Delivery</span>
            </div>
            <div className={`line ${
              shipmentData?.status_code?.name && isGreen('Out For Delivery') ? 'bg-[#007632]' : 'bg-gray-400'
            }`} />

            {/* Delivered Status */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isGreen('Delivered') ? 'bg-[#007632]' : 'bg-gray-400'}`}>
                {/* SVG for Delivered */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm mt-2 text-center">Delivered</span>
            </div>
          </div>
        </div>
        ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <p className="text-gray-600">Loading shipment status...</p>
            </div>
          )}

        {/* Travel History Section */}
        {shipmentData && shipmentData.scans ? (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Travel History</h2>
              <button 
                onClick={toggleHistory}
                className="text-[#007632] hover:underline flex items-center gap-1"
              >
                {isHistoryVisible ? 'Hide History' : 'Show History'}
              </button>
            </div>
            
            {/* Animated container for the table */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isHistoryVisible ? 'max-h-96' : 'max-h-0'}`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Scan Date</th>
                      <th className="text-left py-2 px-4">Status</th>
                      <th className="text-left py-2 px-4">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {shipmentData.scans.map((entry, index) => {
                      const isTopRecord = index === 0;
                      const isFailed = entry?.status_code?.name?.toLowerCase().includes('fail');
                      const statusColor = isTopRecord 
                        ? (isFailed ? 'text-orange-500' : 'text-green-500')
                        : (entry?.status_code?.name === 'Delivered' ? 'text-green-500' : 'text-gray-600');
                      const dotColor = isTopRecord 
                        ? (isFailed ? 'bg-orange-500' : 'bg-green-500')
                        : (entry?.status_code?.name === 'Delivered' ? 'bg-green-500' : 'bg-gray-400');

                      return (
                        <tr key={entry.id} className={`relative ${index < shipmentData.scans.length - 1 ? 'border-b' : ''}`}>
                          <td className="py-3 px-4">{new Date(entry.scan_date).toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <div className={`flex items-center ${statusColor}`}>
                              <div className={`w-3 h-3 rounded-full mr-2 ${dotColor}`}></div>
                              {entry?.status_code?.name || 'Unknown'}
                            </div>
                          </td>
                          <td className="py-3 px-4">{entry.scan_location}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <p className="text-gray-600">Loading travel history...</p>
          </div>
        )}

      </div>
      <div id="contact" className="scroll-mt-20 relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default TrackingPageWithData;