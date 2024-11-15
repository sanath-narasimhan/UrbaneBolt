import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
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
          </div>
          <div>
            <form className="space-y-4">
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