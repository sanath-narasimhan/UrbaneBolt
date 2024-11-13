import React from 'react';
import { Package, Menu, X } from 'lucide-react';
import tmLogo from '/logo/UeB.png';
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-[#1a1147] bg-opacity-95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-23">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
            <img src={tmLogo} alt="TM Logo" className="h-8 w-8" /> {/*<Package className="h-8 w-8 text-[#4CAF50]" />*/}
              <span className="text-2xl font-bold">urbane<span className="text-[#4CAF50]">bolt</span></span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#services" className="hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#about" className="hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="bg-[#4CAF50] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#45a049]">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#4CAF50]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#about" className="hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="bg-[#4CAF50] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#45a049]">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}