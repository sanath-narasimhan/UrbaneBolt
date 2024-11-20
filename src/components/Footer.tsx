import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#013046]  text-white py-4 z-100">
    <div className="max-w-7xl mx-auto text-center " style={{ backgroundColor: '#013046' }}>
        <p>&copy; {new Date().getFullYear()} <span style={{ color: 'white' }}>urban</span>
        <span style={{ color: '#40AC49' }}>ebolt</span>. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-gray-400 hover:text-white"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 