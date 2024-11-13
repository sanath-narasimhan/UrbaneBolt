import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Team from './components/Team';
import Tracking from './components/Tracking';

import { Package, Truck, Plane } from 'lucide-react'; // Import icons

function App() {
  const [showContent, setShowContent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingType, setTrackingType] = useState<'shipment' | 'container' | 'order'>('shipment');

  const trackingOptions = [
    { type: 'shipment', label: 'Shipment', icon: Package },
    { type: 'container', label: 'Container', icon: Truck },
    { type: 'order', label: 'Order', icon: Plane },
  ];

  useEffect(() => {
    // Initial animations sequence
    setTimeout(() => setIsLoaded(true), 500);
    setTimeout(() => setShowArrow(true), 1500);

    const handleScroll = () => {
      // Show content after small scroll
      if (window.scrollY > 100) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }

      // Progress bar
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight / 2,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-200 z-[100]">
        <div 
          className="h-full bg-[#45a049] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500
                      ${showContent ? 'translate-y-0' : '-translate-y-full'}`}>
        <Navbar />
      </div>

      {/* Background Banner (stays fixed) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <img 
          src="logo\\LogoBanner.png" 
          alt="Background Logo"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Initial Banner */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 
                   transition-all duration-700 ease-in-out border-x-8 border-[#45a049]
                   ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ 
          opacity: showContent ? 0 : 1, 
          pointerEvents: showContent ? 'none' : 'auto',
          transform: showContent ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="logo\\LogoBanner.png" 
            alt="Company Logo"
            className={`w-full h-full object-cover transition-transform duration-1000
                       ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                       animate-float`}
          />
        </div>
      </div>

      {/* Scroll Arrow */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 
                    text-[#45a049] cursor-pointer z-[60] transition-all duration-500
                    hover:text-[#3d8a41] hover:scale-110
                    ${showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    ${showContent ? 'pointer-events-none' : 'animate-bounce'}`}
        onClick={scrollToContent}
      >
        <ChevronDown size={48} strokeWidth={2.5} />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 transition-all duration-700 
                      ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ 
          marginTop: showContent ? '0' : '100vh',
          background: 'transparent'
        }}
      >
        <div className="pt-16 space-y-32">
          <Hero />
          <div id="tracking-section" className="scroll-mt-20 relative z-100 bg-[#f6851f] p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#013046' }}>Track Your Shipment</h2>

            {/* Tracking Type Selector */}
            <div className="flex justify-center mb-4">
              {trackingOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setTrackingType(option.type as 'shipment' | 'container' | 'order')}
                  className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all duration-300
                              ${trackingType === option.type ? 'bg-[#F6851F] text-white' : 'bg-white text-[#]'}`}
                >
                  {React.createElement(option.icon, { size: 20 })}
                  <span>{option.label}</span>
                </button>
              ))}
            </div>

            {/* Tracking Number Input */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number"
                  className={`w-full px-4 py-3 border rounded-lg 
                              focus:outline-none focus:border-[#45a049] 
                              ${trackingType === 'shipment' ? 'border-[#FDB714]' : 
                                trackingType === 'container' ? 'border-[#FDB714]' : 
                                'border-[#FDB714]'}`}
                />
              </div>
            </div>
          </div>
          <div className="relative z-20">
            <Services />
          </div>
          <div className="relative z-20">
            <Features />
          </div>
          <div className="relative z-20">
            <Team />
          </div>
          <div id="contact-section" className="scroll-mt-20 relative z-20">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;