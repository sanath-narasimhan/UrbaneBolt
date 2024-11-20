import React, { useState, useRef, useEffect } from 'react';
import { Package, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import tmLogo from '/logo/UeB.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const services = [
    { title: 'Same Day Delivery', index: 0 },
    { title: 'Next Day Delivery', index: 1 },
    { title: 'Urban Cross Border', index: 2 },
    { title: 'Urban Air & Ocean Freight', index: 3 },
    { title: 'Urban Express Imports', index: 4 },
    { title: 'Urban Store & Ship', index: 5 }
  ];

  const handleServiceClick = (serviceIndex: number) => {
    setIsOpen(false); // Close mobile menu
    setShowServicesDropdown(false); // Close dropdown
    navigate('/services', { 
      state: { activeTab: serviceIndex },
      replace: true
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServicesDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollToContact = () => {
    navigate('/#contact'); // Navigate to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateHome = () => {
    navigate('/'); // Navigate to the home page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  };

  return (
    <nav className="w-full mx-auto my-2 bg-white text-white rounded-2xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex ">
            <div className="flex-shrink-0 flex left-0 gap-2">
              <Link to="/">
                <img src={tmLogo} alt="TM Logo" className="h-12 w-27" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={handleNavigateHome} className="text-[#007632] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium">Home</button>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => {setShowServicesDropdown(!showServicesDropdown);
                    console.log(`Mobile Services Dropdown: ${showServicesDropdown ? 'Opened' : 'Closed'}`);}
                  }
                  className="text-[#007632] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {showServicesDropdown && (
                  <div
                    className="absolute z-50 mt-2 w-60 bg-white rounded-md shadow-lg py-1"
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((service) => (
                        <button
                          key={service.index}
                          onClick={() => handleServiceClick(service.index)}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left transition-colors duration-150"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-[#007632] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <button onClick={handleScrollToContact} className="text-[#007632] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium">Contact Us</button>
              <Link to="/tracking" className="bg-[#4CAF50] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#007632]">Track shipment</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#007632] hover:text-[#4CAF50]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={handleNavigateHome}
              className="text-[#007632] hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </button>
            
            {/* Mobile Services Section */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowMobileServicesDropdown(!showMobileServicesDropdown);
                  console.log(`Mobile Services Dropdown: ${showMobileServicesDropdown ? 'Opened' : 'Closed'}`);
                }}
                className="w-full text-left text-[#007632] hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              >
                Services
                <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${showMobileServicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showMobileServicesDropdown && (
                <div className="pl-4 space-y-1 bg-white rounded-md">
                  {services.map((service) => (
                    <button
                      key={service.index}
                      onClick={() => {
                        console.log(`Mobile Service clicked: ${service.title}`);
                        handleServiceClick(service.index);
                      }}
                      className="w-full text-left text-[#007632] hover:text-[#4CAF50] block px-3 py-2 text-sm transition-colors duration-150"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="text-[#007632] hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <button 
              onClick={() => {handleScrollToContact; 
                setIsOpen(false);}}
              className="text-[#007632] hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}