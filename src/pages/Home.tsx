import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Features from '../components/Features';
import Contact from '../components/Contact';
import FeaturesPlanet from '../components/features-planet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { TruckIcon, CubeIcon, DevicePhoneMobileIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Package, Truck, Plane } from 'lucide-react'; // Import icons
import { ArrowRight } from 'lucide-react';

import { Link, useNavigate } from 'react-router-dom';

// Add this interface at the top of the file
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768; // Check if the device is mobile


function Home() {
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingType, setTrackingType] = useState<'shipment' | 'container' | 'order'>('shipment');
  const [activeTab, setActiveTab] = useState('shipment');
  const [trackingInput, setTrackingInput] = useState('');
  const navigate = useNavigate();

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
    { type: 'order', label: 'Order Number', icon: Plane, color: '#40AC49' },
  ];

  const tabConfig = {
    shipment: {
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-600',
      icon: TruckIcon, 
      label: 'AWB Number'
    },
    order: {
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500',
      icon: ShoppingBagIcon, 
      label: 'Order Number'
    }
  };

  const getPlaceholder = () => {
    switch(activeTab) {
      case 'shipment':
        return 'Enter AWB number';
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
      const scrollTop = window.scrollY; // Current scroll position
      const windowHeight = window.innerHeight; // Height of the viewport
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document
      const totalScrollableHeight = documentHeight - windowHeight; // Total scrollable height

      const progress = (scrollTop / totalScrollableHeight) * 100; // Calculate scroll progress as a percentage
      setScrollProgress(progress); // Update scroll progress state
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener on unmount

     
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight / 1.5,
      behavior: 'smooth'
    });
  };

  

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Check the initial hash on mount
    handleHashChange();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array to run only on mount

  // Function to get the border color based on the selected tracking type
  const getBorderColor = (type: 'shipment' | 'container' | 'order') => {
  const option = trackingOptions.find(option => option.type === type);
  return option ? option.color : '#F6851F'; // Default color if not found
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [

    {
      service: "Same Day Delivery",
      description: "On time, Every Time",
      image: "/Banner/Banner-02.jpg"
    },
    {
      service: "Next Day Delivery",
      description: "Tomrrow's delivery, Today's promise",
      image: "/Banner/Banner-03.jpg"
    },
    {
      service: "Urban Cross Border",
      description: "Shop the world, delivered to your door",
      image: "/Banner/Banner-01.jpg"
    },
    {
      service: "Urban Air and Ocean Freight",
      description: "Global reach, Local Expertise",
      image: "/Banner/Banner-05.jpg"
    },
    {
      service: "Urban Express Imports",
      description: "Global Sourcing, Local Delivery",
      image: "/Banner/Banner-04.jpg"
    },
    {
      service: "Urban Store & Ship",
      description: "A home for your cargo",
      image: "/Banner/Banner-06.jpg"
    },
    
    
    
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
      <div className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500`}>
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
      </div>

      {/* Background Banner (stays fixed)*/}
      <div className=" fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img 
          src="/logo/LogoBanner.jpg" 
          alt="Background Logo"
          className="w-full h-full object-cover opacity-45 md:object-center md:scale-150"
          style={{ objectPosition: 'center' }}
        />
        
      </div> 

      {/* Initial Banner */}
      <div 
        className={` top-0 left-0 w-full h-full bg-white z-50 
                    transition-all duration-10 ease-in-out
                    ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ 
         
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
            <div 
              className="absolute inset-0 transition-all duration-700 ease-in-out" 
              style={{ 
                backgroundImage: `url(${slides[currentSlide].image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: window.innerWidth < 640 ? '12% center' : 'center' 
              }}
            />

            {/* Navigation arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
              <button 
                onClick={handlePrevSlide} 
                className="bg-white bg-opacity-10 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 flex items-center justify-center"
              >
                <ArrowRight className="h-6 w-6 rotate-180" />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
              <button 
                onClick={handleNextSlide} 
                className="bg-white bg-opacity-10 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 flex items-center justify-center"
              >
                <ArrowRight className="h-6 w-6 " />
              </button>
            </div>

            {/*<div className="absolute top-24 md:top-42 left-0 right-0 p-4 text-white bg-white bg-opacity-25">
              <div className="flex flex-col items-center md:items-start md:pl-20 left-40 ">
                
                
                <img 
                  src="/logo/logoBB.png" // Replace with the actual path to your logo
                  alt="Logo"
                  className="w-64 h-auto mb-0 " // Adjust width as needed
                />
                
                
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-0 text-center md:text-left">
                  {slides[currentSlide].service}
                </h4>
                <p className="mb-4 md:mb-8 text-base md:text-lg max-w-full text-center md:text-left">
                  {slides[currentSlide].description}
                </p>
                
              </div>
            </div>*/}
          </div>

             {/* Shipment Tracker */}
            <div id="tracking" className="absolute bottom-14 md:bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] max-w-3xl bg-[#] p-2 md:p-4 rounded-lg z-10">
              {/* Header and Tabs */}
              <div className="mb-3 md:mb-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* Tabs */}
                  <div className="flex gap-1">
                    {['shipment', 'order'].map((tab) => {
                      const TabIcon = tabConfig[tab].icon;
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-2 md:px-3 py-1 md:py-1.5 rounded-lg font-medium capitalize transition-colors duration-200 flex items-center text-xs md:text-base ${
                            activeTab === tab
                              ? `bg-[#40AC49] text-white`
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          <TabIcon className="h-3 w-3 md:h-4 md:w-4 hidden md:inline" />
                          <span className="ml-1">{tabConfig[tab].label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Search Input and Button */}
                  <div className="flex flex-1 gap-2">
                    <input
                      type="text"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      placeholder={getPlaceholder()}
                      className="flex-1 min-w-0 px-2 md:px-4 py-1 md:py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all duration-200 text-sm md:text-base"
                    />
                    <button 
                      onClick={() => {
                        if (trackingInput.trim()) {
                          navigate(`/trackShip?awb=${encodeURIComponent(trackingInput.trim())}`);
                        }
                      }}
                      className="px-2 md:px-4 py-1 md:py-1.5 
                                bg-[#40AC49] text-white rounded-lg 
                                hover:bg-[#007632] transition-colors duration-200
                                text-sm md:text-base whitespace-nowrap
                                flex items-center justify-center"
                    >
                      Track shipment
                    </button>
                  </div>
                </div>
              </div>
            </div>




          
        </div>
      
        
      </div>

      {/* Main Content */}
      <div className={`relative z-10 transition-all opacity-100 translate-y-0 `}
        style={{ 
          marginTop:  '1vh',
          background: 'transparent'
        }}
      >
        <div className="pt-10 space-y-12 ">
          <div className="relative z-20">
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-white/50" />
            <Hero />
          </div>

          <div className="relative z-20 bg-white bg-opacity-10 ">
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

          {/* Our team 
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
          </div>*/}

          <div className="relative z-20">
            <Stats />
          </div>
          
          <div id="contact" className="scroll-mt-20 relative z-20">
            
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;