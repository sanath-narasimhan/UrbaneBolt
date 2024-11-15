import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
//import Team from './components/Team';
import Tracking from './components/Tracking';
import FeaturesPlanet from './components/features-planet';
import { TruckIcon, CubeIcon, DevicePhoneMobileIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Package, Truck, Plane } from 'lucide-react'; // Import icons
import { ArrowRight } from 'lucide-react';

import Image from "next/image";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingType, setTrackingType] = useState<'shipment' | 'container' | 'order'>('shipment');
  const [activeTab, setActiveTab] = useState('shipment');

  const NUMBER_OF_COLUMNS = 12;
  const columnStyles = {
    position: 'absolute' as const,
    inset: 0,
    display: 'grid',
    gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, 1fr)`,
    width: '100%',
    height: '100%',
  };

  const teamMembers: TeamMember[] = [
    {
      name: "",
      role: "Founder & CEO",
      image: ""
    },
    {
      name: "",
      role: "Director",
      image: ""
    },{
      name: "",
      role: "Director",
      image: ""
    },{
      name: "",
      role: "Director",
      image: ""
    },
  ];

  const trackingOptions = [
    { type: 'shipment', label: 'AWB Number', icon: Package, color: '#F6851F' },
    { type: 'mobile', label: 'Mobile Number', icon: Truck, color: '#1F9EBC' },
    { type: 'order', label: 'Order Number', icon: Plane, color: '#40AC49' },
  ];

  const tabConfig = {
    shipment: {
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-400',
      icon: TruckIcon, 
      label: 'AWB Number'
    },
    mobile: {
      color: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-300',
      icon: DevicePhoneMobileIcon, 
      label: 'Mobile Number'
    },
    order: {
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500',
      icon: ShoppingBagIcon, 
      label: 'Order Number'
    }
  };

    // Add this function to calculate the transform for each column
    const getColumnTransform = (index: number) => {
      return {
        transform: `translateY(${currentSlide * -100}%)`,
        transitionDelay: `${index * 50}ms`,
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: `${NUMBER_OF_COLUMNS * 100}% 100%`,
        backgroundPosition: `${-100 * index}% center`,
      };
    };

  const getPlaceholder = () => {
    switch(activeTab) {
      case 'shipment':
        return 'Enter AWB number';
      case 'mobile':
        return 'Enter mobile number';
      case 'order':
        return 'Enter order number';
      default:
        return 'Enter tracking number';
    }
  };

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
      top: window.innerHeight / 1.5,
      behavior: 'smooth'
    });
  };

  // Function to get the border color based on the selected tracking type
  const getBorderColor = (type: 'shipment' | 'container' | 'order') => {
  const option = trackingOptions.find(option => option.type === type);
  return option ? option.color : '#F6851F'; // Default color if not found
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [

    {
      title: "urbanebolt offers",
      service: "Same Day Delivery",
      description: "On time, Every Time",
      image: "/carousel/sdd.jpg"
    },
    {
      title: "urbanebolt offers",
      service: "Next Day Delivery",
      description: "Tomrrow's delivery, Today's promise",
      image: "/carousel/ndd.jpg"
    },
    {
      title: "urbanebolt offers",
      service: "Urban Cross Border",
      description: "Shop the world, delivered to your door",
      image: "/carousel/cargoPlane.jpg"
    },
    {
      title: "urbanebolt offers",
      service: "Urban Air and Ocean Freight",
      description: "Global reach, Local Expertise",
      image: "/carousel/ship.jpg"
    },
    {
      title: "urbanebolt offers",
      service: "Urban Express Imports",
      description: "Global Sourcing, Local Delivery",
      image: "/carousel/fly.jpg"
    },
    {
      title: "urbanebolt offers",
      service: "Urban Storage",
      description: "A home for your cargo",
      image: "/carousel/warehouse.jpg"
    },
    
    
    
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
      </div>

      {/* Background Banner (stays fixed) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <img 
          src="logo\\Logo.png" 
          alt="Background Logo"
          className="w-full h-full object-cover opacity-45"
        />
        
      </div>

      {/* Initial Banner */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 
                    transition-all duration-700 ease-in-out
                    ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ 
          opacity: showContent ? 0 : 1, 
          pointerEvents: showContent ? 'none' : 'auto',
          transform: showContent ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/*<img 
            src="logo\\Banner.png" 
            alt="Company Logo"
            className={`w-full h-full object-cover transition-transform duration-1000
                       ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                       `}
          />*/}

          {/* Carousel Section */}
          <div className="relative w-full h-screen overflow-hidden">
            {/*<div 
              className="absolute inset-0 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] " 
              style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />*/}

          <div style={columnStyles}>
              {[...Array(NUMBER_OF_COLUMNS)].map((_, index) => (
                <div
                  key={index}
                  className="h-full overflow-hidden"
                >
                  <div
                    className="h-full transition-all duration-700 ease-in-out"
                    style={getColumnTransform(index)}
                  >
                    {slides.map((slide, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="h-full"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          backgroundSize: `${NUMBER_OF_COLUMNS * 100}% 100%`,
                          backgroundPosition: `${-100 * index}% center`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>


            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button 
                onClick={handlePrevSlide} 
                className="bg-white bg-opacity-10 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 flex items-center justify-center"
              >
                <ArrowRight className="h-6 w-6 rotate-180" /> {/* Left Arrow */}
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button 
                onClick={handleNextSlide} 
                className="bg-white bg-opacity-10 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 flex items-center justify-center"
              >
                <ArrowRight className="h-6 w-6 " /> {/* Right Arrow */}
              </button>
            </div>

            <div className="absolute top-20 left-0 right-0 p-4 text-white bg-white bg-opacity-10">
              <h2 className="text-8xl font-bold">
                <span style={{ color: '#150958' }}>urban</span>
                <span style={{ color: '#40AC49' }}>ebolt</span>
                <span className="ml-2 text-white">offers</span>
              </h2>
              <h4 className="text-4xl font-semibold md:text-5xl mb-2">
                {slides[currentSlide].service}
              </h4>
              <p className="mb-8 text-lg max-w-full">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

             {/* Shipment Tracker */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[80%] max-w-3xl bg-[#] p-4 rounded-lg z-10">
              {/* Header and Tabs in one row */}
              <div className="flex justify-between items-center mb-4">
                
                <div className="flex space-x-1">
                  {['shipment', 'mobile', 'order'].map((tab) => {
                    const TabIcon = tabConfig[tab].icon;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1.5 rounded-lg font-medium capitalize transition-colors duration-200 flex items-center space-x-1 ${
                          activeTab === tab
                            ? `${tabConfig[tab].color} text-white`
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <TabIcon className="h-4 w-4" />
                        <span>{tabConfig[tab].label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={getPlaceholder()}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all duration-200"
                />
                <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 ${tabConfig[activeTab].color} text-white rounded-lg ${tabConfig[activeTab].hoverColor} transition-colors duration-200`}>
                  Track Shipment 
                </button>
              </div>
            </div>




          
        </div>
      
        
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
          <div className="relative z-20">
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-white/50" />
            <Hero />
          </div>

          <div className="relative z-[9999] bg-white">
            <div className="visible">
              <FeaturesPlanet />
            </div>
          </div>

          <div className="relative z-20">
          
            <Services />
          </div>
          <div className="relative z-20">
            <Features />
          </div>
          {/* Our team */}
           <div className="relative z-20">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-12"> Team <span style={{ color: '#150958' }}>urban</span>
              <span style={{ color: '#40AC49' }}>ebolt</span> </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className=" group bg-white hover:bg-[#150958] rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold ">{member.name}</h3>
                      <p className="text-gray-600 group-hover:text-white text-center">{member.role}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div> 
          </div>
          
          <div id="contact-section" className="scroll-mt-20 relative z-20">
            <Stats />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;