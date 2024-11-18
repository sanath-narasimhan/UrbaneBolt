import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing icons
import { SiX } from 'react-icons/si'; // Importing the X icon

const services = [
  { title: 'Same Day Delivery', value: 'same_day_delivery' },
  { title: 'Next Day Delivery', value: 'next_day_delivery' },
  { title: 'Urban Cross Border', value: 'cross_border' },
  { title: 'Urban Air & Ocean Freight', value: 'air_ocean_freight' },
  { title: 'Urban Express Imports', value: 'express_imports' },
  { title: 'Urban Store & Ship', value: 'store_and_ship' },
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  return (
    <div id="contact" className="bg-[#013046] bg-opacity-75 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Ready to revolutionize your logistics? Contact us today for a customized solution.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-[#4CAF50]" />
                <span>info@urbanebolt.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-[#4CAF50]" />
                <span>No 95 6th Cross CIL Layout RT Nagar Post Bangalore Karnataka 560032</span>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-4 pt-10">
                <a href="https://www.linkedin.com/in/urbanebolt/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-6 w-6 text-blue-700 hover:text-blue-500 transition duration-200" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61568470507226" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="h-6 w-6 text-blue-600 hover:text-blue-400 transition duration-200" />
                </a>
                <a href="https://www.instagram.com/urbanebolt/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-6 w-6 text-pink-600 hover:text-pink-400 transition duration-200" />
                </a>
                <a href="https://x.com/urbanebolt" target="_blank" rel="noopener noreferrer">
                  <SiX className="h-6 w-6 text-blue-400 hover:text-blue-300 transition duration-200" />
                </a>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              {/* Services Dropdown */}
              <div>
                <label htmlFor="services" className="block text-sm font-medium text-gray-300 mb-1">
                  Select a Service
                </label>
                <select
                  id="services"
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-[#4CAF50] focus:outline-none focus:text-gray-800"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-[#4CAF50] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-[#4CAF50] focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-[#4CAF50] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4CAF50] text-white px-6 py-3 rounded-md font-medium hover:bg-[#45a049]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}