import React from 'react';
import { ArrowRight, Package } from 'lucide-react';
import tmLogo from '/logo/Logo.png';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // Approximate navbar height
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-br from-[#1a1147] via-[#1a1147] to-[#4CAF50] flex items-center">
      <div className="absolute inset-0 bg-[#1a1147] opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
            <img src={tmLogo} alt="TM Logo" className="h-12 w-75" /> {/*<Package className="h-10 w-10 text-[#4CAF50]" />*/}
            {/*<span className="text-3xl font-bold">urbane<span className="text-[#4CAF50]">bolt</span></span>*/}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionizing
              <span className="text-[#4CAF50] block mt-2">Global Logistics</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Experience seamless shipping solutions with cutting-edge technology and unmatched reliability. Your trusted partner in modern logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact-section"
                onClick={(e) => scrollToSection(e, 'contact-section')}
                className="bg-[#4CAF50] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#45a049] transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#tracking-section"
                onClick={(e) => scrollToSection(e, 'tracking-section')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#1a1147] transition-colors text-center"
              >
                Track Shipment
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
              alt="Modern Logistics Hub"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}