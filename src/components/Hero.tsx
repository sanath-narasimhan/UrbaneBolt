import React from 'react';
import { ArrowRight, Package } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import tmLogo from '/logo/Logo.png';
import Image from 'next/image';
import mapImage from '/logo/IndiaMap.png';  // Adjust path as needed

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
    <div id="home" className="relative min-h-screen bg-white bg-opacity-5 flex items-center flex-col">
      <div className="absolute inset-0 bg-white  opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          <div className="text-white">
            <div className="flex flex-col items-center justify-items-center mb-6">
              
            </div>
            <h1
              className="mb-6 text-4xl font-bold md:text-5xl max-w-2xl text-[#1a1147] mx-auto text-center"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Experts in Quick Commerce Logistics for <br className="max-lg:hidden " />
              <TypeAnimation
                sequence={[
                  'Personal Care Brands',
                  2000,
                  'Beauty Brands',
                  2000,
                  'Petcare Brands',
                  2000,
                  'Electronic Brands',
                  2000,
                  'Fashion Brands',
                  2000,
                  'Wellness Brands',
                  2000,
                  'Cold-Chains Brands',
                  2000,
                  'F&B Brands',
                  2000,
                  'D2C Brands',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block text-green-600"
              />
            </h1>

            <p className="text-lg mb-8 text-black mx-auto text-center">
              Urbanebolt, We deliver speed!
              <br />
              Launching same day delivery in Bengaluru & Hyderabad.
            </p>
            
            
          </div>
          {/* */} 
          <div className="hidden md:flex justify-end items-center">
            <img 
              src={mapImage}
              alt="Indian map"
              className="w-full max-w-[500px] h-auto rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div> 
          {/* Add the new image container */}
          <div className="md:hidden flex justify-center items-center mt-6">
            <img 
              src={mapImage}
              alt="Indian map"
              className="w-full max-w-[300px] h-auto rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}